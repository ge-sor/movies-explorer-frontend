import React from 'react'

const Portfolio = () => {
    return <section className={'portfolio section'}>
        <div className={'portfolio__content content'}>
        <h5 className={'portfolio-title'}>
            Портфолио
        </h5>
        <a className={'portfolio-link link'}>
            Статичный сайт
        </a>
        <a className={'portfolio-link link'}>
            Адаптивный сайт
        </a>
        <a className={'portfolio-link link'}>
            Одностраничное приложение
        </a>
        </div>
    </section>
}
export default Portfolio