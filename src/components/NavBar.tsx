import magnifierIcon from "/src/assets/magnifier.svg";
import menuIcon from "/src/assets/menu.svg";

const Header = () => {
  return (
    <div className="flex p-3 w-72 sm:w-80 md:w-96 justify-between m-auto mt-4">
      <img className="h-5" src={magnifierIcon} alt="magnifier icon" />
      <img className="h-4" src={menuIcon} alt="menu icon" />
    </div>
  );
};

export default Header;
