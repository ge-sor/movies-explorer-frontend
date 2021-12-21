import React, {useState} from 'react'
import Header from "../Header/Header";

const Profile = () => {

    const initialUser = {
        name: 'Виталий',
        email: 'pochta@yandex.ru'
    }
    const [user, setUser] = useState(initialUser)
    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log(user)
    }
    const handleLogout = (e) => {
        e.preventDefault()

        console.log(user)
    }

    return <section className={'profile section'}>
        <Header/>
        <div className={'profile__content content'}>
            <h1 className={'profile__title'}>Привет, {initialUser.name}!</h1>
            <form className={'profile__form'}>
                <div className={'profile__form-block'}>
                <input onChange={e => {
                    setUser({
                        ...user,
                        name: e.currentTarget.value
                    })
                }}      id={'profile__input_name'}
                       value={user.name}
                       type={'text'}
                       required={true}
                       className={'profile__input profile__input_name'}/>
               <label htmlFor={'profile__input_name'} className={'profile__label'}>
                   Имя
               </label>
                </div>
                <div className={'profile__form-block'}>
                <input onChange={e => {
                    setUser({
                        ...user,
                        email: e.currentTarget.value
                    })
                }}      id={'profile__input_email'}
                       value={user.email}
                       type={'email'}
                       required={true}
                       className={'profile__input profile__input_email'}/>
                <label htmlFor={'profile__input_email'} className={'profile__label'}>
                    E-mail
                </label>
                </div>
                <button type={'submit'}
                        onClick={handleFormSubmit}
                        className={'button profile__button profile__button_submit'}>
                    Редактировать
                </button>
                <button  onClick={handleLogout}
                         className={'button profile__button profile__button_logout'}>
                    Выйти из аккаунта
                </button>
            </form>
        </div>
    </section>
}
export default Profile