import * as React from 'react';

import {
    Section,
    // LongDescription,
    BasicConcepts,
    Links
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
        {/* <LongDescription>
            Еще не готово
        </LongDescription> */}
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
