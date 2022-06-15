import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../components/app.css';
import axios from 'axios';

function App() {

    const [advice, setAdvices] = useState("hello! click here to get valuable advice");

    function fatchadvice() {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => {

                setAdvices(response.data.slip.advice);
            })
            .catch((err) => {
                console.log(err);
            });


    }
    // setAdvices(advice +  " " + "mc");
    return (
        <div className="App">
            <div className="card">

                <h1 className="adviceh1">{advice}</h1>
                <button className="button-78" role= "button" onClick={fatchadvice}> <span>Give me an Advice!</span></button>

            </div>
                <p className="footer"> created with ❤️ by @Om Tamboli</p>
        </div>
    );
}
export default App;


