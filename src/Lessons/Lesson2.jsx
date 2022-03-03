import * as React from 'react';

import {
    Section,
    LongDescription,
    BasicConcepts,
    Links,
    CodeExample
} from '../LayoutComponents';

export const Lesson2 = () => (
    <Section title="Занятие 2. Ознакомление с React">
        <BasicConcepts
            items={[
                'Что такое классы в Javascript',
                'Что такое библиотека React, зачем она нужна',
                'Как сверстать страницу в React',
                'Стили в React (style и className)',
                'Как создать свой компонент (переопределить свой тег) и сделать так, чтобы один компонент рисовал другой',
                'Передача свойств из одного компонента в другой'
            ]}
        />
        <LongDescription
            title="Примеры на React, которые мы разбирали (Верстка)"
        >
            <CodeExample title="Самый простой пример, базовая верстка">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        
        ReactDOM.render(
            <div>Hello world</div>,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Рисуем что-то в отдельном компоненте">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        
        class HelloWorld extends React.Component {
            render() {
                return (
                    <div>Hello world!</div>
                );
            }
        }

        ReactDOM.render(
            <HelloWorld />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Рисуем верстку посложнее">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        
        class Example1 extends React.Component {
            render() {
                return (
                    <div>
                        <h1>Hello</h1>
                        <span>some text here</span>
                        <button>Click!</button>
                    </div>
                );
            }
        }

        ReactDOM.render(
            <Example1 />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Самозакрывающиеся теги (<div></div> и <div /> делают одно и то же)">
                {`
        class Example extends React.Component {
            render() {
                return (
                    <div>
                        <div></div>
                        <div />
                    </div>
                );
            }
        }
        
        ReactDOM.render(
            <Example />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Добавляем стили (они обычно используются, если вам нужно менять параметры (например у вас динамическая ширина))">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        
        class Example1 extends React.Component {
            render() {
                return (
                    <div>
                        <div
                            style={{
                                background: 'red',
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                            }}
                        ></div>
                        <h1 style={{ fontSize: 32, color: 'green' }}>Красивый заголовок</h1>
                    </div>
                );
            }
        }
        
        ReactDOM.render(
            <Example1 />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Добавляем стили через css (у вас должен быть файлик Example.css рядом)">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        import './Example.css';
        
        class Example1 extends React.Component {
            render() {
                return (
                    <div>
                        <div className="redCircle"></div>
                        <h1 className="prettyTitle">Красивый заголовок</h1>
                    </div>
                );
            }
        }
        
        ReactDOM.render(
            <Example1 />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Example.css">
                {`
        .circle {
            display: block;
            width: 100px;
            height: 100px;
            background: red;
            border-radius: 50%;
        }
        
        .prettyTitle {
            color: green;
            font-size: 16px;
        }
                `}
            </CodeExample>
        </LongDescription>
        <LongDescription title="Примеры на React (посложнее)">
            <CodeExample title="Переиспользуем компоненты (нарисовали трех одинаковых котов)">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        
        class Cat extends React.Component {
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
        
        class Cats extends React.Component {
            render() {
                return (
                    <div>
                        `}<b>{'<Cat />'}</b>{`
                        `}<b>{'<Cat />'}</b>{`
                        `}<b>{'<Cat />'}</b>{`
                        `}<b>{'<Cat />'}</b>{`
                    </div>
                );
            }
        }
        
        ReactDOM.render(
            <Cats />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Вот так можно дать котам разные имена (параметры компонентов)">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        
        class Cat extends React.Component {
            render() {
                `}<b>const name = this.props.name;</b>{`
        
                return (
                    <div>
                        <h2>Имя: {name}</h2>
                        <p>Цвет: Рыжий</p>
                        <p>Хобби: Есть землю</p>
                    </div>
                );
            }
        }
        
        class Cats extends React.Component {
            render() {
                return (
                    <div>
                        <Cat `}<b>{'name="Пушок"'}</b>{`></Cat>
                        <Cat `}<b>{'name="Снежок"'}</b>{`></Cat>
                        <Cat `}<b>{'name="Васька"'}</b>{`></Cat>
                        <Cat `}<b>{'name="Кот"'}</b>{`></Cat>
                    </div>
                );
            }
        }
        
        ReactDOM.render(
            <Cats />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
            <CodeExample title="Доделываем остальные свойства котов">
                {`
        import * as React from 'react';
        import ReactDOM from 'react-dom';
        
        class Cat extends React.Component {
            render() {
                const name = this.props.name;
                const color = this.props.color;
        
                return (
                    <div>
                        <h2>Имя: {name}</h2>
                        <p>Цвет: {color}</p>
                        <p>Хобби: Есть землю</p>
                    </div>
                );
            }
        }
        
        class Cats extends React.Component {
            render() {
                return (
                    <div>
                        <Cat
                            name="Пушок"
                            color="Рыжый"
                            hobby="Есть землю"
                        >
                        </Cat>
                        <Cat
                            name="Снежок"
                            color="Черный"
                            hobby="Грызть обои"
                        >
                        </Cat>
                        <Cat
                            name="Васька"
                            color="Белый"
                            hobby="Врезаться в стены"
                        >
                        </Cat>
                        <Cat
                            name="Кот"
                            color="Серый"
                            hobby="Есть землю"
                        >
                        </Cat>
                    </div>
                );
            }
        }
        
        ReactDOM.render(
            <Cats />,
            document.getElementById('root')
        );
                `}
            </CodeExample>
        </LongDescription>
        <Links
            links={[
                {
                    url: 'https://ru.reactjs.org/docs/getting-started.html',
                    text: 'Как начать работать на React'
                },
                {
                    url: 'https://ru.reactjs.org/docs/hello-world.html',
                    text: 'Hellow world на React'
                },
                {
                    url: 'https://ru.reactjs.org/docs/components-and-props.html',
                    text: 'Компоненты и свойства'
                }
            ]}
        />
    </Section>
);
