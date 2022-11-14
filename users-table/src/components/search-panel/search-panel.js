import './search-panel.css'

function BtnClear({setSearch, setSort, setRegData, setRating}) {
  return (
    <button 
      onClick={() => {
        setSearch('');
        setSort(false);
        setRating(false);
        setRegData(false);
      }}
      className="btn clean-btn">
      Очистить фильтр
    </button>
  )
}

function SearchPanel({ search, setSearch, setCurrentPage, sort, setSort, setRegData, setRating}) {
  return (
    <div className="search-panel">
      <div className="form">
        <input
          type="text"
          className="search"
          placeholder="Поиск по имени или e-mail"
          value={search}
          onChange={e => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
        />
        <div>
          {(search || sort) ? 
            <BtnClear 
              setSort={setSort}
              setSearch={setSearch}
              setRegData={setRegData}
              setRating={setRating}/> : 
              null}
        </div>
      </div>
    </div>
  )
}

export default SearchPanel;