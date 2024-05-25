import { FC } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface StickyButtonProps {
  isMuted: boolean;
  toggleMute: () => void;
}

const StickyButton: FC<StickyButtonProps> = ({ isMuted, toggleMute }) => {
  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
    >
      {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
    </button>
  );
};

export default StickyButton;
