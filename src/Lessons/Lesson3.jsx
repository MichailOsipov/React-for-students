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
