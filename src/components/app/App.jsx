import React, { useState } from 'react';

import classes from './app.module.scss';

const App = () => {
    const storage = window.localStorage;
    const [ state, setState ] = useState([]);


    const toFetch = () => {
        fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            .then(data => data.text()
            )
            .then(data => setState(JSON.parse(data)));
    };


    if (!storage.getItem('employees')) {
        console.log('bingo');
        toFetch();
        storage.setItem('employees', JSON.stringify(state))
    }

    // console.log(JSON.parse(storage.getItem('employees')));

    const arrOfResults = JSON.parse(storage.getItem('employees'));

    console.log('=> arrOfResults :=> ', arrOfResults);

    console.log('state => ', state);

    const renderEmployees = arrOfResults.map(employee => {

        const {
            id,
            firstName,
            lastName,
            dob
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

            <ol>
                { renderEmployees }
            </ol>

        </div>
    );
};

export default App;
