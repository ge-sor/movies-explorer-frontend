import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../../images/logo.svg";

const Register = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return <section className={'register section'}>
        <div className={'register__content content'}>
            <Link to={'/'} className={'register__logo-link'}>
                <img className={'register__logo button'} alt={'Logo'} src={Logo}/>
            </Link>
            <h1 className={'register__title'}>Добро пожаловать!</h1>
            <form className={'register__form'}>
                <div className={'register__input-container'}>
                    <input
                        id={'register__input_name'}
                        type={'text'}
                        required
                        className={'register__input register__input_name'}/>
                    <label
                        htmlFor={'register__input_name'}
                        className={'register__label'}>
                        Имя
                    </label>
                </div>
                <div className={'register__input-container'}>
                    <input
                        id={'register__input_email'}
                        type={'text'}
                        required
                        className={'register__input register__input_email'}/>
                    <label
                        htmlFor={'register__input_email'}
                        className={'register__label'}>
                        E-mail
                    </label>
                </div>
                <div className={'register__input-container'}>
                    <input
                        autoComplete={"new-password"}
                        id={'register__input_password'}
                        type={'password'}
                        required
                        className={'register__input register__input_password'}/>
                    <label
                        htmlFor={'register__input_password'}
                        className={'register__label'}>
                        Пароль
                    </label>
                </div>

                <button
                    onClick={handleFormSubmit}
                    type={'submit'}
                    className={'register__submit button'}>
                    Зарегистрироваться
                </button>
            </form>
            <div className={'register__login-container'}>
                <p className={'register__login-text'}>
                    Уже зарегистрированы?
                </p>
                <Link to={'/signin'} className={'register__login-link link'}>
                    Войти
                </Link>
            </div>

        </div>
    </section>
}
export default Register