import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink to="/" exact={"true"}>Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/members">Members</NavLink> | <NavLink to="/items">Items</NavLink>
        </>
    );
}
    
export default Navbar;