import './sort-panel.css'

function SortPanel() {
    return (
        <div className="sort-panel">
            <label>Сортировка: </label>
            <button className="btn sort-btn">Дата регистрации</button>
            <button className="btn sort-btn">Рейтинг</button>
        </div>
    )
}

export default SortPanel;