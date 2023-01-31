import logo from './logo.svg';
import './App.css';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { useEffect, useState } from 'react';
import Hello from './Hello';


function App() {
    // useState
    const [count, setCount] = useState(10);

    useEffect(() => {
        console.log("UseEffect çalıştı");
    }, [count]);

    const increaseNumber = () => {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* self close tag */}
                <Hello />
                <button onClick={increaseNumber}>Click me!</button>
                <p>
                    {count}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
