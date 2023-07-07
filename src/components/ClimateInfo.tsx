const ClimateInfo = ({
  // rain,
  wind,
  humidity,
}: {
  // rain: number | undefined;
  wind: number | undefined;
  humidity: number | undefined;
}) => {
  interface rowTypes {
    imageSrc: string;
    imageAlt: string;
    label: string;
    content: number | undefined;
    unit: string;
  }

  const Row = ({ imageSrc, imageAlt, label, content, unit }: rowTypes) => {
    return (
      <div className="flex p-3 w-72 sm:w-80 md:w-96 justify-between m-auto items-center bg-[#FFFFFF5C] rounded-2xl border border-[#FFFFFF10]">
        <div className="flex space-x-4 items-center">
          <div className="flex justify-center align-center p-2 w-9 h-9 bg-[#FFFFFFE5] rounded-xl">
            <img src={imageSrc} alt={imageAlt} />
          </div>
          <p className="text-[#303345] text-xs text=[#303345]">{label}</p>
        </div>
        <p className="text-[#303345] text-xs pr-5 text=[#303345]">
          {content}
          {unit}
        </p>
      </div>
    );
  };

  return (
    <div className="flex-columm w-72 sm:w-80 md:w-96 m-auto space-y-2">
      <Row
        imageSrc={"/src/assets/umbrella.svg"}
        imageAlt={"umbrela icon"}
        label={"Rain probability"}
        content={3}
        unit={"%"}
      />
      <Row
        imageSrc={"/src/assets/wind.svg"}
        imageAlt={"wind icon"}
        label={"Wind"}
        content={wind}
        unit={"km/h"}
      />
      <Row
        imageSrc={"/src/assets/drop.svg"}
        imageAlt={"drop icon"}
        label={"Humidity"}
        content={humidity}
        unit={"%"}
      />
    </div>
  );
};

export default ClimateInfo;
