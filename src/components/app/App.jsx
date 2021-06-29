import React, { useState } from 'react';

import classes from './app.module.scss';

import {
    getData,
    storage
} from "../../helpers/helpers";
import {URL_API} from "../../helpers/constants";

const App = () => {

    const [ state, setState ] = useState([]);

    if (!storage.getItem('employees') || storage.getItem('employees') === '[]') {
        getData(URL_API, setState);
        storage.setItem('employees', JSON.stringify(state))
    }

    const renderEmployees = JSON.parse(storage.getItem('employees')).map(employee => {

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

            <ol>
                { renderEmployees }
            </ol>

        </div>
    );
};

export default App;
