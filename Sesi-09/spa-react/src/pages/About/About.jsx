import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <p>
            Ini adalah halaman about
            </p>
            <Link to="about-company">About Company</Link> | {' '}
            <Link to="about-me">About Me</Link>
            <Outlet />
        </div>
    );
}
    
export default About;