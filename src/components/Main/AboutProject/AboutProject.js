import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project section section_type_main' id='about-project'>
      <h2 className='about-project__title main-title'>О проекте</h2>
      <ul className='about-project__stats list'>
        <li className='about-project__stat'>
          <h3 className='about-project__stat-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__stat-text'>
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__stat'>
          <h3 className='about-project__stat-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__stat-text'>
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__graph'>
        <div className='about-project__graph-intervals'>
          <p className='about-project__graph-interval about-project__back-interval'>
            1 неделя
          </p>
          <p className='about-project__graph-interval about-project__front-interval'>
            4 недели
          </p>
        </div>
        <div className='about-project__graph-captions'>
          <p className='about-project__graph-caption about-project__back-caption'>Back-end</p>
          <p className='about-project__graph-caption about-project__front-caption'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
