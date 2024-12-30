import "./SearchBar.css";
interface SearchBarProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  setNavInput: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar: React.FC<SearchBarProps> = ({
  setSearchInput,
  searchInput,
  setNavInput,
}) => {
  console.log(searchInput);

  return (
    <section>
      <input
        type="text"
        placeholder="Search by City Name"
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const inputValue = e.target.value.trim();
          setSearchInput(inputValue);
        }}
      />
      <button type="button" onClick={() => setNavInput(searchInput)}>
        Search
      </button>
    </section>
  );
};

export default SearchBar;
