import * as React from 'react';
import {
    BasicConcepts,
    CodeExample,
    LongDescription,
    Section
} from '../LayoutComponents';

export const Lesson5 = () => (
    <Section title="Занятие 5. Поля ввода в React">
        <BasicConcepts
            items={[
                'Как работать с полем ввода в React (как дать пользователю ввести текст)',
                'Разные поля ввода: Текст, Дата, Число, Чекбокс, Селект',
                'Создаем разных "студентов" с разными именами'
            ]}
        />
        <LongDescription title="Примеры на React, которые мы разбирали">
            <CodeExample title="Добавляем текстовый инпут">
                {`
import * as React from 'react';

export class TextInput extends React.Component {
    state = { textValue: '' }

    handleChange = (event) => {
        this.setState({ textValue: event.target.value });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.textValue}
                    onChange={this.handleChange}
                />
                Вы ввели значение: {this.state.textValue}
            </div>
        );
    }
}

ReactDOM.render(
    <TextInput />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Добавляем поле ввода с датой">
                {`
import * as React from 'react';

export class DateInput extends React.Component {
    state = { dateValue: '' }

    handleChange = (event) => {
        this.setState({ dateValue: event.target.value });
    }

    render() {
        return (
            <div>
                <input
                    type="date"
                    value={this.state.dateValue}
                    onChange={this.handleChange}
                />
                Вы ввели значение: {this.state.dateValue}
            </div>
        );
    }
}

ReactDOM.render(
    <DateInput />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Добавляем чекбокс">
                {`
import * as React from 'react';

export class CheckboxInput extends React.Component {
    state = { checkboxValue: '' }

    handleChange = (event) => {
        this.setState({ checkboxValue: event.target.checked });
    }

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.checkboxValue}
                    onChange={this.handleChange}
                />
                {this.state.checkboxValue && <div>значение чекбокса = true</div>}
                {!this.state.checkboxValue && <div>значение чекбокса = false</div>}
            </div>
        );
    }
}

ReactDOM.render(
    <CheckboxInput />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Пример с select">
                {`
import * as React from 'react';

const cities = [
    { label: '', value: undefined },
    { label: 'Тверь', value: 'Tver' },
    { label: 'Москва', value: 'Moscow' },
    { label: 'Ижевск', value: 'Izhevsk' }
];

export class Select extends React.Component {
    state = { selectedValue: '' }

    handleChange = (event) => {
        this.setState({ selectedValue: event.target.value });
    }

    render() {
        return (
            <div>
                <select
                    onChange={this.handleChange}
                    value={this.state.selectedValue}
                >
                    {cities.map(city => (
                        <option
                            key={city.value}
                            value={city.value}
                        >
                            {city.label}
                        </option>
                    ))}
                </select>
                <div>
                    Вы выбрали: {this.state.selectedValue}
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Select />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Делаем студентов с разными именами">
                {`
import * as React from 'react';

export class Students extends React.Component {
    state = {
        students: [{ firstname: 'Андрей', lastname: 'Тверской' }],
        firstnameValue: '',
        lastnameValue: ''
    }

    handleFirstnameChange = (event) => {
        this.setState({ firstnameValue: event.target.value });
    }
    
    handleLastnameChange = (event) => {
        this.setState({ lastnameValue: event.target.value });
    }

    handleAdd = () => {
        const newStudents = [...this.state.students];

        newStudents.push({
            firstname: this.state.firstnameValue,
            lastname: this.state.lastnameValue
        });

        this.setState({
            students: newStudents,
            firstnameValue: '',
            lastnameValue: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Студенты:</h2>
                {this.state.students.map(student => (
                    <div>
                        <h3>{student.firstname}</h3>
                        <h3>{student.lastname}</h3>
                    </div>
                ))}
                <h2>Добавить нового студента:</h2>
                <label>Имя:</label><br />
                <input
                    value={this.state.firstnameValue}
                    onChange={this.handleFirstnameChange}
                />
                <br />
                <label>Фамилия:</label><br />
                <input
                    value={this.state.lastnameValue}
                    onChange={this.handleLastnameChange}
                />
                <br />
                <button onClick={this.handleAdd}>Добавить</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Делаем студентов с отметкой нравится">
                {`
import * as React from 'react';

export class PlayGround extends React.Component {
    state = {
        students: [{ firstname: 'Андрей', lastname: 'Тверской', like: false }],
        firstnameValue: '',
        lastnameValue: '',
        likeValue: false
    }

    handleFirstnameChange = (event) => {
        this.setState({ firstnameValue: event.target.value });
    }

    handleLastnameChange = (event) => {
        this.setState({ lastnameValue: event.target.value });
    }

    handleLikeChange = (event) => {
        this.setState({ likeValue: event.target.checked });
    }

    handleAdd = () => {
        const newStudents = [...this.state.students];

        newStudents.push({
            firstname: this.state.firstnameValue,
            lastname: this.state.lastnameValue,
            like: this.state.likeValue
        });

        this.setState({
            students: newStudents,
            firstnameValue: '',
            lastnameValue: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Студенты:</h2>
                {this.state.students.map(student => (
                    <div>
                        <h3>{student.firstname}</h3>
                        <h3>{student.lastname}</h3>
                        {student.like ? 'Нравится' : 'Не нравится'}
                    </div>
                ))}
                <h2>Добавить нового студента:</h2>
                <label>Имя:</label><br />
                <input value={this.state.firstnameValue} onChange={this.handleFirstnameChange} /><br />
                <label>Фамилия:</label><br />
                <input value={this.state.lastnameValue} onChange={this.handleLastnameChange} /><br />
                <label>Мне он нравится</label>
                <input type="checkbox" checked={this.state.likeValue} onChange={this.handleLikeChange} /><br />
                <button onClick={this.handleAdd}>Добавить</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
            </CodeExample>
            <CodeExample title="Фильтруем студентов и показываем только тех кто нравится">
                {`
import * as React from 'react';

export class PlayGround extends React.Component {
    state = {
        students: [{ firstname: 'Андрей', lastname: 'Тверской', like: false }],
        firstnameValue: '',
        lastnameValue: '',
        likeValue: false,
        filter: 'all'
    }

    handleFirstnameChange = (event) => {
        this.setState({ firstnameValue: event.target.value });
    }

    handleLastnameChange = (event) => {
        this.setState({ lastnameValue: event.target.value });
    }

    handleLikeChange = (event) => {
        this.setState({ likeValue: event.target.checked });
    }

    handleAdd = () => {
        const newStudents = [...this.state.students];

        newStudents.push({
            firstname: this.state.firstnameValue,
            lastname: this.state.lastnameValue,
            like: this.state.likeValue
        });

        this.setState({
            students: newStudents,
            firstnameValue: '',
            lastnameValue: ''
        });
    }

    showLiked = () => {
        this.setState({ filter: 'liked' });
    }

    showAll = () => {
        this.setState({ filter: 'all' });
    }

    render() {
        const studentsToRender = this.state.filter === 'all'
            ? this.state.students
            : this.state.students.filter(st => st.like);
        return (
            <div>
                <button onClick={this.showLiked}>Показать кто нравится</button>
                <button onClick={this.showAll}>Показать всех</button>
                <h2>Студенты:</h2>
                {studentsToRender.map(student => (
                    <div>
                        <h3>{student.firstname}</h3>
                        <h3>{student.lastname}</h3>
                        {student.like ? 'Нравится' : 'Не нравится'}
                    </div>
                ))}
                <h2>Добавить нового студента:</h2>
                <label>Имя:</label><br />
                <input value={this.state.firstnameValue} onChange={this.handleFirstnameChange} /><br />
                <label>Фамилия:</label><br />
                <input value={this.state.lastnameValue} onChange={this.handleLastnameChange} /><br />
                <label>Мне он нравится</label>
                <input type="checkbox" checked={this.state.likeValue} onChange={this.handleLikeChange} /><br />
                <button onClick={this.handleAdd}>Добавить</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Students />,
    document.getElementById('root')
);
                `}
            </CodeExample>
        </LongDescription>
    </Section>
);
