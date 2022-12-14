import { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from '../modal/modal';
import Pagination from '../pagination/pagination';
import SearchPanel from '../search-panel/search-panel';
import UsersList from '../users-list/users-list';

import './App.css';

function App() {
  const URL = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users';
  const [users, setUsers] = useState([]);

  const [modal, setModal] = useState(false); /*модальное окно удаления пользователя*/
  const [delId, setDelId] = useState(null); /*id удаляемого пользователя*/

  const [search, setSearch] = useState(''); /*строка поиска*/

  const [sort, setSort] = useState(false); /*активирует отображение кнопки очистить фильтр*/
  const [changeSort, setChangeSort] = useState(true); /*меняет направление сортировки*/
  const [regData, setRegData] = useState(false); /*сортировка по Дате регистрации*/
  const [rating, setRating] = useState(false); /*сортировка по Рейтингу*/

  const [currentPage, setCurrentPage] = useState(1); /*актуальная страница пагинации*/
  const [dataPerPage] = useState(5); /*число записей на странице*/

  // запрос на сервер
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(URL);
      setUsers(res.data);
    }
    getUsers()
  }, [])

  // поиск
  const filteredData = users.filter((name) => {
    if (search === '') {
      return name;
    } else if (name.username.toLowerCase().includes(search.toLowerCase()) || name.email.toLowerCase().includes(search.toLowerCase())) {
      return name;
    }
    return 0;
  })

  // сортировка 
  const onSort = (colum) => {
    if (!changeSort) {
      setUsers(users.sort((a, b) => a[colum] < b[colum] ? 1 : -1));
    } else if (changeSort) {
      setUsers(users.sort((a, b) => a[colum] > b[colum] ? 1 : -1));
    }
    return setChangeSort(!changeSort);
  }

  // вызов модалки для удаления пользователя
  const deleteItem = (id) => {
    setDelId(id);
    setModal(true);
  }

  // пагинация
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = filteredData.slice(firstDataIndex, lastDataIndex);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <h1>Список пользователей</h1>
          <SearchPanel
            users={users}
            setUsers={setUsers}
            setCurrentPage={setCurrentPage}
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
            setRegData={setRegData}
            setRating={setRating}
          />
          <UsersList
            users={currentData}
            setUsers={setUsers}
            setSort={setSort}
            onSort={onSort}
            regData={regData}
            setRegData={setRegData}
            rating={rating}
            setRating={setRating}
            deleteItem={deleteItem} />
        </div>
        <Pagination
          currentPage={currentPage}
          dataPerPage={dataPerPage}
          totalData={filteredData.length}
          paginate={paginate} />
      </div>
      <Modal
        title={'Вы уверены, что хотите удалить пользователя?'}
        isOpened={modal}
      >
        <div className="btn-modal">
          <button
            className='btn modal-yes'
            onClick={() => {
              setUsers(users.filter(item => item.id !== delId));
              setModal(false);
              setCurrentPage(1);
            }}>Да</button>
          <button
            className='btn modal-no'
            onClick={() => setModal(false)}>Нет</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
