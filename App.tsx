import React, { useState, useCallback } from 'react';
import { CROPS, type CropData } from './constants';
import { fetchCropInfo } from './services/geminiService';
import InfoCard from './components/InfoCard';
import Spinner from './components/Spinner';
import PlantingTimeCard from './components/PlantingTimeCard';
import HelpModal from './components/HelpModal';
import type { CropInfo } from './types';

const LeafIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536A9.017 9.017 0 0112 15c-1.897 0-3.682.52-5.121 1.464M12 9c2.228 0 4.228.934 5.657 2.464M12 3c3.866 0 7.247 2.09 9 5.122A9.008 9.008 0 0112 15.002c-3.866 0-7.247-2.09-9-5.122A9.008 9.008 0 0112 3z" />
  </svg>
);

const BugIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13.18v4.32A2.5 2.5 0 007.5 20h9a2.5 2.5 0 002.5-2.5v-4.32M12 3.5v7.68m-4.5-3.84h9M9 8.5l-3 4.8M15 8.5l3 4.8" />
  </svg>
);

const DiseaseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-.547-1.806zM15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ShieldIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CalendarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const HelpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const App: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<CropData | null>(null);
  const [cropInfo, setCropInfo] = useState<CropInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCropSelect = useCallback(async (crop: CropData) => {
    if (isLoading) return;

    setSelectedCrop(crop);
    setIsLoading(true);
    setError(null);
    setCropInfo(null);

    try {
      const data = await fetchCropInfo(crop.name);
      setCropInfo(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-green-50 font-sans">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center">
          <LeafIcon />
          <h1 className="text-3xl font-bold text-green-800 ml-3">Guia do Agrônomo IA</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <section className="text-center bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Selecione uma Cultura para Análise</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">
            Escolha uma das culturas abaixo para obter informações detalhadas sobre pragas, doenças e tratamentos recomendados, geradas por inteligência artificial.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CROPS.map((crop) => (
              <button
                key={crop.name}
                onClick={() => handleCropSelect(crop)}
                className={`flex items-center justify-center p-4 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1
                  ${selectedCrop?.name === crop.name
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-200'
                  }`}
              >
                <crop.Icon className="h-6 w-6 mr-3 text-green-700" />
                <span>{crop.name}</span>
              </button>
            ))}
          </div>
        </section>

        {isLoading && <Spinner />}
        
        {error && (
            <div className="text-center p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md animate-fade-in">
                <p className="font-bold">Erro!</p>
                <p>{error}</p>
            </div>
        )}

        {cropInfo && !isLoading && selectedCrop && (
          <div className="animate-fade-in">
            <div className="flex items-center bg-white p-6 rounded-xl shadow-lg mb-8 border-l-8 border-green-500">
                <selectedCrop.Icon className="h-16 w-16 text-green-600" />
                <h2 className="text-4xl font-bold text-gray-800 ml-6">{selectedCrop.name}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <PlantingTimeCard 
                description={cropInfo.epocaPlantio} 
                icon={<CalendarIcon />} 
                climateConditions={cropInfo.condicoesClimaticas} 
              />
              <InfoCard title="Pragas Comuns" icon={<BugIcon />} items={cropInfo.pragas} cardType="pragas" />
              <InfoCard title="Doenças Comuns" icon={<DiseaseIcon />} items={cropInfo.doencas} cardType="doencas" />
              <InfoCard title="Tratamentos" icon={<ShieldIcon />} items={cropInfo.tratamentos} cardType="tratamentos" />
            </div>
          </div>
        )}

        {!selectedCrop && !isLoading && (
            <div className="text-center p-10 bg-white rounded-xl shadow-lg animate-fade-in">
                <LeafIcon />
                <h3 className="mt-4 text-xl font-semibold text-gray-700">Bem-vindo ao Guia do Agrônomo IA</h3>
                <p className="mt-2 text-gray-500">Seu assistente inteligente para o manejo de culturas. Comece selecionando uma cultura acima.</p>
            </div>
        )}
      </main>

      {/* Botão de Ajuda Flutuante */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors transform hover:scale-110 z-40"
        aria-label="Ajuda"
      >
        <HelpIcon className="h-6 w-6" />
      </button>

      <HelpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


      <footer className="text-center py-6 mt-8">
        <p className="text-gray-500 text-sm">Desenvolvido com IA do Google Gemini</p>
      </footer>
    </div>
  );
};

export default App;