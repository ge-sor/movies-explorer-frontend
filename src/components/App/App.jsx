import React from 'react'
import Register from "../Register/Register";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import {Route, Routes} from "react-router-dom";

const App = () => {

    return <div className={'app'}>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/signin' element={<Main/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/saved-movies' element={<SavedMovies/>}/>
        </Routes>
    </div>
}
export default App