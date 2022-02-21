import * as React from 'react';
import { Section } from './LayoutComponents';

import {
    Lesson1,
    Lesson2,
    Lesson3
} from './Lessons';
import styles from './Course.css';

export const Course = () => (
    <div className={styles.page}>
        <h1 className={styles.title}>Программа Проектного практикума по React</h1>
        <Lesson1 />
        <Lesson2 />
        <Lesson3 />
        <Section title="Посещения занятий и баллы:">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/spreadsheets/d/13b6BTvuySXDnGqdoLoqVi2JFX_MPbfzmYWNRJItXtHQ/edit#gid=0"
            >
                Ссылка на документ
            </a>
        </Section>
        <Section title="Материалы">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MichailOsipov/React-for-students"
            >
                Ссылка
            </a>
        </Section>
    </div>
);
