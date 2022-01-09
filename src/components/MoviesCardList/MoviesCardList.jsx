import React, {useEffect, useState} from 'react'
import MoviesCard from "../MoviesCard/MoviesCard";
import {createMovie, deleteMovie} from "../../utils/MainApi";
import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie} from "../../store/slice";

const MoviesCardList = ({deletable, cards}) => {

    const dispatch = useDispatch()
    const {savedMovies} = useSelector((state) => state.explorer)
    const timeFormat = (min) => {
        if (+min < 59) {
            return +min + ' мин'
        } else {
            return ((+min / 60).toFixed() + ' ч ') + (+min % 60 === 0 ? '' : +min % 60 + ' мин')
        }
    }

    const [newCards, setNewCards] = useState([])

    useEffect(() => {
        setNewCards(cards.slice(0, 5))
    }, [cards])

    const addCards = () => {
        if (newCards.length !== cards.length) {

            if (window.innerWidth < 768) {
                setNewCards([...newCards, ...cards.slice(newCards.length, newCards.length + 2)])
            } else setNewCards([...newCards, ...cards.slice(newCards.length, newCards.length + 3)])
        }
    }

    return <section className={'movies-card-list section'}>
        <div className={'movies-card-list__content content'}>
            {newCards.map((card, index) => {
                return <MoviesCard
                    link={card.trailer}
                    key={index}
                    image={card.image}
                    title={card.nameRU}
                    length={timeFormat(card.duration)}
                    deletable={deletable}
                    liked={savedMovies.find(i => i.movieId === card.movieId)}
                    handleLikeCard={() => {
                        createMovie({
                            country: card.country || 'отсутствует',
                            director: card.director,
                            duration: card.duration,
                            year: card.year,
                            description: card.description,
                            image: card.image,
                            trailer: card.trailer,
                            thumbnail: card.thumbnail,
                            nameRU: card.nameRU,
                            nameEN: card.nameEN,
                            movieId: card.movieId,
                        }).then(() => {
                            dispatch(addMovie({
                                country: card.country,
                                director: card.director,
                                duration: card.duration,
                                year: card.year,
                                description: card.description,
                                image: card.image,
                                trailer: card.trailer,
                                thumbnail: card.thumbnail,
                                nameRU: card.nameRU,
                                nameEN: card.nameEN,
                                movieId: card.movieId,
                            }))
                        }).catch(err => console.log(err))
                    }}
                    handleDeleteCard={() => {
                        deleteMovie(card._id).then(() => {
                            dispatch(removeMovie(card._id))
                        }).catch(err => console.log(err))
                    }
                    }/>
            })}
            {newCards.length !== cards.length &&
            <button onClick={addCards} className={'movies-card-list__button button'}>
                Ещё
            </button>}
            {cards.length === 0 && <h3 className={'movies-card-list__not-found'}>Ничего не найдено</h3>}
        </div>
    </section>
}
export default MoviesCardList