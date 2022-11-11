
function SearchPanel() {
    return (
        <div className="search-panel">
            <form action="" className="form">
              <input
                type="text"
                className="search"
                placeholder="Поиск по имени или e-mail"
              />
              <div>
                <button className="btn clean-btn">
                  Очистить фильтр
                </button>
              </div>
            </form>
        </div>
    )
}

export default SearchPanel;