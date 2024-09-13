import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';


const Navbar = () => {
    const { username, email } = useSelector((state) => state.form.formData);
     return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                <li>
                    <Link to="/dictionary">Dictionary</Link>
                </li>
                
            </ul>
            <ul >
                {username && email ? (
                    <li className='navbar-right'>
                          <span className="navbar-text">Bienvenido: {username} ({email})</span>
                    </li>
                ) : (
                    <li className='navbar-right'>
                          <Link to="/login" className="login-link" >Login</Link>
                    </li>

                )} 
            </ul>
        </nav>
    );
};

export default Navbar;