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
    <section>
      <input
        type="text"
        placeholder="Search by City Name"
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const inputValue = e.target.value;
          setSearchInput(inputValue);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setCityNameInput(searchInput.trim());
          setSearchInput("");
        }}
      >
        Search
      </button>
    </section>
  );
};

export default SearchBar;
