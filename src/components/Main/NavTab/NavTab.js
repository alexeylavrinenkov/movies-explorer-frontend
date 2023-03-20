import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='nav-tab section section_type_main'>
      <ul className='list nav-tab__links'>
        <li className='nav-tab__links-item'>
          <a href='#about-project' className='nav-tab__link link'>
            О проекте
          </a>
        </li>
        <li className='nav-tab__links-item'>
          <a href='#techs' className='nav-tab__link link'>
            Технологии
          </a>
        </li>
        <li className='nav-tab__links-item'>
          <a href='#student' className='nav-tab__link link'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
