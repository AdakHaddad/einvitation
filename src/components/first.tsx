import { FC } from "react";

interface FirstPageProps {
  onOpenInvitation: () => void;
}

const FirstPage: FC<FirstPageProps> = ({ onOpenInvitation }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src="https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-mosque-ramadan-kareem-islamic-frame-transparent-background-arabesuqe-style-png-image_6584837.png"
        alt="Kubah"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <button
        className="px-6 py-3 bg-yellow-700 text-white rounded-lg relative overflow-hidden"
        onClick={onOpenInvitation}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-white animate-openEnvelope"></span>
        <span className="relative z-10">Buka Undangan</span>
      </button>
      <style>{`
        .animate-openEnvelope {
          animation: openEnvelope 1s ease-out forwards;
        }

        @keyframes openEnvelope {
          0% {
            transform: translateY(0) rotateX(0);
          }
          100% {
            transform: translateY(-100%) rotateX(90deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FirstPage;
