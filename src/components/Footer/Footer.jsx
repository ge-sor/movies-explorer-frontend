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
                <a className={'footer__link'}>Яндекс.Практикум</a>
                <a className={'footer__link'}>Github</a>
                <a className={'footer__link'}>Facebook</a>
            </div>
        </div>
        </div>
    </section>
}
export default Footer