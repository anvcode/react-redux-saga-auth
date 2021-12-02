import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = ({props}) => {
  return (
    <nav className='navbar bg-light justify-content-between mb-3'>
      <div className='d-flex justify-content-start'>
        <div className={style.item}>
          <NavLink exact to='/' activeClassName={style.activeLink}>На главную</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/news' activeClassName={style.activeLink}>Новости</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/profile' activeClassName={style.activeLink}>Профиль</NavLink>
        </div>
      </div>
      <div className='dropdown'>
        {
          props.isAuth ?
            <div>
              <div className='dropdown'>
                <button type='button' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'
                        aria-expanded='false'>
                  {props.username}
                </button>
                <ul className='dropdown-menu'>
                  <li><NavLink className='dropdown-item' activeClassName={style.activeLink} to='/profile'>Профиль</NavLink></li>
                  <li>
                    <button className='dropdown-item' type='button' onClick={props.logout}>Выйти</button>
                  </li>
                </ul>
              </div>
            </div>
            :
            <div className={style.item}>
              <NavLink className='nav-link' to='/login' activeClassName={style.activeLink}>Войти</NavLink>
            </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
