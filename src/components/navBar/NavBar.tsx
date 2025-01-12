import "./NavBar.css";
interface NavBarProps {
  setCityNameInput: React.Dispatch<React.SetStateAction<string>>;
}
const NavBar: React.FC<NavBarProps> = ({ setCityNameInput }) => {
  return (
    <nav className="flex nav">
      <button
        type="button"
        aria-label="Fetch current weather in Düsseldorf"
        onClick={() => setCityNameInput("Dusseldorf")}
      >
        Düsseldorf
      </button>
      <button
        type="button"
        aria-label="Fetch current weather in Busan"
        onClick={() => setCityNameInput("Busan")}
      >
        Busan
      </button>
      <button
        type="button"
        aria-label="Fetch current weather in Fukuoka"
        onClick={() => setCityNameInput("Fukuoka")}
      >
        Fukuoka
      </button>
      <button
        type="button"
        aria-label="Fetch current weather in Sydney"
        onClick={() => setCityNameInput("Sydney")}
      >
        Sydney
      </button>
      <button
        type="button"
        aria-label="Fetch current weather in Vancouver"
        onClick={() => setCityNameInput("Vancouver")}
      >
        Vancouver
      </button>
    </nav>
  );
};

export default NavBar;
