import React, {useEffect, useState} from 'react';
import "../App.css";

const Tempapp = () => {

    const[city , setCity] = useState(null);
    const[sear , setSear] = useState("Varanasi");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${sear}&units=metric&appid=917f41195cc8a37392f0faf86c4daabd`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main)
        }

        fetchApi();
    }, [sear])

    return (
        <>
            <div className="App">
                <h1>Temp APP</h1>
                <input style={{fontSize:"30px" , padding:"10px" , textAlign: "center" , fontFamily: "cursive" , borderRadius: "15px" , letterSpacing: "5px"}}
                type="search" value={sear} onChange={(event) => {setSear(event.target.value)}} />
            </div>

        {!city ? (
            <p>No Data Found</p>
        ) : (
            <div className="App">
                <h2 style={{color: "royalblue" , fontSize: "50px" , letterSpacing: "10px" , textTransform: "capitalize"}}>{sear}</h2>
                <h1>{city.temp}°Cel</h1>
                <h3>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
            </div>
        )

        }

        </>
    );
};

export default Tempapp;