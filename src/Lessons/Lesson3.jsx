import * as React from 'react';

import {
    Links,
    BasicConcepts,
    // LongDescription,
    Section
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
        {/* <LongDescription>
            Еще не готово
        </LongDescription> */}
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
