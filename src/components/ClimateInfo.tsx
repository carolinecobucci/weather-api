const ClimateInfo = () => {
  return (
    <div className="sm:flex-columm w-80 m-auto">
      <div className="sm:flex p-3 w-80 justify-between m-auto">
        <div className="sm:flex">
          <img src="/src/assets/umbrella.svg" alt="umbrela icon" />
          <p>Rain probability</p>
        </div>
        <p>3%</p>
      </div>
      <div className="sm:flex p-3 w-80 justify-between m-auto">
        <div className="sm:flex">
          <img src="/src/assets/wind.svg" alt="umbrela icon" />
          <p>Wind</p>
        </div>
        <p>19km/h</p>
      </div>
      <div className="sm:flex p-3 w-80 justify-between m-auto">
        <div className="sm:flex">
          <img src="/src/assets/drop.svg" alt="umbrela icon" />
          <p>Humidity</p>
        </div>
        <p>64%</p>
      </div>
    </div>
  );
};

export default ClimateInfo;
