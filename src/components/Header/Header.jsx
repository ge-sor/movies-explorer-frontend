import React, {useEffect, useState} from 'react'
import logo from '../../images/logo.svg'
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    const { pathname } = useLocation()

    const [menuOpened, setMenuOpened] = useState(false)

    return <nav className={'header'}>
        <Link to={'/'} className={'header__logo-link'}>
            <img className={'header__logo button'} alt={'logo'} src={logo}/>
        </Link>
        <ul className={'header__list'}>
            <li className={'header__item'}>
                <Link to={'/movies'}
                   className={`header__link link button ${pathname === '/movies'
                       ? 'header__link_active' 
                       : 'header__link_secondary'}`}>
                    Фильмы
                </Link>
            </li>
            <li className={'header__item'}>
                <Link to={'/saved-movies'}
                   className={`header__link link button ${pathname === '/saved-movies' 
                       ? 'header__link_active' 
                       : 'header__link_secondary'}`}>
                    Сохранённые фильмы
                </Link>
            </li>
        </ul>
        <ul className={'header__list'}>
            <li className={'header__item'}>
                <Link to={'/signup'} className={'header__link link button'}>Регистрация</Link>
            </li>
            <li className={'header__item'}>
                <Link to={'/signin'} className={'header__link header__link_primary link button'}>Войти</Link>
            </li>
        </ul>
    </nav>
}
export default Header