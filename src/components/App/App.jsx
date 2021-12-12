import React from 'react'
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

const App = () => {

    return <div className={'app'}>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/movies' element={<Movies isSavedMovies={false}/>}/>
            <Route path='/saved-movies' element={<Movies isSavedMovies={true}/>}/>
            <Route path='/not-found' element={<NotFound/>}/>
        </Routes>
    </div>
}
export default App