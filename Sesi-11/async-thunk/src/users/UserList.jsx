import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserList = () => {
    const allUser = useSelector(state => state.users.entities)
    const dispatch = useDispatch();

    const doFetchUsers = () => {
        dispatch(fetchUsers());
    }

    return (
        <div>
            <h1>User Data</h1>
            <button onClick={doFetchUsers}>Fetch Users</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {allUser.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;