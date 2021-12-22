import React, {useState} from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ToggleOn from "../../images/toggle-on.svg";
import ToggleOff from "../../images/toggle-off.svg";

const Movies = ({isSavedMovies}) => {

    const [addShorts, setAddShorts] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()

    }

    const cards = [
        {
            title: '33 слова о дизайне',
            length: '1ч 42м',
            image: 'https://picsum.photos/1100/550'
        },
        {
            title: '33 слова о дизайне',
            length: '1ч 42м',
            image: 'https://picsum.photos/1100/550'
        }
    ]
    const savedCards = [
        {
            title: '33дизайне слова о ',
            length: '1ч 42м',
            image: 'https://picsum.photos/1100/550'
        },
        {
            title: '33 сдизайнелова о ',
            length: '1ч 42м',
            image: 'https://picsum.photos/1100/550'
        }
    ]

    return <>
        <Header loggedIn={true}/>
        <section className={'movies section'}>
            <div className={'movies__content content'}>
                <div className={'movies__search-container'}>
                    <form
                        onSubmit={(e) => handleFormSubmit(e)}
                        className={'movies__form'}>
                        <input
                            type={'text'}
                            className={'movies__input'}
                            placeholder={'Фильм'}/>
                        <input
                            type={'submit'}
                            className={'movies__search-button button'}
                            value={'Найти'}/>
                        <div className={'movies__toggle-container'}>
                            <img draggable={"false"}
                                 className={'movies__toggle button'}
                                 src={addShorts ? ToggleOn : ToggleOff}
                                 alt={'toggle'}
                                 onClick={() => setAddShorts(!addShorts)}/>
                        </div>
                        <span className={'movies__toggle-span'}>
                            Короткометражки
                        </span>
                    </form>
                    <MoviesCardList cards={isSavedMovies ? savedCards : cards} deletable={isSavedMovies}/>
                </div>
            </div>
        </section>
        <Footer/>
    </>
}
export default Movies