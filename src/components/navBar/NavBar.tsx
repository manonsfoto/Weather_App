import "./NavBar.css";
interface NavBarProps {
  setCityNameInput: React.Dispatch<React.SetStateAction<string>>;
}
const NavBar: React.FC<NavBarProps> = ({ setCityNameInput }) => {
  return (
    <nav>
      <button type="button" onClick={() => setCityNameInput("Dusseldorf")}>
        Düsseldorf
      </button>
      <button type="button" onClick={() => setCityNameInput("Busan")}>
        Busan
      </button>
      <button type="button" onClick={() => setCityNameInput("Fukuoka")}>
        Fukuoka
      </button>
      <button type="button" onClick={() => setCityNameInput("Sydney")}>
        Sydney
      </button>
      <button type="button" onClick={() => setCityNameInput("Vancouver")}>
        Vancouver
      </button>
    </nav>
  );
};

export default NavBar;
