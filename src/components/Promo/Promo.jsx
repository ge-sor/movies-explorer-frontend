import React, {useEffect} from 'react'
import Globe from "../../images/globe";

const Promo = () => {

    useEffect(() => {
        document.querySelectorAll('.globe > path').forEach((el) => {
            el.classList.add(`globe${Math.floor(Math.random() * 9)}`)
        })
    },[])

    return <section className={'promo section'}>
        <div className={'promo__content content'}>
        <div className={'promo__container'}>
        <div className={'promo__text'}>
        <h1 className={'promo__title large-title'}>Учебный проект студента факультета Веб-разработки.</h1>
        <p className={'promo__subtitle'}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <Globe/>
        </div>
            <button className={'promo__button button'}>Узнать больше</button>
        </div>
    </section>
}
export default Promo