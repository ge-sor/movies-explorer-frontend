import React, {useEffect, useState} from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ToggleOn from "../../images/toggle-on.svg";
import ToggleOff from "../../images/toggle-off.svg";
import {useDispatch, useSelector} from 'react-redux'
import {getMovies} from "../../utils/MoviesApi";
import {setMovies, setSavedMovies} from "../../store/slice";
import {getSavedMovies} from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

const Movies = ({isSavedMovies}) => {

    const [addShorts, setAddShorts] = useState(false)

    const {movies, savedMovies, user} = useSelector((state) => state.explorer)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [filteredMovies, setFilteredMovies] = useState([])
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        setFilteredMovies(movies.filter(i => i.duration > 40))
        setAddShorts(false)
        setSearchValue('')
    }, [movies, isSavedMovies])

    useEffect(() => {
        setFilteredSavedMovies(savedMovies.filter(i => i.duration > 40))
        setAddShorts(false)
        setSearchValue('')
    }, [savedMovies, isSavedMovies])

    const handleShorts = () => {

        if (addShorts) {
            setAddShorts(false)
            isSavedMovies
                ? setFilteredSavedMovies(filteredSavedMovies.filter(i => i.duration > 40))
                : setFilteredMovies(filteredMovies.filter(i => i.duration > 40))
        } else {
            setAddShorts(true)
            isSavedMovies
                ? setFilteredSavedMovies(savedMovies.filter(i => i.nameRU.toLowerCase().includes(searchValue.toLowerCase())))
                : setFilteredMovies(movies.filter(i => i.nameRU.toLowerCase().includes(searchValue.toLowerCase())))

        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        isSavedMovies
            ? setFilteredSavedMovies(savedMovies.filter(i => i.nameRU.toLowerCase().includes(searchValue.toLowerCase())))
            : setFilteredMovies(movies.filter(i => i.nameRU.toLowerCase().includes(searchValue.toLowerCase())))
    }

    useEffect(() => {
        getMovies().then(res => {
            setIsFetching(false)
            dispatch(setMovies(res.map(card => {
                return {
                    country: card.country,
                    director: card.director,
                    duration: card.duration,
                    year: card.year,
                    description: card.description,
                    image: 'https://api.nomoreparties.co/' + card.image.url,
                    trailer: card.trailerLink,
                    thumbnail: 'https://api.nomoreparties.co/' + card.image.formats.thumbnail.url,
                    nameRU: card.nameRU,
                    nameEN: card.nameEN,
                    movieId: card.id,
                }
            })))

        }).catch(err => {
            setIsFetching(false)

        })
        getSavedMovies().then(res => {
            dispatch(setSavedMovies(res.data))
        }).catch(err => console.log(err))
    }, [])

    return <>
        <Header/>
        <section className={'movies section'}>
            <div className={'movies__content content'}>
                <div className={'movies__search-container'}>
                    <form
                        onSubmit={(e) => handleFormSubmit(e)}
                        className={'movies__form'}>
                        <input
                            value={searchValue}
                            onChange={e => setSearchValue(e.currentTarget.value)}
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
                                 onClick={() => handleShorts()}/>
                        </div>
                        <span className={'movies__toggle-span'}>
                            Короткометражки
                        </span>
                    </form>
                    {isFetching
                        ? <Preloader/>
                        : <MoviesCardList
                            cards={isSavedMovies ? filteredSavedMovies.filter(i => i.owner === user.id) : filteredMovies}
                            deletable={isSavedMovies}/>}
                </div>
            </div>
        </section>
        <Footer/>
    </>
}
export default Movies