import React from 'react'
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {

    return <section className={'movies-card-list section'}>
        <div className={'movies-card-list__content content'}>
            {[
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
            ].map((card, index) => {
                return <MoviesCard key={index} image={card.image} title={card.title} length={card.length}/>
            })}
            <button className={'movies-card-list__button button'}>
                Ещё
            </button>
        </div>
    </section>
}
export default MoviesCardList