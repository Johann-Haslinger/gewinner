const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div>
      <div className="text-3xl font-bold mt-12 mb-1 text-black dark:text-white">{title}</div>
      <div className="text-gray-500 mb-4 dark:text-gray-400">{subtitle}</div>
    </div>
  );
};

export default Header;
