import React, { useState } from 'react';
import type { TreatmentType, Disease } from '../types';

// --- START: Pest Icons ---
const CaterpillarIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15C3 12.7909 4.79086 11 7 11H9C11.2091 11 13 12.7909 13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 15C11 12.7909 12.7909 11 15 11H17C19.2091 11 21 12.7909 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5" cy="10" r="1" fill="currentColor"/>
    </svg>
);

const AphidIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20C15.3137 20 18 16.6421 18 13C18 9.35786 15.3137 6 12 6C8.68629 6 6 9.35786 6 13C6 16.6421 8.68629 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 5L8 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 5L16 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 11L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 11L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const MiteIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 10V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 9L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 9L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 15L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 15L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const GenericBugIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="12" height="10" rx="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 4H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const SprayIcon: React.FC = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10H18M21 10L18.5 3.5L16 5.5L13.5 3.5L11 5.5L8.5 3.5L6 5.5L3.5 3.5L6 10H3C2.44772 10 2 10.4477 2 11V18C2 18.5523 2.44772 19 3 19H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 19H21C21.5523 19 22 18.5523 22 18V11C22 10.4477 21.5523 10 21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 14H18V19H6V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// --- END: Pest Icons ---

// --- START: Disease Icons ---
const FungusIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 22C10 20.8954 10.8954 20 12 20C13.1046 20 14 20.8954 14 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12H18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const VirusIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.36 8.24L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.64 8.24L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V17.77" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const BacteriaIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 10L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 14L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const GenericDiseaseIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 16 20 10C20 4 16.4183 2 12 2C7.58172 2 4 4 4 10C4 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
    </svg>
);

const BellIcon: React.FC = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 22.0001 12 22.0001C11.6496 22.0001 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ShieldCheckIcon: React.FC = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// --- END: Disease Icons ---


// --- START: Treatment Icons ---
const ChemicalIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const OrganicIcon: React.FC = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 16 20 10C20 4 16.4183 2 12 2C7.58172 2 4 4 4 10C4 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// --- END: Treatment Icons ---

// --- START: Icon Selector Functions ---
const getIconForPestCategory = (category: string): React.ReactNode => {
    const lowerCaseCategory = category.toLowerCase();
    if (lowerCaseCategory.includes('sugador')) return <AphidIcon />;
    if (lowerCaseCategory.includes('mastigador')) return <CaterpillarIcon />;
    if (lowerCaseCategory.includes('perfurador')) return <GenericBugIcon />;
    if (lowerCaseCategory.includes('raspador')) return <MiteIcon />;
    return <GenericBugIcon />;
};

