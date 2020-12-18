import React from 'react';

const Callapi = () => {
    fetch("http://localhost:3000/todo").then((result)=>{
        result.json().then((resp)=>{
            console.log(resp);
        })
    })
    return (
        <div>
            <h1>Call An Api</h1>
        </div>
    );
};

export default Callapi;