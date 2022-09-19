import { Link, Outlet } from 'react-router-dom';

const Members= () => {
    return (
        <div>
            <h1>Members</h1>
            <p>
                Ini adalah halaman members
            </p>
            <Link to="John Doe">John Doe</Link> | {' '}
            <Link to="Doe Jane">Doe Jane</Link>
            <Outlet />
        </div>
    );
}

export default Members;