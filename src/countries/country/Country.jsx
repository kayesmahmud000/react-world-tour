import { useState } from 'react';
import './country.css' 

const Country = ({country}) => {
    console.log(country)
    const {name, flags, area, capital, languages, population}=country;
    const languageArray=[]
    for (const key in languages) {
        const obj ={
            name:languages[key]

        }
        languageArray.push(obj)
    }
    const [isVisit, setVisit]=useState(false);
    const handleVisit = ()=>{
        setVisit(!isVisit)
    }
    
    return (
        <div className='country'>
            <h5>Name: {name?.common}</h5>
            <img src={flags?.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Population:{population}</small></p>
            <p><small>Capital: {capital}</small></p>
            <p><small>Language:{languageArray.map(item=><p>{item?.name}</p>)}</small></p>
            <button onClick={handleVisit}>{isVisit? 'Visited': 'Going'}</button>

        </div>
    );
};

export default Country;