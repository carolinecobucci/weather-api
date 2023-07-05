const Temperature = () => {
  return (
    <div className="flex m-auto w-72 sm:w-80 md:w-96 items-center justify-center mb-6 space-x-4">
      <img src="/src/assets/cludy.svg" alt="temperature icon" />
      <div className="flex">
        <div className="flex-columm">
          <p className="text-5xl font-bold text-[#303345]">19</p>
          <p className="text-base text-[#303345] ml-2">Rainy</p>
        </div>
        <p className="text-sm text-[#303345]">°C</p>
      </div>
    </div>
  );
};

export default Temperature;
