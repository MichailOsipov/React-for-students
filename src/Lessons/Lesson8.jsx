import * as React from 'react';

import {
    LongDescription,
    Section
} from '../LayoutComponents';

export const Lesson8 = () => (
    <Section title="Занятие 8. Roadmap по JS, Java, Python">
        <LongDescription title="Для любого разработчика">
            Git <br />
            <a
                href="https://stepik.org/course/3145/promo"
                rel="noopener noreferrer"
                target="_blank"
            >
                https://stepik.org/course/3145/promo
            </a><br />
            <a href="https://github.com/kamranahmedse/developer-roadmap">
            https://github.com/kamranahmedse/developer-roadmap
            </a>
        </LongDescription>
        <LongDescription title="Python">
            для старта прям совсем с нуля отлично подходят 2 этих курса на степике:<br />
            <a
                href="https://stepik.org/course/67"
                rel="noopener noreferrer"
                target="_blank"
            >
                https://stepik.org/course/67
            </a><br />
            <a
                href="https://stepik.org/course/512"
                rel="noopener noreferrer"
                target="_blank"
            >
                https://stepik.org/course/512
            </a><br />
            еще что курс по алгоритмам неплох<br />
            <a
                href="https://stepik.org/course/217"
                rel="noopener noreferrer"
                target="_blank"
            >
                https://stepik.org/course/217
            </a><br />
            После этого настоятельно рекомендую прочитать эту книгу: <b>Марк Лутц, Программирование на Python</b>.
            Она не особо интересная, наверняка есть книги более легкие к прочтению,
            но она дает довольно объемлющее представление о языке.
            Часть про PyQt можно пропустить, если не планировать на этом фреймворке писать.
            Всегда можно в случае нужды изучать по факту.<br />

            Отдельно я бы заострил внимание на следующих темах:
            <ol>
                <li>ООП. Оно отличается от статически-типизованных языков.</li>
                <li>Конкурентность и параллелизм: многопоточность, многопроцессорность, asyncio.
                    Это оч нужно, важно и спрашивают на любом собеседовании.</li>
                <li>numpy, pandas, matplotlib - если уходить в веб то может и не надо,
                    но если будет хоть какая-то работа с табличными данными и их визуализацией - обязательно.</li>
                <li>Тестирование. Различать виды тестов, умение понимать что такое хороший
                    тест и способность его написать. Надо гуглить какие-нибудь статьи.</li>
                <li>PEP8 - это стайлгайд, которого надо обязательно придерживаться.</li>
            </ol>

            Вот тут еще есть условно-готовый роадмап:<br />
            <a
                href="https://github.com/GnuriaN/Python-Roadmap"
                rel="noopener noreferrer"
                target="_blank"
            >
                https://github.com/GnuriaN/Python-Roadmap
            </a>
        </LongDescription>
        <LongDescription title="Java">
            <a
                href="https://javarush.ru/groups/posts/2398-java-plan-deystviy"
                rel="noopener noreferrer"
                target="_blank"
            >
                https://javarush.ru/groups/posts/2398-java-plan-deystviy
            </a><br />
            <a href="https://roadmap.sh/java" rel="noopener noreferrer" target="_blank">https://roadmap.sh/java</a><br />
            В целом классика-фундамент для джуна: sql основа, алгоритмы (сложность, сортировки, поиск и тд),
            структуры данных и их реализация в java(разница и когда\что), vcs, build tools(maven, gradle),
             java внутрянка(включая Jvm, garbage collector), многопоточка,
             какой-нибудь фреймворк(самое популярное spring),
             unit-тестирование, jdbc+orm, webServices(web-ws web-rs например)<br />
            <img style={{ width: 1000 }} src="https://javarush.ru/images/article/45555681-4f17-4934-80de-44fc0869a31a/original.png" alt="java-roadmap" />
            <img style={{ width: 1000 }} src="https://raw.githubusercontent.com/s4kibs4mi/java-developer-roadmap/master/java-developer-roadmap.png" alt="java-roadmap-2" />
        </LongDescription>
        <LongDescription title="JS">
            <a href="https://roadmap.sh/frontend">https://roadmap.sh/frontend</a><br />
            HTML + CSS<br />
            <a href="https://htmlacademy.ru/" rel="noopener noreferrer" target="_blank">https://htmlacademy.ru/</a><br />
            JS<br />
            <a href="https://learn.javascript.ru/">https://learn.javascript.ru/</a><br />
            Webpack:<br />
            <a href="https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-webpack-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2-6cafbf562386">
            https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-webpack-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2-6cafbf562386
            </a><br />
            React:<br />
            <a href="https://reactjs.org/docs/getting-started.html">https://reactjs.org/docs/getting-started.html</a><br />
            <img style={{ width: 1000 }} src="https://roadmap.sh/roadmaps/react.png" alt="react-roadmap" />
        </LongDescription>
    </Section>
);
