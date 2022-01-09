import React, {useEffect} from 'react'
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import {setLoggedIn, setUser} from "../../store/slice";
import {useDispatch} from "react-redux";
import {getUser} from "../../utils/MainApi";
import {PrivateRoute} from "../PrivateRoute/PrivateRoute";

const App = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(setLoggedIn(true))
            getUser()
                .then(res => {

                    dispatch(setUser({
                        name: res.name,
                        email: res.email,
                        id: res.id
                    }))
                })
                .catch(err => {

                    localStorage.removeItem('token')
                    dispatch(setLoggedIn(false))
                    navigate('/')
                })
        }
    }, [])

    return <div className={'app'}>
        <Routes>
            <Route exact path='/' element={<Main/>}/>

            <Route exact path='/register' element={<Register/>}/>

            <Route exact path='/login' element={<Login/>}/>


            <Route exact path='/profile' element={<PrivateRoute/>}>
                <Route exact path='/profile' element={<Profile/>}/>
            </Route>

            <Route exact path='/movies' element={<PrivateRoute/>}>
                <Route exact path='/movies' element={<Movies isSavedMovies={false}/>}/>
            </Route>

            <Route exact path='/saved-movies' element={<PrivateRoute/>}>
                <Route exact path='/saved-movies' element={<Movies isSavedMovies={true}/>}/>
            </Route>


            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
}
export default App