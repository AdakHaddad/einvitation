import { FC } from "react";

interface MapEmbedProps {
  locationUrl: string;
}

const MapEmbed: FC<MapEmbedProps> = ({ locationUrl }) => {
  return (
    <div className="my-8">
      <iframe
        src={locationUrl}
        width="100%"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
