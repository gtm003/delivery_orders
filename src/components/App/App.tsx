import React from 'react';
import './App.css';
import 'react-reflex/styles.css';

import Map from '../Map/Map';
import RequestsTable from '../Table/Table';

function App() {
    console.log('render App');

    return (
        <div className='app-container'>
            <RequestsTable />
            <Map />
        </div>
    );
}
export default App;
