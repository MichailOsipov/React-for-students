import * as React from 'react';
import {
    BasicConcepts,
    CodeExample,
    LongDescription,
    Section
} from '../LayoutComponents';

export const Lesson4 = () => (
    <Section title="Занятие 4. Работаем с коллекциями в React">
        <BasicConcepts
            items={[
                'Как сделать динамический список в React (список фильмов, котов и т.д)',
                'Как добавлять новые сущности в список',
                'Как удалять из списка'
            ]}
        />
        <LongDescription title="Примеры на React, которые мы разбирали">
            <CodeExample
                title="Добавляем новых студентов"
                description="Для этого нужно положить студентов в state"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
import * as React from 'react';
import ReactDOM from 'react-dom';

class Students extends React.Component {
    state = {
        students: ['Петя1', 'Петя2', 'Петя3'],
    }

    handleAddStudent = () => {
        const newStudents = [...this.state.students]; // копируем студентов

        newStudents.push('Петя' + newStudents.length);

        this.setState({ students: newStudents });
    }

    render() {
        return (
            <div>
                {this.state.students.map(student => (
                    <div>
                        <h2>{student}</h2>
                    </div>
                ))}
                <button onClick={this.handleAddStudent}>
                    Add student
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Students = () => {
    const [students, setStudents] = React.useState(['Петя1', 'Петя2', 'Петя3']);

    const handleAddStudent = () => {
        const newStudents = [...students]; // копируем студентов

        newStudents.push('Петя' + newStudents.length);

        setStudents(newStudents);
    };

    return (
        <div>
            {students.map(student => (
                <div>
                    <h2>{student}</h2>
                </div>
            ))}
            <button onClick={handleAddStudent}>
                Add student
            </button>
        </div>
    );
};

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                    `}
            />
            <CodeExample
                title="Добавляем студентов 'посложнее'"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
import * as React from 'react';
import ReactDOM from 'react-dom';

class Students extends React.Component {
    state = {
        students: [
            { firstName: 'Вася', lastName: 'Петров' },
            { firstName: 'Петя', lastName: 'Иванов' },
            { firstName: 'Аркадий', lastName: 'Лепс' }
        ]
    }

    handleAddStudent = () => {
        const newStudents = [...this.state.students];
        const newStudent = {
            firstName: 'Петя' + newStudents.length,
            lastName: 'Иванов' + newStudents.length,
        };
        newStudents.push(newStudent);

        this.setState({ students: newStudents });
    }

    render() {
        return (
            <div>
                {this.state.students.map(student => (
                    <div>
                        <h2>{student.firstName}</h2>
                        <h2>{student.lastName}</h2>
                    </div>
                ))}
                <button onClick={this.handleAddStudent}>
                    Add student
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Students = () => {
    const [students, setStudents] = React.useState([
        { firstName: 'Вася', lastName: 'Петров' },
        { firstName: 'Петя', lastName: 'Иванов' },
        { firstName: 'Аркадий', lastName: 'Лепс' }
    ]);

    const handleAddStudent = () => {
        const newStudents = [...students];
        const newStudent = {
            firstName: 'Петя' + newStudents.length,
            lastName: 'Иванов' + newStudents.length,
        };
        newStudents.push(newStudent);

        setStudents(newStudents);
    };

    return (
        <div>
            {students.map(student => (
                <div>
                    <h2>{student.firstName}</h2>
                    <h2>{student.lastName}</h2>
                </div>
            ))}
            <button onClick={handleAddStudent}>
                Add student
            </button>
        </div>
    );
};

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                    
                    `}
            />
            <CodeExample
                title="Тоже самое, но для студентов заведем отдельный компонент"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
import * as React from 'react';
import ReactDOM from 'react-dom';

class Student extends React.Component {
    render() {
        const firstName = this.props.firstName;
        const lastName = this.props.lastName;

        return (
            <div>
                <h2>{firstName}</h2>
                <h2>{lastName}</h2>
            </div>
        );
    }
}

class Students extends React.Component {
    state = {
        students: [
            { firstName: 'Вася', lastName: 'Петров' },
            { firstName: 'Петя', lastName: 'Иванов' },
            { firstName: 'Аркадий', lastName: 'Лепс' }
        ]
    }

    handleAddStudent = () => {
        const newStudents = [...this.state.students];
        const newStudent = {
            firstName: 'Петя' + newStudents.length,
            lastName: 'Иванов' + newStudents.length,
        };
        newStudents.push(newStudent);

        this.setState({ students: newStudents });
    }

    render() {
        return (
            <div>
                {this.state.students.map(student => (
                    <Student
                        firstName={student.firstName}
                        lastName={student.lastName}
                    />
                ))}
                <button onClick={this.handleAddStudent}>
                    Add student
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Student = ({ firstName, lastName }) => {
    return (
        <div>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
        </div>
    );
};

const Students = () => {
    const [students, setStudents] = React.useState([
        { firstName: 'Вася', lastName: 'Петров' },
        { firstName: 'Петя', lastName: 'Иванов' },
        { firstName: 'Аркадий', lastName: 'Лепс' }
    ]);

    const handleAddStudent = () => {
        const newStudents = [...students];
        const newStudent = {
            firstName: 'Петя' + newStudents.length,
            lastName: 'Иванов' + newStudents.length,
        };
        newStudents.push(newStudent);

        setStudents(newStudents);
    };

    return (
        <div>
            {students.map(student => (
                <Student
                    firstName={student.firstName}
                    lastName={student.lastName}
                />
            ))}
            <button onClick={handleAddStudent}>
                Add student
            </button>
        </div>
    );
};

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                    
                    `}
            />
            <CodeExample
                title="Удаление студента"
                codeHiddenButtonText="Старый код на классах"
                codeHidden={`
import * as React from 'react';
import ReactDOM from 'react-dom';

class Students extends React.Component {
    state = {
        students: [
            { firstName: 'Вася', lastName: 'Петров' },
            { firstName: 'Петя', lastName: 'Иванов' },
            { firstName: 'Аркадий', lastName: 'Лепс' }
        ]
    }

    handleAddStudent = () => {
        const newStudents = [...this.state.students];
        const newStudent = {
            firstName: 'Петя' + newStudents.length,
            lastName: 'Иванов' + newStudents.length,
        };
        newStudents.push(newStudent);

        this.setState({ students: newStudents });
    }

    handleDeleteStudent = (index) => {
        const students = this.state.students;
        const newStudents = [];

        for (let i = 0; i < students.length; i++) {
            if (i != index) {
                newStudents.push(students[i]);
            }
        }

        this.setState({ students: newStudents });
    }

    render() {
        return (
            <div>
                {this.state.students.map((student, index) => (
                    <div>
                        <h2>{student.firstName}</h2>
                        <button onClick={() => this.handleDeleteStudent(index)}>
                            Удалить
                        </button>
                        <h2>{student.lastName}</h2>
                    </div>
                ))}
                <button onClick={this.handleAddStudent}>
                    Add student
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
                codeMain={`
import * as React from 'react';
import ReactDOM from 'react-dom';

const Students = () => {
    const [students, setStudents] = React.useState([
        { firstName: 'Вася', lastName: 'Петров' },
        { firstName: 'Петя', lastName: 'Иванов' },
        { firstName: 'Аркадий', lastName: 'Лепс' }
    ]);

    const handleAddStudent = () => {
        const newStudents = [...students];
        const newStudent = {
            firstName: 'Петя' + newStudents.length,
            lastName: 'Иванов' + newStudents.length,
        };
        newStudents.push(newStudent);

        setStudents(newStudents);
    }

    const handleDeleteStudent = (index) => {
        const newStudents = [];

        for (let i = 0; i < students.length; i++) {
            if (i != index) {
                newStudents.push(students[i]);
            }
        }

        setStudents(newStudents);
    };

    return (
        <div>
            {students.map((student, index) => (
                <div>
                    <h2>{student.firstName}</h2>
                    <button onClick={() => handleDeleteStudent(index)}>
                        Удалить
                    </button>
                    <h2>{student.lastName}</h2>
                </div>
            ))}
            <button onClick={handleAddStudent}>
                Add student
            </button>
        </div>
    );
};

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);                    
                    `}
            />
        </LongDescription>
    </Section>
);
