import React, {useEffect, useState} from 'react';
import {FormControl, NativeSelect} from "@mui/material";
import styles from './ContryPicker.module.css'
import {countries, fetchCountries} from "../../api/index";

const CountryPicker = ({onChangeCountry}) => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetchCountries((isOk,data)=>{
            if(isOk) {setCountries(data)
             }
            else console.error(data)
        })
    },[])

    return (
        <div style={{textAlign:'center',marginBottom:'1rem'}}>
            <FormControl className={styles.formControl}>
                <NativeSelect onChange={(e)=>onChangeCountry(e.target.value)} defaultValue={''}>
                    <option value={''}>Global</option>
                    {countries?.map((country,i)=>{
                       return <option key={i} value={country.name}>{country.name}</option>
                    })}
                </NativeSelect>
            </FormControl>
         </div>
    );
};

export default CountryPicker;