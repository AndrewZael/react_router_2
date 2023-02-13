import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const menu = [
    { to: '/', label: 'Home' },
    { to: '/pokemons', label: 'Pokemons' }
  ];
  const setActiveClass = ({ isActive }) => isActive ? "link-active" : undefined;
  return (
    <nav className="z-1 p-2 position-relative">
        <ul className="list-unstyled m-0 p-0 d-flex justify-content-end gap-2">
            {
              menu.map(item => (
                <li key={item.label}><NavLink
                  className={({ isActive }) => (
                    isActive && 'link-active'
                  ) + ' py-2 px-3 d-inline-block rounded text-decoration-none text-uppercase fw-bold'} 
                  to={item.to}>{ item.label }</NavLink></li>
              ))
            }
        </ul>
    </nav>
  )
}

export default Menu