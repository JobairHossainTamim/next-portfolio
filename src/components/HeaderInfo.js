const HeaderInfo = ({ Icon, title }) => {
  return (
    <div className="flex items-center space-x-2">
      {Icon}
      <span className="capitalize text-sm md:text-base font-semibold text-violet-700 dark:text-white">
        {title}
      </span>
    </div>
  );
};
export default HeaderInfo;
