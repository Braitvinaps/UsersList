import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from '../modal/modal';
import Pagination from '../pagination/pagination';
import SearchPanel from '../search-panel/search-panel';
import UsersList from '../users-list/users-list';
import './App.css';

function App() {
  const URL = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users';

  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(5)

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(URL)
      setUsers(res.data)
    }
    getUsers()
  }, [])

  // пагинация
  const lastDataIndex = currentPage * dataPerPage
  const firstDataIndex = lastDataIndex - dataPerPage
  const currentData = users.slice(firstDataIndex, lastDataIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <h1>Список пользователей</h1>
          <SearchPanel />
          <UsersList
            users={currentData}
            setUsers={setUsers}
            setModal={setModal} />
        </div>
      </div>
      <Modal
        title={'Вы уверены, что хотите удалить пользователя?'}
        isOpened={modal}
      >
        <div className="btn-modal">
          <button className='btn modal-yes'>Да</button>
          <button
            className='btn modal-no'
            onClick={() => setModal(false)}>Нет</button>
        </div>
      </Modal>
      <Pagination
        currentPage={currentPage}
        dataPerPage={dataPerPage}
        totalData={users.length}
        paginate={paginate} />
    </div>
  );
}

export default App;
