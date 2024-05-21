import { FC } from "react";

interface FirstPageProps {
  onOpenInvitation: () => void;
}

const FirstPage: FC<FirstPageProps> = ({ onOpenInvitation }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        onClick={onOpenInvitation}
      >
        Buka Undangan
      </button>
    </div>
  );
};

export default FirstPage;
