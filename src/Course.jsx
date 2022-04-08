import * as React from 'react';
import {
    Section,
    LongDescription
} from './LayoutComponents';

import {
    Lesson1,
    Lesson2,
    Lesson3,
    Lesson4,
    Lesson5,
    Lesson6,
    Lesson7,
    Lesson8
} from './Lessons';

import {
    example1DataURL
} from './example1DataURL';
import {
    example2DataURL
} from './example2DataURL';

import styles from './Course.css';

export const Course = () => (
    <div className={styles.page}>
        <h1 className={styles.title}>Программа Проектного практикума по React</h1>
        <Lesson1 />
        <Lesson2 />
        <Lesson3 />
        <Lesson4 />
        <Lesson5 />
        <Lesson6 />
        <Lesson7 />
        <Section title="Задание на модуль 1">
            Выберите свою предметную область (актеры, персонажи книг, фильмов, животные, магазины и т.д.)
            <ol>
                <li>Сверстайте на React набор этих сущностей (актеров, животных и т.д.).
                    У каждой сущности должно быть 3-4 свойства (имя, фамилия, возвраст,
                    <b>аватар</b> - обязательно) <b>(10 баллов)</b>
                </li>
                <li>Сделайте кнопку, которая при нажатии добавляла бы еще одну сущность. <b>(5 баллов)</b></li>
                <li>Возле каждой сущности нарисуйте кнопку удаления. При нажатии на нее {'\'животное\''} например, должно удалиться. <b>(5 баллов)</b></li>
            </ol>
            <LongDescription title="Макет задания 1">
                <img src={example1DataURL} alt="example1" />
            </LongDescription>
        </Section>
        <Section title="Задание на модуль 2">
            Продолжение задания 1
            <ol>
                <li>В предыдущем задание каждый раз, когда мы создавали актера, животного, и т.д.,
                    мы создавали копии, одинаковые сущности. У нас
                    всегда были животные с одними и теми же именами, фамилиями, аватарками.
                </li>
                <li>Над кнопкой Добавить сделать два текстовых поля ввода,
                    чтобы можно было ввести например имя и фамилию актера</li>
                <li>Должно работать следующее: Пользователя вводит имя и фамилию, нажимает
                    кнопку добавить - и появляется новая сущность с введенными именем и фамилией <b>(10 баллов)</b></li>
                <li>Реализовать еще одно поле - выбор даты - чтобы можно было задать например год-рождения
                    <b>(5 баллов)</b></li>
                <li>Реализовать еще одно поле - чекбокс- чтобы можно было задать
                    например нравится мне этот актер или не нравится <b>(5 баллов)</b></li>
                <li>Реализовать фильтр сущностей - появляются две кнопки - показать
                    все (когда нажимаем - показываются все записи) и показать понравившееся
                    (показываются только те где мы нажимали нравится)<b>(10 баллов)</b></li>
            </ol>
            <LongDescription title="Макет задания 2">
                <img src={example2DataURL} alt="example2" />
            </LongDescription>
        </Section>
        <Lesson8 />
        <Section title="Посещения занятий и баллы:">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/spreadsheets/d/13b6BTvuySXDnGqdoLoqVi2JFX_MPbfzmYWNRJItXtHQ/edit#gid=0"
            >
                Ссылка на документ
            </a>
        </Section>
        <Section title="Материалы">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MichailOsipov/React-for-students"
            >
                Ссылка
            </a>
        </Section>
    </div>
);
