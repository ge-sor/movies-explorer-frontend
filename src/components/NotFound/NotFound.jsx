import React from 'react'
import {Link} from "react-router-dom";

const NotFound = () => {
    return <section className={'not-found section'}>
        <div className={'not-found__content content'}>
            <h1 className={'not-found__title'}>
                404
            </h1>
            <p className={'not-found__subtitle'}>
                Страница не найдена
            </p>
            <Link to={'/'} className={'not-found__link link'}>
                Назад
            </Link>
        </div>
    </section>
}
export default NotFound