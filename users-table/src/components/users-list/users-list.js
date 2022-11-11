import SortPanel from "../sort-panel/sort-panel";
import UserItem from "../user-item/user-item";

import './users-list.css'

function UsersList({users, setUsers, deleteItem}) {
  
  return (
    <>
      <SortPanel />
      <div className="table-panel">
        <table className="table">
          <thead>
            <tr>
              <td>Имя пользователя</td>
              <td>E-mail</td>
              <td>Дата регистрации</td>
              <td>Рейтинг</td>
              <td className="cancel-btn"></td>
            </tr>
          </thead>
          <tbody>
            <UserItem 
              users={users}
              deleteItem={deleteItem}/>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersList;