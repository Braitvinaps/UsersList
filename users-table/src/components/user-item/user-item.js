import './user-item.css'

function UserItem({ users, deleteItem }) {
    return (
        users.map((user, i) => {
            const { id, username, email, registration_date, rating } = user

            return (
                <tr key={id}>
                    <td className="td-username">{username}</td>
                    <td>{email}</td>
                    <td>{registration_date.slice(0, 10).split('-').reverse().join('.')}</td>
                    <td>{rating}</td>
                    <td>
                        <button
                            className="btn cancel-btn"
                            onClick={() => deleteItem(id)}
                        >✖</button>
                    </td>
                </tr>
            )
        })
    )

}
export default UserItem;