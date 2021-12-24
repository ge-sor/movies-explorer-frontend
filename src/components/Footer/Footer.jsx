import React from 'react'

const Footer = () => {

    const Year = () => {
        const today = new Date()
        const year = today.getFullYear()
        return year
    }

    return <section className={'footer section'}>
        <div className={'footer__content content'}>
            <h4 className={'footer__text'}>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className={'footer__container'}>
                <p className={'footer__year'}>© {Year()}</p>
                <div className={'footer__links'}>
                    <a
                        href={'https://practicum.yandex.ru'}
                        className={'footer__link link'}
                        target="_blank"
                        rel="noreferrer">
                        Яндекс.Практикум
                    </a>
                    <a
                        href={'https://github.com/ge-sor'}
                        className={'footer__link link'}
                        target="_blank"
                        rel="noreferrer">
                        Github
                    </a>
                    <a
                        href={'https://www.facebook.com/gesrr'}
                        className={'footer__link link'}
                        target="_blank"
                        rel="noreferrer">
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    </section>
}
export default Footer