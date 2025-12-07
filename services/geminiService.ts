import { GoogleGenAI, Type } from '@google/genai';
import type { CropInfo } from '../types';

const cropInfoSchema = {
  type: Type.OBJECT,
  properties: {
    pragas: {
      type: Type.ARRAY,
      description: 'Lista das pragas mais comuns que afetam a cultura.',
      items: {
        type: Type.OBJECT,
        properties: {
          nome: {
            type: Type.STRING,
            description: 'O nome comum da praga.',
          },
          descricao: {
            type: Type.STRING,
            description: 'Uma breve descrição da praga, seus danos e características.',
          },
          categoria: {
            type: Type.STRING,
            description: "A categoria da praga com base no seu aparelho bucal ou dano (ex: 'Sugador', 'Mastigador', 'Perfurador', 'Raspador').",
          },
          dicasPrevencao: {
            type: Type.STRING,
            description: "Dicas práticas para prevenir a infestação desta praga."
          },
          solucao: {
            type: Type.OBJECT,
            description: "A solução para combater a praga, incluindo o veneno e como aplicá-lo.",
            properties: {
                veneno: {
                    type: Type.STRING,
                    description: "O nome do princípio ativo ou do produto comercial recomendado para combater a praga."
                },
                aplicacao: {
                    type: Type.STRING,
                    description: "Instruções claras sobre como aplicar o veneno, incluindo dosagem, frequência e precauções."
                }
            },
            required: ['veneno', 'aplicacao']
          }
        },
        required: ['nome', 'descricao', 'categoria'],
      },
    },
    doencas: {
      type: Type.ARRAY,
      description: 'Lista das doenças mais comuns que afetam a cultura.',
      items: {
        type: Type.OBJECT,
        properties: {
          nome: {
            type: Type.STRING,
            description: 'O nome comum da doença.',
          },
          descricao: {
            type: Type.STRING,
            description: 'Uma breve descrição da doença, seus sintomas e condições favoráveis.',
          },
          alertaPrecoce: {
            type: Type.STRING,
            description: 'Uma breve descrição dos critérios para detecção precoce da doença, como condições climáticas (ex: "alta umidade e temperaturas acima de 25°C").'
          },
          dicasPrevencao: {
            type: Type.STRING,
            description: "Dicas práticas para prevenir a ocorrência desta doença."
          }
        },
        required: ['nome', 'descricao'],
      },
    },
    tratamentos: {
      type: Type.ARRAY,
      description: 'Lista de tratamentos recomendados, incluindo pesticidas e práticas culturais.',
      items: {
        type: Type.OBJECT,
        properties: {
          nome: {
            type: Type.STRING,
            description: 'O nome do tratamento ou produto.',
          },
          descricao: {
            type: Type.STRING,
            description: 'Uma descrição de como aplicar o tratamento ou a prática recomendada.',
          },
          tipo: {
            type: Type.STRING,
            description: "Classifique o tratamento como 'quimico' ou 'organico'.",
            enum: ['quimico', 'organico']
          }
        },
        required: ['nome', 'descricao', 'tipo'],
      },
    },
    epocaPlantio: {
        type: Type.STRING,
        description: 'Uma descrição concisa sobre a época ideal de plantio para a cultura, considerando as principais regiões produtoras no Brasil.'
    },
    condicoesClimaticas: {
        type: Type.STRING,
        description: 'Uma breve descrição das condições climáticas ideais para o plantio, como temperatura, umidade e luminosidade.'
    }
  },
  required: ['pragas', 'doencas', 'tratamentos', 'epocaPlantio'],
};


export const fetchCropInfo = async (cropName: string): Promise<CropInfo> => {
  // Inicializa o cliente GoogleGenAI aqui para evitar falhas no carregamento inicial
  // se a chave de API não estiver disponível imediatamente.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Aja como um agrônomo especialista. Para a cultura de '${cropName}', forneça uma lista das 3 pragas mais comuns (classificando cada uma em uma categoria como 'Sugador', 'Mastigador' ou 'Perfurador', incluindo dicas de prevenção, e uma solução detalhada com o veneno recomendado e o modo de aplicação para cada praga), as 3 doenças mais comuns (incluindo critérios para alerta de detecção precoce e dicas de prevenção para cada uma), 3 recomendações de tratamento (classificando cada um como 'quimico' ou 'organico'), a época ideal de plantio e uma breve descrição das condições climáticas ideais. Retorne a resposta estritamente como um objeto JSON, seguindo o schema definido.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: cropInfoSchema,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('A API não retornou texto.');
    }
    
    // O texto de resposta já é uma string JSON por causa do responseMimeType
    const parsedData: CropInfo = JSON.parse(text.trim());
    return parsedData;

  } catch (error) {
    console.error("Erro ao buscar informações da cultura:", error);
    if (error instanceof Error && (error.message.includes('API key not valid') || error.message.includes('API_KEY'))) {
      throw new Error('A chave da API é inválida ou não foi configurada corretamente no ambiente.');
    }
    throw new Error('Não foi possível obter os dados da cultura. Verifique a sua conexão ou a configuração da chave de API.');
  }
};