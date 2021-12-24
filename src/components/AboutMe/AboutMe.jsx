import React from 'react'
import myPhoto from '../../images/my-photo.jpg'

const AboutMe = () => {
    return <section className={'about-me section'}>
        <div className={'about-me__content content'}>
            <h3 className={'about-me__title title'}>
                Студент
            </h3>
            <div className={'about-me__container'}>
                <div className={'about-me__info'}>
                    <h2 className={'about-me__head large-title'}>
                        Герман
                    </h2>
                    <h4 className={'about-me__subtitle'}>
                        Фронтенд-разработчик, 27 лет
                    </h4>
                    <p className={'about-me__paragraph'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras neque purus, tincidunt ornare nunc id, elementum laoreet ex.
                        Praesent varius malesuada ipsum vel consequat. Aliquam ac consectetur nulla.
                        Aliquam molestie tortor at nunc viverra, ac scelerisque ipsum posuere.
                        Aenean et est in turpis efficitur semper. Nunc porta eu dolor nec faucibus.
                        Fusce interdum sagittis rhoncus.
                    </p>
                    <div className={'about-me__links'}>
                        <a href={'https://www.facebook.com/gesrr'}
                           className={'about-me__link link'}
                           rel="noreferrer"
                           target="_blank">
                            Facebook
                        </a>
                        <a href={'https://github.com/ge-sor'}
                           className={'about-me__link link'}
                           rel="noreferrer"
                           target="_blank">
                            Github
                        </a>
                    </div>
                </div>
                <img className={'about-me__photo'} alt={'avatar'} src={myPhoto}/>
            </div>
        </div>
    </section>
}
export default AboutMe