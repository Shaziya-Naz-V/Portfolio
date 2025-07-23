import './Navbar.css';
import { Link } from 'react-router-dom';
function nav() {
    return (
        <div className="navcontainer">
            <div className="name">
                <h2>Shaziya Naz .V</h2>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}
export default nav;