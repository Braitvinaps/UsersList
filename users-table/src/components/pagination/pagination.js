import './pagination.css'

function Pagination({ dataPerPage, totalData, paginate, currentPage }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="center">
            <ul className="pagination">
                {pageNumbers.map(num => (
                    currentPage === num
                        ?
                        <li key={num}>
                            <button
                                className="active"
                                onClick={() => paginate(num)}>
                                {num}
                            </button>
                        </li>
                        :
                        <li key={num}>
                            <button
                                onClick={() => paginate(num)}>
                                {num}
                            </button>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default Pagination