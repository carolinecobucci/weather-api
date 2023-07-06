const Temperature = ({
  weatherIcon,
  temperature,
  description,
}: {
  weatherIcon: string | undefined;
  temperature: number | undefined;
  description: string | undefined;
}) => {
  const roundedTemp = temperature ? Math.round(temperature) : null;
  const upperCaseDescription = description
    ? description.charAt(0).toUpperCase() + description.slice(1)
    : description;
  const url = `https://openweathermap.org/img/w/${weatherIcon}.png`;

  return (
    <div className="flex m-auto w-72 sm:w-80 md:w-96 items-center justify-center mb-6 space-x-4">
      <img className="w-24" src={url} alt="temperature icon" />
      <div>
        <div className="flex">
          <p className="text-5xl font-bold text-[#303345]">{roundedTemp}</p>
          <p className="text-sm text-[#303345]">°C</p>
        </div>
        <p className="text-base text-[#303345]">{upperCaseDescription}</p>
      </div>
    </div>
  );
};

export default Temperature;
