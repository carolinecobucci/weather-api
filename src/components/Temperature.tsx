const Temperature = ({
  temperature,
  description,
}: {
  temperature: number | undefined;
  description: string | undefined;
}) => {
  return (
    <div className="flex m-auto w-72 sm:w-80 md:w-96 items-center justify-center mb-6 space-x-4">
      <img src="/src/assets/cludy.svg" alt="temperature icon" />
      <div>
        <div className="flex">
          <p className="text-5xl font-bold text-[#303345]">{temperature}</p>
          <p className="text-sm text-[#303345]">°C</p>
        </div>
        <p className="text-base text-[#303345] ml-2">{description}</p>
      </div>
    </div>
  );
};

export default Temperature;
