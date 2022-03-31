import * as React from 'react';

import {
    Section,
    BasicConcepts
} from '../LayoutComponents';

export const Lesson6 = () => (
    <Section title="Занятие 6. Смотрим сервер на Node.js">
        <BasicConcepts
            items={[
                'Зачем нужен сервер',
                'Как сервер и клиент общаются через http',
                'Как написать первый сервер на express',
                'Как сделать запрос с клиента на сервер',
                'Как написать свой чат'
            ]}
        />
        <h3>Примеры клиента и сервера доступны тут:</h3>
        <a href="https://github.com/MichailOsipov/React-for-students/tree/server-client">
            https://github.com/MichailOsipov/React-for-students/tree/server-client
        </a>
    </Section>
);
