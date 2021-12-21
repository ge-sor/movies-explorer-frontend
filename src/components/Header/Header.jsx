import React, {useState, useEffect, useRef} from 'react'
import Logo from '../../images/logo.svg'
import Person from '../../images/person.svg'
import {Link, useLocation} from "react-router-dom";

const Header = ({loggedIn}) => {

    const {pathname} = useLocation()
    const [menuOpened, setMenuOpened] = useState(false)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1280 && menuOpened) {
                setMenuOpened(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [menuOpened]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuOpened && event.target.classList.contains('header_opened')) {
                setMenuOpened(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpened]);


    return <nav className={menuOpened ? 'header header_opened' : 'header'}>
        <Link to={'/'} className={'header__logo-link'}>
            <img className={'header__logo button'} alt={'Logo'} src={Logo}/>
        </Link>
        {loggedIn ? <>
                <ul className={menuOpened
                    ? 'header__list header__list_logged-in header__list_visible'
                    : 'header__list header__list_logged-in header__list_hidden'}>
                    <li  className={'header__item header__item_main'}>
                        <Link to={'/'}
                              className={`header__link link button ${pathname === '/'
                                  ? 'header__link_active'
                                  : 'header__link_secondary'}`}>
                            Главная
                        </Link>
                    </li>
                    <li  className={'header__item'}>
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
                    <li className={'header__item'}>
                        <Link
                            to={'/profile'}
                            className={'header__link header__link_account link button'}>
                            Аккаунт
                            <img src={Person} alt={'Person'} className={'header__account-logo'}/>
                        </Link>
                    </li>
                </ul>
                <input
                    className={'header__burger'}
                    type={'checkbox'}
                    id={'menu_checkbox'}
                    checked={menuOpened}
                    onChange={() => {
                        setMenuOpened(!menuOpened)
                    }}/>
                <label htmlFor={'menu_checkbox'} className={'header__burger-label'}>
                    <div/>
                    <div/>
                    <div/>
                </label>
            </> :
            <ul className={'header__list header__list_logged-out'}>
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
            </ul>}




    </nav>
}
export default Header