import React, {useEffect, useState} from 'react'
import logo from '../../images/logo.svg'
import {useLocation} from "react-router-dom";

const Header = () => {

    const { pathname } = useLocation()

    const [menuOpened, setMenuOpened] = useState(false)

    return <nav className={'header'}>
        <a href={'/'} className={'header__logo-link'}>
            <img className={'header__logo button'} alt={'logo'} src={logo}/>
        </a>
        <ul className={'header__list'}>
            <li className={'header__item'}>
                <a href={'/movies'}
                   className={`header__link link button ${pathname === '/movies'
                       ? 'header__link_active' 
                       : 'header__link_secondary'}`}>
                    Фильмы
                </a>
            </li>
            <li className={'header__item'}>
                <a href={'/saved-movies'}
                   className={`header__link link button ${pathname === '/saved-movies' 
                       ? 'header__link_active' 
                       : 'header__link_secondary'}`}>
                    Сохранённые фильмы
                </a>
            </li>
        </ul>
        <ul className={'header__list'}>
            <li className={'header__item'}>
                <a href={'/signup'} className={'header__link link button'}>Регистрация</a>
            </li>
            <li className={'header__item'}>
                <a href={'/signin'} className={'header__link header__link_primary link button'}>Войти</a>
            </li>
        </ul>
    </nav>
}
export default Header