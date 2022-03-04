import * as React from 'react';

import {
    Links,
    BasicConcepts,
    Section,
    LongDescription,
    CodeExample
} from '../LayoutComponents';

export const Lesson3 = () => (
    <Section title="Занятие 3. Использование состояния в React">
        <BasicConcepts
            items={[
                'Как работать с состоянием в React.',
                'Оно нам нужно, когда мы хотим что-либо запомнить',
                'Например, что пользователь нажимал на кнопку',
                'Как нарисовать коллекцию (например если у нас есть список студентов)',
                'Как обрабатывать события пользователя'
            ]}
        />
        <LongDescription title="Примеры на React, которые мы разбирали">
            <CodeExample
                title="Пример выпадающего текста: сначала текста нет, а нажимаем на кнопку и он есть"
            >
                {`
import * as React from 'react';
import ReactDOM from 'react-dom';

class SmartText extends React.Component {
    state = { open: false }

    handleOpen = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const open = this.state.open;

        return (
            <div>
                {open && <div>Какой-то длинный текст</div>}
                <button onClick={this.handleOpen}>Click</button>
            </div>
        );
    }
}

ReactDOM.render(
    <SmartText />,
    document.getElementById('root')
);                
                `}
            </CodeExample>
            <CodeExample
                title="Пример кнопочки, которая считает, сколько раз ты покликал"
            >
                {`
import * as React from 'react';
import ReactDOM from 'react-dom';

class Clicker extends React.Component {
    state = { cliks: 0 }

    handleClicks = () => {
        const prevClicks = this.state.clicks;

        this.setState({ clicks: prevClicks + 1 });
    }

    render() {
        const clicks = this.state.clicks;

        return (
            <div>
                <button onClick={this.handleClicks}>
                    You clicked: {clicks} times
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Clicker />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample
                title="Рисуем красный кружок, одна кнопочка увеличивает его размер, вторая двигает вправо"
            >
                {`
import * as React from 'react';
import ReactDOM from 'react-dom';

class Circle extends React.Component {
    state = { size: 0, margin: 0 }

    handleSizeChange = () => {
        const prevSize = this.state.size;

        this.setState({ size: prevSize + 1 });
    }

    handleMarginChange = () => {
        const prevMargin = this.state.margin;

        this.setState({ margin: prevMargin + 1 });
    }

    render() {
        const size = this.state.size;
        const margin = this.state.margin;

        return (
            <div>
                <div
                    style={{
                        width: size * 10,
                        height: size * 10,
                        background: 'red',
                        borderRadius: '50%',
                        marginLeft: margin * 10,
                    }}
                />
                <button onClick={this.handleSizeChange}>
                    Increase size
                </button>
                <button onClick={this.handleMarginChange}>
                    Increase margin
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Circle />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Как положить компонент в отдельный файл, например Cat.jsx">
                {`
import * as React from 'react';

export class Cat extends React.Component {
    render() {
        return (
            <div>
                <h2>Имя: Пушок</h2>
                <p>Цвет: Рыжий</p>
                <p>Хобби: Есть землю</p>
            </div>
        );
    }
}
                `}
            </CodeExample>
            <CodeExample title="Импортируем 'Кота'">
                {`
import * as React from 'react';
import ReactDOM from 'react-dom';

import { Cat } from './Cat';

ReactDOM.render(
    <Cat />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Рисуем список студентов">
                {`
import * as React from 'react';
import ReactDOM from 'react-dom';

const students = ['Вася', 'Петя', 'Акрадий', 'Маша'];

class Students extends React.Component {
    render() {
        return (
            <div>
                {students.map(student => (
                    <h2>{student}</h2>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Рисуем студентов посложнее (с именем и фамилией)">
                {`
import * as React from 'react';
import ReactDOM from 'react-dom';

const students = [
    { firstName: 'Вася', lastName: 'Петров' },
    { firstName: 'Петя', lastName: 'Иванов' },
    { firstName: 'Аркадий', lastName: 'Лепс' }
];

class Students extends React.Component {
    render() {
        return (
            <div>
                {students.map(student => (
                    <div>
                        <h2>{student.firstName}</h2>
                        <h2>{student.lastName}</h2>
                    </div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
            </CodeExample>
        </LongDescription>
        <Links
            links={[
                {
                    url: 'https://ru.reactjs.org/docs/state-and-lifecycle.html',
                    text: 'Работа с состоянием'
                },
                {
                    url: 'https://ru.reactjs.org/docs/handling-events.html',
                    text: 'Обработка событий'
                },
                {
                    url: 'https://ru.reactjs.org/docs/lists-and-keys.html',
                    text: 'Рисуем списки'
                },
                {
                    url: 'https://ru.reactjs.org/docs/lifting-state-up.html',
                    text: 'Работа с состоянием'
                }
            ]}
        />
    </Section>
);
