import { useState, useEffect, FC } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  Hari: number;
  Jam: number;
  Menit: number;
  Detik: number;
}

const Countdown: FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { Hari: 0, Jam: 0, Menit: 0, Detik: 0 };

    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-2 text-2xl lg:mt-20 mt-56">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center">
          <span>{(timeLeft as any)[interval]}</span>
          <span>{interval}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
