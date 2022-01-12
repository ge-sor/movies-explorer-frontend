import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../images/logo.svg";
import {getUser, login, register} from "../../utils/MainApi";
import {setLoggedIn, setUser} from "../../store/slice";
import {useDispatch} from "react-redux";

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [emailError, setEmailError] = useState('')
    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [serverError, setServerError] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()

        setServerError('')
        register({
            name: currentUser.name,
            email: currentUser.email,
            password: currentUser.password
        }).then(() => {
            login({
                email: currentUser.email,
                password: currentUser.password
            }).then(res => {
                localStorage.setItem('token', res.token)
                getUser()
                    .then(res => {
                        dispatch(setUser({
                            name: res.name,
                            email: res.email,
                            id: res.id
                        }))
                        dispatch(setLoggedIn(true))
                        navigate('/movies')
                    })
                    .catch(err => {
                        localStorage.removeItem('token')
                        dispatch(setLoggedIn(false))
                    })
            }).catch(err => {
                if (err.includes('401')) {
                    setServerError('Неправильная почта или пароль.')
                    return
                }
                if (err.includes('400')) {
                    setServerError('Неверный формат данных. Попробуйте еще раз.')
                } else {
                    setServerError('Ошибка сервера. Попробуйте еще раз.')
                }
            })
        }).catch(err => {
            if (err.includes('409')) {
                setServerError('Данный E-mail уже зарегистрирован.')
                return
            }
            if (err.includes('400')) {
                setServerError('Неверный формат данных. Попробуйте еще раз.')
            } else {
                setServerError('Произошла ошибка. Попробуйте еще раз.')
            }
        })
    }

    const [currentUser, setCurrentUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    return <section className={'register section'}>
        <div className={'register__content content'}>
            <Link to={'/'} className={'register__logo-link'}>
                <img className={'register__logo button'} alt={'Logo'} src={Logo}/>
            </Link>
            <h1 className={'register__title'}>Добро пожаловать!</h1>
            <form className={'register__form'}>
                <div className={'register__input-container'}>
                    <input
                        onChange={e => {
                            setCurrentUser({...currentUser, name: e.currentTarget.value})
                            !e.currentTarget.validity.valid
                                ? setNameError(e.currentTarget.validationMessage)
                                : setNameError('')
                        }}
                        value={currentUser.name}
                        id={'register__input_name'}
                        pattern={'[a-zA-Z\u0400-\u04ff0-9-\\s]+'}
                        type={'text'}
                        required
                        className={'register__input register__input_name'}/>
                    <label
                        htmlFor={'register__input_name'}
                        className={`register__label ${currentUser.name && 'register__input-active'}`}>
                        Имя
                    </label>
                    <span className={'register__name-error'}>{nameError}</span>
                </div>
                <div className={'register__input-container'}>
                    <input
                        onChange={e => {
                            setCurrentUser({...currentUser, email: e.currentTarget.value})
                            !e.currentTarget.validity.valid
                                ? setEmailError(e.currentTarget.validationMessage)
                                : setEmailError('')
                        }}
                        value={currentUser.email}
                        id={'register__input_email'}
                        autoComplete={"new-email"}
                        type={'email'}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        className={'register__input register__input_email'}/>
                    <label
                        htmlFor={'register__input_email'}
                        className={`register__label ${currentUser.email && 'register__input-active'}`}>
                        E-mail
                    </label>
                    <span className={'register__email-error'}>{emailError}</span>
                </div>
                <div className={'register__input-container'}>
                    <input
                        onChange={e => {
                            setCurrentUser({...currentUser, password: e.currentTarget.value})
                            !e.currentTarget.validity.valid
                                ? setPasswordError(e.currentTarget.validationMessage)
                                : setPasswordError('')
                        }}
                        value={currentUser.password}
                        autoComplete={"new-password"}
                        id={'register__input_password'}
                        type={'password'}
                        minLength={6}
                        required
                        className={'register__input register__input_password'}/>
                    <label
                        htmlFor={'register__input_password'}
                        className={`register__label ${currentUser.password && 'register__input-active'}`}>
                        Пароль
                    </label>
                    <span className={'register__password-error'}>{passwordError}</span>
                    <span className={'register__server-error'}>{serverError}</span>
                </div>

                <button
                    onClick={handleFormSubmit}
                    type={'submit'}
                    className={`register__submit button ${(
                        emailError ||
                        nameError ||
                        passwordError ||
                        !currentUser.name ||
                        !currentUser.email ||
                        !currentUser.password) && 'register__submit-disabled'}`}>
                    Зарегистрироваться
                </button>
            </form>
            <div className={'register__login-container'}>
                <p className={'register__login-text'}>
                    Уже зарегистрированы?
                </p>
                <Link to={'/login'} className={'register__login-link link'}>
                    Войти
                </Link>
            </div>

        </div>
    </section>
}
export default Register