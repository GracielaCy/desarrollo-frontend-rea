import { Link } from 'react-router-dom';
import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(false);
   // para ver y ocultar password
    const [showPassword, setShowPassword] = useState(false); 
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if (values.password === 'mod7ReactUSIP'){
            dispatch(saveFormData(values));
            console.log('datos guardados en redux');
        }else {
            
            console.log('contraseña incorrecta');
            setShowModalInfo(true);
        }
    };

    const hideModalInfo = () => {
        setShowModalInfo(false);
    }
     //ver password 
    const toggleShowPassword= () => {
        setShowPassword(!showPassword);
    }
    

    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Password Incorrecto"
                onClose={hideModalInfo}
            />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Login Form</h1>
                    <h5>username: {form.formData.username}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                         <button 
                                type='button' 
                                onClick={toggleShowPassword} 
                                className='show-hide-button'
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <Link>Logout</Link>
                        
                   
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;