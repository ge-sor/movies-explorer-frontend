import React, {useEffect, useState} from 'react'
import MoviesCard from "../MoviesCard/MoviesCard";
import {createMovie, deleteMovie, getSavedMovies} from "../../utils/MainApi";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie, setSavedMovies} from "../../store/slice";

const MoviesCardList = ({deletable, cards}) => {

    const dispatch = useDispatch()
    const {savedMovies, user} = useSelector((state) => state.explorer)
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
                    liked={savedMovies.filter(i => i.owner === user.id).find(i => i.movieId === card.movieId)}
                    handleLikeCard={() => {
                        savedMovies.filter(i => i.owner === user.id).find(i => i.movieId === card.movieId)
                            ? deleteMovie(savedMovies.filter(i => i.owner === user.id).find(i => i.movieId === card.movieId)._id).then(() => {
                                dispatch(removeMovie(savedMovies.filter(i => i.owner === user.id).find(i => i.movieId === card.movieId)._id))
                                getSavedMovies().then(res => {
                                    dispatch(setSavedMovies(res.data))
                                }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                            : createMovie({
                            country: card.country || ' ',
                            director: card.director || ' ',
                            duration: card.duration || 0,
                            year: card.year || ' ',
                            description: card.description || ' ',
                            image: card.image,
                            trailer: card.trailer,
                            thumbnail: card.thumbnail,
                            nameRU: card.nameRU || ' ',
                            nameEN: card.nameEN || ' ',
                            movieId: card.movieId,
                        }).then(() => {
                                getSavedMovies().then(res => {
                                    dispatch(setSavedMovies(res.data))
                                }).catch(err => console.log(err))
                        }).catch(err => console.log(err))
                    }}
                    handleDeleteCard={() => {
                        deleteMovie(card._id).then(() => {
                            dispatch(removeMovie(card._id))
                            getSavedMovies().then(res => {
                                dispatch(setSavedMovies(res.data))
                            }).catch(err => console.log(err))
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