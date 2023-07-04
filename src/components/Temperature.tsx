const Temperature = () => {
  return (
    <div className="sm:flex p-3 w-80 m-auto items-center justify-center space-x-1">
      <img src="/src/assets/cludy.svg" alt="temperature icon" />
      <div>
        <p>19°C</p>
        <p>Rainy</p>
      </div>
    </div>
  );
};

export default Temperature;
