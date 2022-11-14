import SortPanel from "../sort-panel/sort-panel";
import UserItem from "../user-item/user-item";

import './users-list.css'

function UsersList({ users, deleteItem, setSort, onSort, regData, setRegData, rating, setRating }) {

  return (
    <>
      <SortPanel 
        onSort={onSort}
        setSort={setSort}
        regData={regData}
        setRegData={setRegData}
        rating={rating}
        setRating={setRating}/>
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
              deleteItem={deleteItem} />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersList;