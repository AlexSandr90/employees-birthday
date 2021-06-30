import React, { useState } from 'react';

import classes from './app.module.scss';
import {
    storage,
    getData,
    URL_API,
    getAlphabet
} from "../../helpers";


const App = () => {

    const [ state, setState ] = useState([]);

    if (!storage.getItem('employees') || storage.getItem('employees') === '[]') {
        getData(URL_API, setState);
        storage.setItem('employees', JSON.stringify(state))
    }

    const alphabet = getAlphabet('A','Z');
    const employees = JSON.parse(storage.getItem('employees')).sort((a, b) => a.lastName > b.lastName ? 1 : -1 );

    const alphabetAndEmployees = [];

    for (let i = 0; i < alphabet.length; i++) {

        for (let j = 0; j < employees.length; j++) {
            if (alphabet[i] === employees[j].lastName.charAt(0)) {
                alphabetAndEmployees.push({
                    id: employees[j].id,
                    char: alphabet[i],
                    firstName: employees[j].firstName,
                    lastName: employees[j].lastName,
                    dob: employees[j].dob
                })
            }
        }
    }

    const renderAlphabetAndEmployees = alphabetAndEmployees.map(({id, char, firstName, lastName, dob}) => {
        return (
            <li key={ id }>
                <p>{char}</p>
                <p>{firstName}</p>
                <p>{lastName}</p>
            </li>
        )
    })

    const renderAlphabet = getAlphabet('A','Z').map(char => {
        return (
            <li key={char}>{char}</li>
        )
    });

    const renderEmployees = employees.map(employee => {

        const {
            id,
            dob,
            lastName,
            firstName
        } = employee;

        return (
            <li key={ id }>
                <h2>First Name: {firstName}</h2>
                <h2>Last Name: {lastName}</h2>
                <p>BDay: {dob}</p>
            </li>
        )
    });


    return (
        <div className={classes.app}>

            {/*<ol>*/}
            {/*    { renderEmployees }*/}
            {/*</ol>*/}

            {/*<ul> {renderAlphabet}</ul>*/}
            {/*<ul> {renderAlphabetAndEmployees}</ul>*/}

        </div>
    );
};

export default App;
