import React, {useState} from 'react'
import Logo from "../../images/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import {getUser, login} from "../../utils/MainApi";
import {useDispatch} from "react-redux";
import {setLoggedIn, setUser} from "../../store/slice";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [serverError, setServerError] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setServerError('')
        login(loginUser).then(res => {
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
    }

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })

    return <section className={'login section'}>
        <div className={'login__content content'}>
            <Link to={'/'} className={'login__logo-link'}>
                <img className={'login__logo button'} alt={'Logo'} src={Logo}/>
            </Link>
            <h1 className={'login__title'}>Рады видеть!</h1>
            <form className={'login__form'}>
                <div className={'login__input-container'}>
                    <input
                        value={loginUser.email}
                        onChange={e => {
                            setLoginUser({...loginUser, email: e.currentTarget.value})
                            !e.currentTarget.validity.valid
                                ? setEmailError(e.currentTarget.validationMessage)
                                : setEmailError('')
                        }}
                        id={'login__input_email'}
                        autoComplete={"new-email"}
                        type={'email'}
                        required
                        className={'login__input login__input_email'}/>
                    <label
                        htmlFor={'login__input_email'}
                        className={`login__label ${loginUser.email && 'login__input-active'}`}>
                        E-mail
                    </label>
                    <span className={'login__email-error'}>{emailError}</span>
                </div>
                <div className={'login__input-container'}>
                    <input
                        value={loginUser.password}
                        onChange={e => {
                            setLoginUser({...loginUser, password: e.currentTarget.value})
                            !e.currentTarget.validity.valid
                                ? setPasswordError(e.currentTarget.validationMessage)
                                : setPasswordError('')
                        }}
                        autoComplete={"new-password"}
                        id={'login__input_password'}
                        type={'password'}
                        minLength={6}
                        required
                        className={'login__input login__input_password'}/>
                    <label
                        htmlFor={'login__input_password'}
                        className={`login__label ${loginUser.email && 'login__input-active'}`}>
                        Пароль
                    </label>
                    <span className={'login__password-error'}>{passwordError}</span>
                    <span className={'login__server-error'}>{serverError}</span>
                </div>

                <button
                    onClick={handleFormSubmit}
                    type={'submit'}
                    className={`login__submit button ${(
                        emailError ||
                        passwordError ||
                        !loginUser.email ||
                        !loginUser.password) && 'login__submit-disabled'}`}>
                    Войти
                </button>
            </form>
            <div className={'login__register-container'}>
                <p className={'login__register-text'}>
                    Ещё не зарегистрированы?
                </p>
                <Link
                    to={'/register'}
                    className={'login__register-link link'}>
                    Регистрация
                </Link>
            </div>

        </div>
    </section>
}
export default Login