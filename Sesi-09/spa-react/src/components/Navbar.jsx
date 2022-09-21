import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/items');
    }

    return (
        <>
            <NavLink to="/" exact={"true"}>Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/members">Members</NavLink> | <NavLink to="/items">Items</NavLink>
            {localStorage.getItem('token') && <button onClick={handleLogout}>Logout</button>}
        </>
    );
}
    
export default Navbar;