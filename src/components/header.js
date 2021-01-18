import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation,faBookmark, faComment } from '@fortawesome/free-solid-svg-icons'
import profile from '../images/me.png'
export default function Header() {
    return (
        <div className = "header">
            <div className = "header__logo">trillo</div>
                <form action = "#" className = "header__search">
                    <input type = "text" placeholder = "search" className = "header__search__input" />
                    <button className = "header__search__button">
                    <FontAwesomeIcon icon={faSearchLocation} />
                    </button>
                </form>
                <div className = "nav">
                    <div className = "nav__icon-box">
                        <FontAwesomeIcon icon = {faBookmark} />
                        <span className ="nav__notification" >7</span>
                    </div>
                    <div className = "nav__icon-box">
                        <FontAwesomeIcon icon = {faSearchLocation} />
                        <span className ="nav__notification" >7</span>
                    </div>
                    <div className = "nav__icon-box">
                        <FontAwesomeIcon icon = {faComment} />
                        <span className ="nav__notification" >777</span>
                    </div>
                    <div className = "nav__user">
                        <img src = {profile} className = "nav__user__photo" />
                        Ashish
                    </div>
                </div>
            
        </div>
    )
}
