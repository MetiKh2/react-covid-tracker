import {Cards, Chart, CountryPicker} from "./components";
import styles from './index.module.css'
import {useEffect, useState} from "react";
import {fetchData} from "./api";
import MyChart from "./components/Chart/MyChart";
import image from './images/image.png'
function App() {
    const [data,setData]=useState({})
    const [country,setCountry]=useState('')
    useEffect(async ()=>{
        const data=await fetchData(country)
        console.warn(data)
        setData(data)
    },[country])
    const onChangeCountry = (country) => {
        console.log(country)
        setCountry(country)
    }
  return (
    <div className={styles.container}>
       <div style={{textAlign:'center'}}>
           <img src={image} className={styles.image}/>
       </div>
        <Cards data={data}/>
      <CountryPicker onChangeCountry={onChangeCountry}/>
        <MyChart data={data} country={country}/>
    </div>
  );
}

export default App;
