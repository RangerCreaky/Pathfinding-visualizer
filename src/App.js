import React from 'react';

import PathFinder from './pathfinder/PathFinder';
import './App.css';
/*

1. Create a 2D array
2. Each 2D array will be a node

    /
        SCHEMA OF THE 2D ARRAY
        [
            [{row , col} , {row , col} , {row , col}]
            [{row , col} , {row , col} , {row , col}]
            [{row , col} , {row , col} , {row , col}]
        ]
    /

*/
const App = () => {

    const clickhandler = () => {
        window.location.reload();
    }

    return (
        <div className='bodyWrapper'>
            <h4 className='heading'> Visualize the algorithms </h4>
            <div className='util'>
                <div> <input className='color' type="color" value={'#02030a'} disabled /> Wall</div>
                <div> <button onClick={clickhandler} className="utilButton"> clearBoard </button> </div>
            </div>
            <div className='main'>
                <PathFinder />
            </div>
        </div>

    )
}

export default App;