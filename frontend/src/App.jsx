import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Footer from './componets/Footer/Footer';
import CurrentUserContext from './componets/contexts/currentUserContext';

export default function App() {
    const [currentUser,] = useState({});
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Header
                    /* handleSignout={handleSignout} */ email={currentUser.email} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<p>Login</p>} />



                </Routes>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    )
}