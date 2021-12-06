import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => {
    return <>
        <Header/>
        <section className={'movies section'}>
            <div className={'movies__content content'}>
                <div className={'movies__search-container'}>
                    <form className={'movies__form'}>
                        <input type={'text'} className={'movies__input'} placeholder={'Фильм'}/>
                        <input  type={'submit'} className={'movies__search-button button'} value={'Найти'}/>
                        <input type={'checkbox'} className={'movies__toggle'}/>
                    </form>
                    <MoviesCardList/>
                </div>
            </div>
        </section>
        <Footer/>
    </>
}
export default Movies