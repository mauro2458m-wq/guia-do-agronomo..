export interface Pest {
  nome: string;
  descricao: string;
  categoria: string;
  dicasPrevencao?: string;
  solucao?: {
    veneno: string;
    aplicacao: string;
  };
}

export interface Disease {
  nome: string;
  descricao: string;
  alertaPrecoce?: string;
  dicasPrevencao?: string;
}

export type TreatmentType = 'quimico' | 'organico';

export interface Treatment {
  nome: string;
  descricao: string;
  tipo: TreatmentType;
}

export interface CropInfo {
  pragas: Pest[];
  doencas: Disease[];
  tratamentos: Treatment[];
  epocaPlantio: string;
  condicoesClimaticas?: string;
}