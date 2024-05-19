import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';
import SpecialDishes from "./Components/SpecialDishes";
import ReservationPage from './Components/ReservationPage';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <MainSection />
                            <SpecialDishes />
                        </>
                    } />
                    <Route path="/reservation" element={<ReservationPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
