import React from 'react'

const Techs = () => {

    const techs = ['HTML','CSS','JS','React','Git','Express.js','mongoDB']

    return <section className={'techs section'}>
        <div className={'techs__content content'}>
            <h3 className={'techs__title title'}>
                Технологии
            </h3>
            <div className={'techs__container'}>
                <h2 className={'techs__head large-title'}>
                    7 технологий
                </h2>
                <p className={'techs__paragraph'}>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <div className={'techs__row'}>
                    {techs.map((item) => {
                        return <div className={'techs_item'}>{item}</div>
                    })}
                </div>
            </div>
        </div>
    </section>
}
export default Techs