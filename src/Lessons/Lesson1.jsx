import * as React from 'react';

import {
    Section,
    // LongDescription,
    BasicConcepts,
    Links
} from '../LayoutComponents';

export const Lesson1 = () => (
    <Section title="Занятие 1. Введение в Javascript">
        <BasicConcepts
            items={[
                'Как выглядит структура каждого веб приложения (html, css, js)',
                'Введение в Javascript. Основные типы данных JS',
                'Функции, выражения в JS',
                'Асинхронные события',
                'Изменение структуры сайта с помощью JS, как нарисовать что-то новое на сайте, изменить уже сделанное',
                'Обработка действий пользователя'
            ]}
        />
        {/* <LongDescription>
            Еще не готово
        </LongDescription> */}
        <Links
            links={[
                {
                    url: 'https://htmlacademy.ru/',
                    text: 'Очень хороший сайт про html и css'
                },
                {
                    url: 'https://learn.javascript.ru/',
                    text: 'Самый полный учебник по Javascript'
                },
                {
                    url: 'https://learn.javascript.ru/hello-world',
                    text: 'Как написать hello world на Javascript (Лучше прочитать весь блок целиком)'
                },
                {
                    url: 'https://learn.javascript.ru/types',
                    text: 'Типы данных'
                },
                {
                    url: 'https://learn.javascript.ru/variables',
                    text: 'Переменные'
                },
                {
                    url: 'https://learn.javascript.ru/dom-nodes',
                    text: 'Взаимодействие с со страницей сайта'
                },
                {
                    url: 'https://learn.javascript.ru/styles-and-classes',
                    text: 'Измение внешнего вида сайта'
                },
                {
                    url: 'https://learn.javascript.ru/introduction-browser-events',
                    text: 'Работа с событиями пользователя'
                }
            ]}
        />
    </Section>
);
