import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './main-course.css';

const Title = ({ children }) => (
    <h1>{children}</h1>
);

const Section = ({ title, children }) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
);

Section.propTypes = {
    title: PropTypes.string
};

const Description = ({ children }) => (
    <span>
        {children}
    </span>
);

class LongDescription extends React.Component {
    state = { open: false };

    onToggleOpen = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <span>Подробное описание:</span>
                <button type="button" onClick={this.onToggleOpen}>
                    {this.state.open ? 'Спрятать' : 'Показать'}
                </button>
                {this.state.open && (
                    <div>
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}

const List = ({ items }) => (
    <ul>
        {items.map(item => (
            <li>{item}</li>
        ))}
    </ul>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
};

const Links = ({ links }) => (
    <div>
        <h3>Полезные ссылки:</h3>
        <ul>
            {links.map(link => (
                <li>
                    <span>{link.text}:</span>
                    <a
                        href={link.url}
                        key={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {link.url}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

Links.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string
    }))
};

const StudentsAttendance = () => (
    <div>
        <h3>Посещения студентов и баллы:</h3>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/1JGmbfarrr-7wvtnTo9K_I9CAYIB1_H-XMKTW9Cmk9GQ/edit#gid=1083109322"
        >
            Ссылка на документ
        </a>
    </div>
);

export const MainCourse = () => (
    <div className={styles.page}>
        <Title>Программа Проектного практикума по React</Title>
        <Section title="Занятие 1. Введение в Javascript">
            <Description>
                На первом занятии изучаются следующие вещи:
                <List
                    items={[
                        'Как выглядит структура каждого веб приложения (html, css, js)',
                        'Введение в Javascript. Основные типы данных JS',
                        'Функции, выражения в JS',
                        'Асинхронные события',
                        'Изменение структуры сайта с помощью JS, как нарисовать что-то новое на сайте, изменить уже сделанное',
                        'Обработка действий пользователя'
                    ]}
                />
            </Description>
            <LongDescription>
                Длинное описание
            </LongDescription>
            <Links
                links={[
                    {
                        url: 'https://htmlacademy.ru/',
                        text: 'Очень хороший сайт про html и css'
                    },
                    {
                        url: 'https://learn.javascript.ru/',
                        text: 'Самый полный учебник по Javascript'
                    }
                ]}
            />
        </Section>
        <Section title="Занятие 2. Ознакомление с React" />
        <Section title="Занятие 3. Использование состояния в React" />
        <StudentsAttendance />
    </div>
);
