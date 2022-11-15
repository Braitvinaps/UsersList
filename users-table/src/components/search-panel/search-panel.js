import './search-panel.css'

function BtnClear({ setUsers, users, setSearch, setSort, setRegData, setRating, setCurrentPage }) {
  return (
    <button
      onClick={() => {
        setSearch('');
        setUsers(users.sort((a, b) => a.id - b.id));
        setCurrentPage(1);
        setSort(false);
        setRating(false);
        setRegData(false);
      }}
      className="btn clean-btn">
      Очистить фильтр
    </button>
  )
}

function SearchPanel({ setUsers, users, search, setSearch, setCurrentPage, sort, setSort, setRegData, setRating }) {
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
          {
            (search || sort) ?
              <BtnClear
                setUsers={setUsers}
                users={users}
                setSort={setSort}
                setSearch={setSearch}
                setRegData={setRegData}
                setCurrentPage={setCurrentPage}
                setRating={setRating} /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPanel;