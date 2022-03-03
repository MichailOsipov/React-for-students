import * as React from 'react';

import {
    CodeExample,
    Section,
    // LongDescription,
    BasicConcepts,
    Links,
    LongDescription
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
        <LongDescription
            title="Структура проекта в клиентском web"
            description={(
                <span>
                    Каждый проект состоит из трех частей: файл index.html (верстка-скелет сайта),
                    styles.css (стили сайта, делаю страничку красивой) и main.js (скрипт, который оживляет станичку)
                </span>
            )}
        >
            <CodeExample title="Пример файла верстки index.html">
                {`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Hello world</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <div id="root"></div>
                <!-->Здесь ниже добавляем скрипт</-->
                <script type="text/javascript" src="main.js"></script>
            </body>
        </html>
                `}
            </CodeExample>
            <CodeExample title="Пример файла стилей styles.css">
                {`
        h1 {
            color: red;
            font-size: 35px;
        }
        
        .box {
            width: 100px;
            height: 50px;
            background: red;
        }
                `}
            </CodeExample>
            <CodeExample title="Пример файла скриптов main.js">
                {`
        const button = document.getElementById('button');

        button.AddEventListenter('click', () => {
            alert('Hello from JS');
        });
                `}
            </CodeExample>
        </LongDescription>
        <LongDescription title="Пишем первые скрипты на JS (в html должен быть <div id='button'></div>)">
            <CodeExample title="Пример файла скриптов main.js">
                {`
        const button = document.getElementById('button');

        button.AddEventListenter('click', () => {
            alert('Hello from JS');
        });
                `}
            </CodeExample>
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
