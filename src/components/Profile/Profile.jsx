import React, {useEffect, useState} from 'react'
import Header from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {patchUser} from "../../utils/MainApi";
import {setLoggedIn, setUser} from "../../store/slice";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const {user: currentUser} = useSelector((state) => state.explorer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        name: '',
        email: ''
    })
    const [emailError, setEmailError] = useState('')
    const [nameError, setNameError] = useState('')
    const [serverError, setServerError] = useState('')
    useEffect(() => {
        setNewUser({
            name: currentUser.name,
            email: currentUser.email
        })
    }, [currentUser])
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setServerError('')
        patchUser({
            name: newUser.name,
            email: newUser.email
        }).then(res => {
            dispatch(setUser({
                ...currentUser,
                name: newUser.name,
                email: newUser.email
            }))

        })
            .catch(err => {

                setServerError('Произошла ошибка. Попробуйте еще раз')
                setNewUser({
                    name: currentUser.name,
                    email: currentUser.email
                })
            })
    }
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(setUser({
            name: '',
            email: ''
        }))
        dispatch(setLoggedIn(false))
        localStorage.removeItem('token')
        navigate('/')
    }

    return <section className={'profile section'}>
        <Header/>
        <div className={'profile__content content'}>
            <h1 className={'profile__title'}>Привет, {currentUser.name}!</h1>
            <form className={'profile__form'}>
                <div className={'profile__form-block'}>
                    <input onChange={e => {
                        setNewUser({
                            ...newUser,
                            name: e.currentTarget.value
                        })
                        !e.currentTarget.validity.valid
                            ? setNameError(e.currentTarget.validationMessage)
                            : setNameError('')
                    }} id={'profile__input_name'}
                           value={newUser.name}
                           type={'text'}
                           pattern={'[a-zA-Z\u0400-\u04ff0-9-\\s]+'}
                           required
                           className={'profile__input profile__input_name'}/>
                    <label htmlFor={'profile__input_name'} className={'profile__label'}>
                        Имя
                    </label>
                    <span className={'profile__name-error'}>{nameError}</span>
                </div>
                <div className={'profile__form-block'}>
                    <input onChange={e => {
                        setNewUser({
                            ...newUser,
                            email: e.currentTarget.value
                        })
                        !e.currentTarget.validity.valid
                            ? setEmailError(e.currentTarget.validationMessage)
                            : setEmailError('')
                    }} id={'profile__input_email'}
                           value={newUser.email}
                           type={'email'}
                           required={true}
                           className={'profile__input profile__input_email'}/>
                    <label htmlFor={'profile__input_email'} className={'profile__label'}>
                        E-mail
                    </label>
                    <span className={'profile__email-error'}>{emailError}</span>
                    <span className={'profile__server-error'}>{serverError}</span>
                </div>
                <button type={'submit'}
                        onClick={handleFormSubmit}
                        className={`button profile__button profile__button_submit ${(emailError || nameError) && 'profile__button_submit-disabled'}`}>
                    Редактировать
                </button>
                <button onClick={handleLogout}
                        className={'button profile__button profile__button_logout'}>
                    Выйти из аккаунта
                </button>
            </form>
        </div>
    </section>
}
export default Profile