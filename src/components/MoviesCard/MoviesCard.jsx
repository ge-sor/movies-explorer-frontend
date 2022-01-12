import React from 'react'
import LikeOn from "../../images/like-on.svg";
import LikeOff from "../../images/like-off.svg";
import Cross from "../../images/cross-s.svg";

const MoviesCard = ({title, length, image, deletable, handleDeleteCard, liked, handleLikeCard, link}) => {

    const openVideo = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return <div className={'movies-card'}>
        <div className={'movies-card__info'}>
            <h4 onClick={() => openVideo(link)} className={'movies-card__title link'}>
                {title}
            </h4>
            <span className={'movies-card__span'}>
                {length}
            </span>
            {deletable
                ? <img height={'14px'} width={'12px'}
                       className={'movies-card__toggle button'}
                       src={Cross}
                       alt={'delete card'}
                       onClick={() => handleDeleteCard()}/>
                : <img height={'14px'} width={'12px'}
                       className={'movies-card__toggle button'}
                       src={liked ? LikeOn : LikeOff}
                       alt={'toggle'}
                       onClick={() => handleLikeCard(!liked)}/>}
        </div>
        <img onClick={() => openVideo(link)} className={'movies-card__image link'} alt={'poster'} src={image}/>
    </div>
}
export default MoviesCard