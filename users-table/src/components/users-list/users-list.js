
import SortPanel from "../sort-panel/sort-panel";
import UserItem from "../user-item/user-item";

function UsersList({users, setUsers, setModal}) {
  

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
              setModal={setModal}/>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersList;