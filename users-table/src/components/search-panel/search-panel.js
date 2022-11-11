
function BtnClear({setSearch}) {
  return (
    <button 
      onClick={() => setSearch('')}
      className="btn clean-btn">
      Очистить фильтр
    </button>
  )
}

function SearchPanel({active, setActive, search, setSearch}) {
  return (
    <div className="search-panel">
      <div className="form">
        <input
          type="text"
          className="search"
          placeholder="Поиск по имени или e-mail"
          value={search}
          onChange={e => {
            setActive(true);
            setSearch(e.target.value)
          }}
        />
        <div>
          {active ? <BtnClear setSearch={setSearch}/> : null}
        </div>
      </div>
    </div>
  )
}

export default SearchPanel;