import React from 'react'

const Portfolio = () => {
    return <section className={'portfolio section'}>
        <div className={'portfolio__content content'}>
        <h5 className={'portfolio-title'}>
            Портфолио
        </h5>
        <a href={'https://github.com/ge-sor/how-to-learn'} className={'portfolio-link link'} target="_blank" rel="noreferrer">
            Статичный сайт
        </a>
        <a href={'https://github.com/ge-sor/russian-travel'} className={'portfolio-link link'} target="_blank" rel="noreferrer">
            Адаптивный сайт
        </a>
        <a href={'https://github.com/ge-sor/react-mesto-api-full'} className={'portfolio-link link'} target="_blank" rel="noreferrer">
            Одностраничное приложение
        </a>
        </div>
    </section>
}
export default Portfolio