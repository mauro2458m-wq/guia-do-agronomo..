import React from 'react';

const ClimateIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
);

interface PlantingTimeCardProps {
  description: string;
  icon: React.ReactNode;
  climateConditions?: string;
}

const PlantingTimeCard: React.FC<PlantingTimeCardProps> = ({ description, icon, climateConditions }) => {
  if (!description) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 lg:col-span-3">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-green-500 mr-4">{icon}</div>
          <h3 className="text-2xl font-bold text-gray-800">Época Ideal de Plantio</h3>
        </div>
        <div className="border-l-4 border-green-200 pl-4 mb-6">
          <p className="text-gray-600 mt-1">{description}</p>
        </div>

        {climateConditions && (
            <>
                <div className="flex items-center mb-4">
                    <div className="text-blue-500 mr-4"><ClimateIcon /></div>
                    <h3 className="text-2xl font-bold text-gray-800">Condições Climáticas Ideais</h3>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                    <p className="text-gray-600 mt-1">{climateConditions}</p>
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default PlantingTimeCard;