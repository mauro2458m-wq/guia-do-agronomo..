import React from 'react';

const WhatsAppIcon: React.FC = () => (
  <svg className="h-12 w-12 text-green-500 mx-auto" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L0 24h.057zM8.225 7.15c-.463 0-.927.056-1.381.169-.454.112-.883.28-1.282.511-.399.23-.744.524-1.02.875-.276.35-.454.767-.511 1.231-.057.464-.085.95-.085 1.458 0 .61.099 1.204.298 1.779.199.575.493 1.124.875 1.635.381.511.845.976 1.378 1.378.533.402 1.108.73 1.711.976.604.246 1.229.402 1.86.469.631.067 1.278.102 1.926.102.89 0 1.768-.112 2.62-.338.852-.225 1.642-.562 2.344-1.004.702-.442 1.31-.98 1.804-1.604.494-.625.869-1.332 1.112-2.108.242-.777.363-1.594.363-2.438 0-2.131-.832-4.14-2.31-5.617C17.302 4.14 15.29 3.308 13.16 3.308c-2.131 0-4.14.832-5.617 2.31-.913.914-1.595 2.023-1.959 3.238-.056.246-.085.502-.085.768zM6.924 9.543c.084-.225.225-.424.424-.593.199-.17.424-.298.67-.381.246-.085.493-.127.73-.127.35 0 .644.07.887.209.242.14.424.338.541.604.118.265.176.561.176.887 0 .225-.028.439-.085.644-.056.205-.14.398-.252.567-.112.17-.252.327-.424.456-.17.13-.352.225-.541.282-.19.057-.381.085-.57.085-.35 0-.644-.07-.887-.209-.242-.14-.424-.338-.541-.604-.118-.265-.176-.561-.176-.887 0-.213.028-.424.085-.631z"/>
  </svg>
);


interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
        onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all duration-300 scale-95 opacity-0 animate-fade-in"
        style={{ animationFillMode: 'forwards', animationName: 'modal-pop-in' }}
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal o feche
      >
        <style>{`
          @keyframes modal-pop-in {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
        <WhatsAppIcon />
        <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Precisa de Ajuda?</h2>
        <p className="text-gray-600 mb-8">Para mais dúvidas entre em contato.</p>
        <a
          href="https://wa.me/5581998371952"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Contatar no WhatsApp
        </a>
        <button
          onClick={onClose}
          className="mt-6 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default HelpModal;