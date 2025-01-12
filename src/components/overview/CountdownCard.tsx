import { useEffect, useState } from "react";

const CountdownCard = () => {
  const targetDate = useTargetDate();
  const timeLeft = useTimeLeft(targetDate);

  return (
    <div className="bg-indigo-600 bg-opacity-10 border border-indigo-600 border-opacity-15 rounded-lg p-6 max-w-sm w-full">
      <div className="flex justify-between items-center">
        <div className="items-end space-x-2">
          <span className="block text-7xl leading-[5rem] font-bold text-indigo-600">{timeLeft.days}</span>
          <span className="text-base text-gray-600">Tage</span>
        </div>
        <div className="">
          <div className="flex items-center space-x-2">
            <span className="block text-2xl w-8 text-right font-bold text-indigo-600">{timeLeft.hours}</span>
            <span className="text-sm text-gray-600">Stunden</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="block text-2xl w-8 text-right font-bold text-indigo-600">{timeLeft.minutes}</span>
            <span className="text-sm text-gray-600">Minuten</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="block w-8 text-right text-2xl font-bold text-indigo-600">{timeLeft.seconds}</span>
            <span className="text-sm text-gray-600">Sekunden</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownCard;

const useTargetDate = () => {
  return "2026-12-24T00:00:00";
};

const useTimeLeft = (targetDate: string) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
