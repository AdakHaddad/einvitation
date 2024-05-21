import { FC } from "react";

interface EventDetailsProps {
  date: string;
  location: string;
}

const EventDetails: FC<EventDetailsProps> = ({ date, location }) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-2xl font-bold">Detail Acara</h2>
      <p className="mt-2">{date}</p>
      <p className="mt-2">{location}</p>
    </div>
  );
};

export default EventDetails;
