import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from '../modal/modal';
import SearchPanel from '../search-panel/search-panel';
import UsersList from '../users-list/users-list';
import './App.css';

function App() {
  const URL = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users';

  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(URL)
      setUsers(res.data)
    }
    getUsers()
  },[])


return (
  <div className="App">
    <div className="wrapper">
      <div className="container">
        <h1>Список пользователей</h1>
        <SearchPanel />
        <UsersList
          users={users}
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
  </div>
);
}

export default App;
