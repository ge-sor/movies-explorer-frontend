import React, {useState} from 'react'
import Logo from '../../images/logo.svg'
import Person from '../../images/person.svg'
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    const {pathname} = useLocation()

    const [menuOpened, setMenuOpened] = useState(false)

    return <nav className={'header'}>
        <Link to={'/'} className={'header__logo-link'}>
            <img className={'header__logo button'} alt={'Logo'} src={Logo}/>
        </Link>
        {pathname !== '/'
        && <><ul className={menuOpened ? 'header__list header__list_first header__list_visible' : 'header__list header__list_first header__list_hidden'}>
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

            </>}
        <ul className={menuOpened ? 'header__list header__list-second header__list_visible' : 'header__list header__list_second header__list_hidden'}>
            {pathname === '/saved-movies' || pathname === '/movies'
                ? <li className={'header__item'}>
                    <Link
                        to={'/profile'}
                        className={'header__link header__link_account link button'}>
                        Аккаунт
                        <img src={Person} alt={'Person'} className={'header__account-logo'}/>
                    </Link>
                </li>
                : <>
                    <li className={'header__item'}>
                        <Link
                            to={'/signup'}
                            className={'header__link link button'}>
                            Регистрация
                        </Link>
                    </li>
                    <li className={'header__item'}>
                        <Link
                            to={'/signin'}
                            className={'header__link header__link_primary link button'}>
                            Войти
                        </Link>
                    </li>
                </>}
        </ul>
        <input
            className={'header__burger'}
            type={'checkbox'}
            id={'menu_checkbox'}
            checked={menuOpened}
            onChange={() => {
                setMenuOpened(!menuOpened)
                console.log(menuOpened)
            }}/>
        <label htmlFor={'menu_checkbox'} className={'header__burger-label'}>
            <div/>
            <div/>
            <div/>
        </label>
    </nav>
}
export default Header