import './sort-panel.css'

function SortPanel({setSort, onSort, regData, setRegData, rating, setRating }) {

    // const [regData, setRegData] = useState(false); /* кнопки сортировки */
    // const [rating, setRating] = useState(false);

    let classNames = (btn) => {
        return `btn sort-btn ${btn ? 'active' : null}`
    }

    return (
        <div className="sort-panel">
            <label>Сортировка: </label>
            <button 
                onClick={() => {
                    setRegData(true)
                    onSort('registration_date')
                    setRating(false)
                    setSort(true)
                }}
                className={classNames(regData)}>Дата регистрации</button>
            <button 
                onClick={() => {
                    setRating(true)
                    onSort('rating')
                    setRegData(false)
                    setSort(true)
                }}
                className={classNames(rating)}>Рейтинг</button>
        </div>
    )
}

export default SortPanel;