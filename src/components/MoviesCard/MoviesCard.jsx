import React, {useState} from 'react'
import LikeOn from "../../images/like-on.svg";
import LikeOff from "../../images/like-off.svg";
import Cross from "../../images/cross-s.svg";

const MoviesCard = ({title, length, image, deletable, handleDeleteCard}) => {

    const [like, setLike] = useState(false)

    return <div className={'movies-card'}>
        <div className={'movies-card__info'}>
            <h4 className={'movies-card__title'}>
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
                       src={like ? LikeOn : LikeOff}
                       alt={'toggle'}
                       onClick={() => setLike(!like)}/>}
        </div>
        <img className={'movies-card__image'} alt={'poster'} src={image}/>
    </div>
}
export default MoviesCard