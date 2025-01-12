const SavingsCard = () => {
  const targetSavings = useTargetSavings();
  const currentSavings = useCurrentSavings();
  const percentage = Math.min((currentSavings / targetSavings) * 100, 100).toFixed(1);

  return (
    <div className="bg-green-600 my-3 bg-opacity-10 border border-green-600 border-opacity-15 rounded-xl p-6 max-w-sm w-full">
      <div className="flex justify-between items-center">
        <span className="block text-5xl leading-[5rem] font-bold text-green-600">
        {currentSavings.toLocaleString()}€
        </span>
        <span className="block text-2xl font-bold text-green-600">{percentage}%</span>
      </div>
      <div className="flex justify-between items-center mt-0">
        <span className="text-base text-gray-600">Gespart</span>
        <span className="text-base text-gray-600">Ziel: {targetSavings.toLocaleString()}€</span>
      </div>
      <div className="mt-6 bg-green-600 bg-opacity-10 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default SavingsCard;

const useTargetSavings = () => {
  return 50000;
};

const useCurrentSavings = () => {
  return 3000;
};
