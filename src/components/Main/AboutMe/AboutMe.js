import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../../images/student.jpg';

const AboutMe = () => {
  return (
    <article className='student section_type_main' id='student'>
      <h2 className='student__title title_type_main'>Студент</h2>
      <div className='student__bio-container'>
        <div className='student__text'>
          <h3 className='student__name'>Алексей</h3>
          <p className='student__profession'>
            Фронтенд-разработчик, 21 год
          </p>
          <p className='student__about'>
            Я начал заниматься веб-разработкой год назад.
            До этого интересовался машинным обучением,
            анализом данных, математикой и проходил небольшие курсы на Coursera и Stepik.
            Сейчас мне очень интересна сфера разработки сайтов.
            Интересна она во многом благодаря наглядным результатам работы и задачам, которые могут встретиться по пути.
          </p>
          <a rel='noreferrer' target='_blank' href='https://github.com/alexeylavrinenkov' className='student__link link'>Github</a>
        </div>
        <img src={studentPhoto} alt='Моё фото' className='student_photo' />
      </div>
    </article>
  );
};

export default AboutMe;

