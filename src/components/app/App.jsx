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

    console.log(JSON.parse(storage.getItem('employees')));

    console.log('state => ', state);

    return (
        <div className={classes.app}>

        </div>
    );
};

export default App;
