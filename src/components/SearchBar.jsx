function SearchBar({ filterTitle, setFilterTitle }) {
  return (
    <div>
      <label htmlFor="filterTitle">Ricerca per titolo:</label>
      <input
        id="filterTitle"
        name="filterTitle"
        type="text"
        placeholder="Digita il titolo..."
        value={filterTitle}
        onChange={(event) => setFilterTitle(event.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
