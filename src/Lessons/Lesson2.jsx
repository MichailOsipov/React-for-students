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
            <CodeExample
                title="Самый простой пример, базовая верстка"
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>Hello world</div>,
    document.getElementById('root')
);
                `}
            />
            <CodeExample
                title="Рисуем что-то в отдельном компоненте"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
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
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <div>Hello world!</div>
    );
};

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);
                `}
            />
            <CodeExample
                title="Рисуем верстку посложнее"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
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
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Example1 = () => {
    return (
        <div>
            <h1>Hello</h1>
            <span>some text here</span>
            <button>Click!</button>
        </div>
    );
};

ReactDOM.render(
    <Example1 />,
    document.getElementById('root')
);                
                `}
            />
            <CodeExample
                title="Самозакрывающиеся теги (<div></div> и <div /> делают одно и то же)"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
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
                codeMain={`
const Example = () => {
    return (
        <div>
            <div></div>
            <div />
        </div>
    );
};

ReactDOM.render(
    <Example />,
    document.getElementById('root')
);                
                    `}
            />
            <CodeExample
                title="Добавляем стили (они обычно используются, если вам нужно менять параметры (например у вас динамическая ширина))"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
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
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Example1 = () => {
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
};

ReactDOM.render(
    <Example1 />,
    document.getElementById('root')
);                
                    `}
            />
            <CodeExample
                title="Добавляем стили через css (у вас должен быть файлик Example.css рядом)"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
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
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';
import './Example.css';

const Example1 = () => {
    return (
        <div>
            <div className="redCircle"></div>
            <h1 className="prettyTitle">Красивый заголовок</h1>
        </div>
    );
};

ReactDOM.render(
    <Example1 />,
    document.getElementById('root')
);
                `}
            />
            <CodeExample
                title="Example.css"
                codeMain={`
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
            />
        </LongDescription>
        <LongDescription title="Примеры на React (посложнее)">
            <CodeExample
                title="Переиспользуем компоненты (нарисовали трех одинаковых котов)"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
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
                <Cat />
                <Cat />
                <Cat />
                <Cat />
            </div>
        );
    }
}

ReactDOM.render(
    <Cats />,
    document.getElementById('root')
);
                `}
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Cat = () => {
    return (
        <div>
            <h2>Имя: Пушок</h2>
            <p>Цвет: Рыжий</p>
            <p>Хобби: Есть землю</p>
        </div>
    );
};

const Cats = () => {
    return (
        <div>
            <Cat />
            <Cat />
            <Cat />
            <Cat />
        </div>
    );
};

ReactDOM.render(
    <Cats />,
    document.getElementById('root')
);
                    `}
            />
            <CodeExample
                title="Вот так можно дать котам разные имена (параметры компонентов)"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
import * as React from 'react';
import ReactDOM from 'react-dom';

class Cat extends React.Component {
    render() {
        const name = this.props.name;

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
                <Cat name="Пушок"></Cat>
                <Cat name="Снежок"></Cat>
                <Cat name="Васька"></Cat>
                <Cat name="Кот"></Cat>
            </div>
        );
    }
}

ReactDOM.render(
    <Cats />,
    document.getElementById('root')
);
                `}
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Cat = ({ name }) => {
    return (
        <div>
            <h2>Имя: {name}</h2>
            <p>Цвет: Рыжий</p>
            <p>Хобби: Есть землю</p>
        </div>
    );
};

const Cats = () => {
    return (
        <div>
            <Cat name="Пушок"></Cat>
            <Cat name="Снежок"></Cat>
            <Cat name="Васька"></Cat>
            <Cat name="Кот"></Cat>
        </div>
    );
};

ReactDOM.render(
    <Cats />,
    document.getElementById('root')
);
                    `}
            />
            <CodeExample
                title="Доделываем остальные свойства котов"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
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
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Cat = ({ name, color }) => {
    return (
        <div>
            <h2>Имя: {name}</h2>
            <p>Цвет: {color}</p>
            <p>Хобби: Есть землю</p>
        </div>
    );
};

const Cats = () => {
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
};

ReactDOM.render(
    <Cats />,
    document.getElementById('root')
);                    
                    `}
            />
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
