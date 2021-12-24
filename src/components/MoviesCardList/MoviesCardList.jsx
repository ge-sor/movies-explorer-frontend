import React from 'react'
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({deletable, cards}) => {

    return <section className={'movies-card-list section'}>
        <div className={'movies-card-list__content content'}>
            {cards.map((card, index) => {
                return <MoviesCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    length={card.length}
                    deletable={deletable}
                    handleDeleteCard={() => {
                        console.log(card)
                    }
                    }/>
            })}
            <button className={'movies-card-list__button button'}>
                Ещё
            </button>
        </div>
    </section>
}
export default MoviesCardList