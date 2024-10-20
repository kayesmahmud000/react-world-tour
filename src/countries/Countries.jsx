import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/country";
import './countries.css'




const Countries = () => {
    const [countries, setCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))

    },[])

    return (
        <div>
            <h2>I am tour today  {countries.length} countries in react </h2>
          <div className="countries">
          {
                countries.map(country=><Country key={country.ccn3} country={country}></Country>)
            }
            </div> 
        </div>
    );
};

export default Countries;