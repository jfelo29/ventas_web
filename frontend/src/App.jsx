import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Footer from './componets/Footer/Footer';
import Login from './componets/Login/login.jsx';
import CurrentUserContext from './componets/contexts/currentUserContext';
import Register from './componets/Register/Register';



export default function App() {
    async function handleSignin() {

    }
    async function handleSignup() {

    }


    const [currentUser,] = useState({});

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Header

                    /*handleClosePopup={handleClosePopup}
                    handleOpenPopup={handleOpenPopup}
                    handleSignout={handleSignout}*/
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