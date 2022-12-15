import React from 'react'
import {v4 as uuidv4} from "uuid";
import { Country } from './Country';

export const Countries = (props) => {
    return (
        <div>
            {props.c.map((country)=>{
                const countryNew ={country, id:uuidv4()}

                return <Country createCountry {...countryNew} key={countryNew.id}/>
            })}
        </div>
    )
}
