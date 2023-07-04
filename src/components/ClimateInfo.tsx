const ClimateInfo = () => {
  return (
    <div className="sm:flex-columm w-80 m-auto space-y-2">
      <div className="sm:flex p-3 w-80 justify-between m-auto items-center bg-white bg-opacity-3 rounded-xl border-2 border-white border-opacity-5">
        <div className="sm:flex space-x-4 items-center">
          <div className="sm:flex justify-center align-center p-1 w-10 h-10 bg-white bg-opacity-90 rounded-xl">
            <img src="/src/assets/umbrella.svg" alt="umbrela icon" />
          </div>
          <p>Rain probability</p>
        </div>
        <p>3%</p>
      </div>
      <div className="sm:flex p-3 w-80 justify-between m-auto items-center bg-white bg-opacity-3 rounded-xl border-2 border-white border-opacity-5">
        <div className="sm:flex space-x-4 items-center">
          <div className="sm:flex justify-center align-center p-2 w-10 h-10 bg-white bg-opacity-90 rounded-xl">
            <img src="/src/assets/wind.svg" alt="umbrela icon" />
          </div>
          <p>Wind</p>
        </div>
        <p>19km/h</p>
      </div>
      <div className="sm:flex p-3 w-80 justify-between m-auto items-center bg-white bg-opacity-3 rounded-xl border-2 border-white border-opacity-5">
        <div className="sm:flex space-x-4 items-center">
          <div className="sm:flex justify-center align-center p-3 w-10 h-10 bg-white bg-opacity-90 rounded-xl">
            <img src="/src/assets/drop.svg" alt="umbrela icon" />
          </div>
          <p>Humidity</p>
        </div>
        <p>64%</p>
      </div>
    </div>
  );
};

export default ClimateInfo;
