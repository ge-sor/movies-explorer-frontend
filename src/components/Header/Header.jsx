import React, {useEffect} from 'react'
import logo from '../../images/logo.svg'

const Header = () => {

    return <nav className={'header'}>
        <img className={'header__logo'} alt={'logo'} src={logo}/>
        <ul className={'header__list'}>
            <li className={'header__item'}>
                <a className={'header__link'}>Регистрация</a>
            </li>
            <li className={'header__item'}>
                <a className={'header__link header__link_active'}>Войти</a>
            </li>
        </ul>
    </nav>
}
export default Header