const getIconForDisease = (diseaseName: string): React.ReactNode => {
    const lowerCaseName = diseaseName.toLowerCase();

    if (lowerCaseName.includes('ferrugem') || lowerCaseName.includes('oídio') || lowerCaseName.includes('míldio') || lowerCaseName.includes('antracnose') || lowerCaseName.includes('fúngica')) {
        return <FungusIcon />;
    }
    if (lowerCaseName.includes('mosaico') || lowerCaseName.includes('virose')) {
        return <VirusIcon />;
    }
    if (lowerCaseName.includes('bacteriana') || lowerCaseName.includes('cancro') || lowerCaseName.includes('podridão')) {
        return <BacteriaIcon />;
    }
    
    return <GenericDiseaseIcon />; // Fallback icon
};
// --- END: Icon Selector Functions ---

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  items: Array<{ 
    nome: string; 
    descricao: string; 
    tipo?: TreatmentType; 
    categoria?: string; 
    alertaPrecoce?: string; 
    dicasPrevencao?: string;
    solucao?: {
        veneno: string;
        aplicacao: string;
    };
  }>;
  cardType?: 'pragas' | 'tratamentos' | 'doencas';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, items, cardType }) => {
  const [treatmentFilter, setTreatmentFilter] = useState<'todos' | TreatmentType>('todos');
  const [pestFilter, setPestFilter] = useState<string>('todos');
  const [configuredAlerts, setConfiguredAlerts] = useState<Set<string>>(new Set());

  if (!items || items.length === 0) {
    return null;
  }
  
  const pestCategories =
    cardType === 'pragas'
      ? items
          .map((item) => item.categoria)
          .filter((category): category is string => typeof category === 'string')
          .filter((value, index, self) => self.indexOf(value) === index)
      : [];

  const filteredItems = (() => {
    if (cardType === 'tratamentos' && treatmentFilter !== 'todos') {
      return items.filter(item => item.tipo === treatmentFilter);
    }
    if (cardType === 'pragas' && pestFilter !== 'todos') {
      return items.filter(item => item.categoria === pestFilter);
    }
    return items;
  })();
  
  const handleConfigureAlert = (itemName: string) => {
    setConfiguredAlerts(prev => new Set(prev).add(itemName));
  };

  const getFilterButtonClass = (buttonFilter: string, currentFilter: string) => {
    return `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
      currentFilter === buttonFilter
        ? 'bg-green-600 text-white shadow'
        : 'bg-gray-200 text-gray-700 hover:bg-green-200'
    }`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-green-500 mr-4">{icon}</div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        
        {cardType === 'tratamentos' && (
          <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
            <button onClick={() => setTreatmentFilter('todos')} className={getFilterButtonClass('todos', treatmentFilter)}>Todos</button>
            <button onClick={() => setTreatmentFilter('quimico')} className={getFilterButtonClass('quimico', treatmentFilter)}>Químicos</button>
            <button onClick={() => setTreatmentFilter('organico')} className={getFilterButtonClass('organico', treatmentFilter)}>Orgânicos</button>
          </div>
        )}

        {cardType === 'pragas' && pestCategories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
            <button onClick={() => setPestFilter('todos')} className={getFilterButtonClass('todos', pestFilter)}>Todas</button>
            {pestCategories.map(category => (
                <button key={category} onClick={() => setPestFilter(category)} className={getFilterButtonClass(category, pestFilter)}>
                    {category}
                </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isAlertConfigured = configuredAlerts.has(item.nome);
            return (
              <div key={index} className="border-l-4 border-green-200 pl-4">
                <div className="flex items-center space-x-2">
                  {cardType === 'pragas' && typeof item.categoria === 'string' && (
                    <div className="text-gray-500 flex-shrink-0">{getIconForPestCategory(item.categoria)}</div>
                  )}
                  {cardType === 'doencas' && (
                    <div className="text-yellow-600 flex-shrink-0">{getIconForDisease(item.nome)}</div>
                  )}
                  {cardType === 'tratamentos' && item.tipo === 'quimico' && <div className="text-red-500 flex-shrink-0"><ChemicalIcon /></div>}
                  {cardType === 'tratamentos' && item.tipo === 'organico' && <div className="text-green-500 flex-shrink-0"><OrganicIcon /></div>}
                  <h4 className="font-semibold text-lg text-gray-700">{item.nome}</h4>
                </div>
                <p className="text-gray-600 mt-1">{item.descricao}</p>
                
                {(cardType === 'pragas' || cardType === 'doencas') && item.dicasPrevencao && (
                    <div className="mt-3 p-3 bg-cyan-50 border-l-4 border-cyan-400 rounded-r-lg">
                        <div className="flex items-center text-cyan-800">
                            <ShieldCheckIcon />
                            <span className="ml-2 font-semibold text-sm">Dicas de Prevenção</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-1 ml-6">{item.dicasPrevencao}</p>
                    </div>
                )}

                {cardType === 'pragas' && item.solucao && (
                    <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                        <div className="flex items-center text-red-800">
                            <SprayIcon />
                            <span className="ml-2 font-semibold text-sm">Solução Recomendada</span>
                        </div>
                        <div className="text-sm text-gray-700 mt-2 ml-6">
                            <p><strong className="font-semibold">Veneno:</strong> {item.solucao.veneno}</p>
                            <p className="mt-1"><strong className="font-semibold">Aplicação:</strong> {item.solucao.aplicacao}</p>
                        </div>
                    </div>
                )}

                {cardType === 'doencas' && item.alertaPrecoce && (
                   <div className="mt-3 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                       <div className="flex items-center text-amber-800">
                           <BellIcon />
                           <span className="ml-2 font-semibold text-sm">Alerta de Detecção Precoce</span>
                       </div>
                       <p className="text-sm text-gray-700 mt-1 ml-6">{item.alertaPrecoce}</p>
                       <button
                           onClick={() => handleConfigureAlert(item.nome)}
                           disabled={isAlertConfigured}
                           className={`mt-2 ml-6 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
                               isAlertConfigured
                                   ? 'bg-green-600 text-white cursor-not-allowed'
                                   : 'bg-amber-500 text-white hover:bg-amber-600'
                           }`}
                       >
                           {isAlertConfigured ? 'Alerta Configurado ✓' : 'Configurar Alerta'}
                       </button>
                   </div>
                )}
              </div>
            )
          })}
          {filteredItems.length === 0 && (
            <p className="text-gray-500 pl-4">Nenhum item encontrado para o filtro selecionado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;