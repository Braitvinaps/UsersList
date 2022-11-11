import './search-panel.css'

function BtnClear({setSearch}) {
  return (
    <button 
      onClick={() => setSearch('')}
      className="btn clean-btn">
      Очистить фильтр
    </button>
  )
}

function SearchPanel({setActive, search, setSearch, setCurrentPage}) {
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
            setCurrentPage(1)
          }}
        />
        <div>
          {search ? <BtnClear setSearch={setSearch}/> : null}
        </div>
      </div>
    </div>
  )
}

export default SearchPanel;