import { countries } from "../countries";

const City = ({
  cityName,
  country,
  date,
}: {
  cityName: string | undefined;
  country: string | undefined;
  date: string | undefined;
}) => {
  const getCountryName = (countryCode: string | undefined) => {
    const countryNames: { [key: string]: string } = countries;

    return countryCode ? countryNames[countryCode] : countryCode;
  };

  return (
    <div className="flex-columm p-4 w-72 sm:w-80 md:w-96 justify-between m-auto ">
      <h1 className="text-xl font-medium text-[#313341]">{cityName},</h1>
      <h1 className="text-xl font-medium text-[#313341]">{getCountryName(country)}</h1>
      <p className="text-xs font-normal text-[#9A938C] my-1">{date}</p>
    </div>
  );
};

export default City;
