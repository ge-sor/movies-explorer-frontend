import React from 'react'

const AboutProject = () => {
    return <section  className={'about-project section'}>
        <div className={'about-project__content content'}>
        <h3 className={'about-project__title title'}>О проекте</h3>
        <div className={'about-project__texts'}>
            <div className={'about-project__text-container'}>
                <h4 className={'about-project__subtitle'}>
                    Дипломный проект включал 5 этапов
                </h4>
                <p className={'about-project__paragraph'}>
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
            </div>
            <div className={'about-project__text-container'}>
                <h4 className={'about-project__subtitle'}>
                    На выполнение диплома ушло 5 недель
                </h4>
                <p className={'about-project__paragraph'}>
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
            </div>
        </div>
        <div className={'about-project__progress'}>
            <div className={'about-project__progress-block about-project__progress-block_backend'}>
                <div className={'about-project__progress-weeks about-project__progress-weeks_backend'}>1 неделя</div>
                <div className={'about-project__progress-description'}>Back-end</div>
            </div>
            <div className={'about-project__progress-block about-project__progress-block_frontend'}>
                <div className={'about-project__progress-weeks about-project__progress-weeks_frontend'}>4 недели</div>
                <div className={'about-project__progress-description'}>Front-end</div>
            </div>
        </div>
        </div>
    </section>
}
export default AboutProject