import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Footer from './componets/Footer/Footer';
import Login from './componets/Login/login.jsx';
import CurrentUserContext from './componets/contexts/currentUserContext';
import Register from './componets/Register/Register';
import { signup, signin, getInfo } from '../utils/auth.js';
import { api } from '../utils/api.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { setToken, getToken, removeToken } from '../utils/token';





export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const [jwt, setJwt] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        const jwt = getToken()
        if (!token) {
            return;
        }
        api.getUserInfo().then((secondData) => {
            getInfo().then((data) => {
                setIsLoggedIn(true);
                setCurrentUser({ ...secondData, email: data.email })
                navigate('/');
            })
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    async function handleSignin(data) {
        signin(data).then((newData) => {
            if (newData.token) {
                setToken(newData.token);
                setIsLoggedIn(true);
                setCurrentUser(newData);
                navigate('/');
            }
        }).catch((error) => {
            console.log(error);
        });
    }


    async function handleSignup(data) {
        signup(data).then((newData) => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    async function handleSignout() {
        removeToken();
        setIsLoggedIn(false);
        const redirectPath = location.state?.from?.pathname || "/login"
        navigate(redirectPath);
        setCurrentUser({});
        setJwt(null);
    }






    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Header
                    handleSignout={handleSignout}
                    email={currentUser.email} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login signin={handleSignin} />} />
                    <Route path="/register" element={<Register signup={handleSignup} />} />


                </Routes>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    )
}