function UserItem({ users, setModal }) {

    return (
        users.map((user) => {
            const { id, username, email, registration_date, rating } = user

            return (
                <>
                    <tr key={id}>
                        <td className="td-username">{username}</td>
                        <td>{email}</td>
                        <td>{registration_date.slice(0, 10).split('-').reverse().join('.')}</td>
                        <td>{rating}</td>
                        <td>
                            <button
                                className="btn cancel-btn"
                                onClick={() => setModal(true)}
                            >✖</button>
                        </td>
                    </tr>
                </>
            )
        })
    )

}
export default UserItem;