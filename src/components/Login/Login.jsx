import React from 'react'
import Logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

const Login = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return <section className={'login section'}>
        <div className={'login__content content'}>
            <Link to={'/'} className={'login__logo-link'}>
                <img className={'login__logo button'} alt={'Logo'} src={Logo}/>
            </Link>
            <h1 className={'login__title'}>Рады видеть!</h1>
            <form className={'login__form'}>
                <div className={'login__input-container'}>
                    <input
                        id={'login__input_email'}
                        type={'text'}
                        required
                        className={'login__input login__input_email'}/>
                    <label
                        htmlFor={'login__input_email'}
                        className={'login__label'}>
                        E-mail
                    </label>
                </div>
                <div className={'login__input-container'}>
                    <input
                        autoComplete={"new-password"}
                        id={'login__input_password'}
                        type={'password'}
                        required
                        className={'login__input login__input_password'}/>
                    <label
                        htmlFor={'login__input_password'}
                        className={'login__label'}>
                        Пароль
                    </label>
                </div>

                <button
                    onClick={handleFormSubmit}
                    type={'submit'}
                    className={'login__submit button'}>
                    Войти
                </button>
            </form>
            <div className={'login__register-container'}>
                <p className={'login__register-text'}>
                    Ещё не зарегистрированы?
                </p>
                <Link to={'/signup'} className={'login__register-link link'}>
                    Регистрация
                </Link>
            </div>

        </div>
    </section>
}
export default Login