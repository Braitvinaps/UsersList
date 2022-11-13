import { useState } from 'react';
import './sort-panel.css'

function SortPanel() {
    const[regData, setRegData] = useState(false);
    const[rating, setRating] = useState(false);
    
    let classNames = (btn) => {
        return `btn sort-btn ${btn ? 'active' : null}`
    }

    return (
        <div className="sort-panel">
            <label>Сортировка: </label>
            <button 
                onClick={() => {
                    setRegData(true)
                    setRating(false)
                }}
                className={classNames(regData)}>Дата регистрации</button>
            <button 
                onClick={() => {
                    setRating(true)
                    setRegData(false)
                }}
                className={classNames(rating)}>Рейтинг</button>
        </div>
    )
}

export default SortPanel;