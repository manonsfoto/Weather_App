import SearchIcon from "../../assets/SVG/SearchIcon";
import "./SearchBar.css";
interface SearchBarProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  setCityNameInput: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar: React.FC<SearchBarProps> = ({
  setSearchInput,
  searchInput,
  setCityNameInput,
}) => {
  return (
    <section className="searchbar flex">
      <div className="input-wrapper">
        <input
          type="text"
          id="searchInput"
          placeholder="Search your location"
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            setSearchInput(inputValue);
          }}
        />
        <button
          className="btn-search"
          type="button"
          onClick={() => {
            if (!searchInput) return;
            setCityNameInput(searchInput.trim());
            setSearchInput("");
          }}
        >
          <SearchIcon />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
