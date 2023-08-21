import react from 'react';
import ReactDOM from 'react-dom/client';
import Entry from './src/Entry';

import axios from './node_modules/axios/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));


  
 
async function funcName() {
    let requestOptions = {
        method: 'GET', 
    }

    try {
        const response = await fetch("http://localhost:2375/version", requestOptions);
        const data = await response.json();
        console.log(data)
        // Rest of your code using 'data'
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}



        funcName()
root.render(<Entry />);
