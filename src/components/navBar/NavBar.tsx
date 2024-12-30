import "./NavBar.css";
interface NavBarProps {
  setNavInput: React.Dispatch<React.SetStateAction<string>>;
}
const NavBar: React.FC<NavBarProps> = ({ setNavInput }) => {
  return (
    <nav>
      <button type="button" onClick={() => setNavInput("Dusseldorf")}>
        Düsseldorf
      </button>
      <button type="button" onClick={() => setNavInput("Busan")}>
        Busan
      </button>
      <button type="button" onClick={() => setNavInput("Fukuoka")}>
        Fukuoka
      </button>
      <button type="button" onClick={() => setNavInput("Sydney")}>
        Sydney
      </button>
      <button type="button" onClick={() => setNavInput("Vancouver")}>
        Vancouver
      </button>
    </nav>
  );
};

export default NavBar;
