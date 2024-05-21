import { FC } from 'react';

interface Person {
  name: string;
  photo: string;
}

interface BrideGroomProps {
  groom: Person;
  bride: Person;
}

const BrideGroom: FC<BrideGroomProps> = ({ groom, bride }) => {
  return (
    <div className="flex justify-around my-8">
      <div className="text-center">
        <img src={groom.photo} alt={groom.name} className="rounded-full w-40 h-40 object-cover" />
        <p className="mt-2">{groom.name}</p>
      </div>
      <div className="text-center">
        <img src={bride.photo} alt={bride.name} className="rounded-full w-40 h-40 object-cover" />
        <p className="mt-2">{bride.name}</p>
      </div>
    </div>
  );
}

export default BrideGroom;
