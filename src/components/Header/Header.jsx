import React from 'react'

const Header = () => {


    return <nav className={'header'}>
        <ul className={'header__list'}>
            <li className={'header__item'}>
                <a className={'header__link'}>Регистрация</a>
            </li>
            <li className={'header__item'}>
                <a className={'header__link'}>Войти</a>
            </li>
        </ul>
    </nav>
}
export default Header