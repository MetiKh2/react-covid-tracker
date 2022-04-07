import axios from "axios";

const url="https://covid19.mathdro.id/api";

export const fetchData =async (country) => {
    let changableUrl=url;
    if(country){
        changableUrl=`${url}/countries/${country}`;
    }

  try {
      const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changableUrl);
       return {
           confirmed,
         recovered,
         deaths,
         lastUpdate
       }
  }
  catch (e) {

  }
}
export const fetchDailyData = (callback) => {
    axios.get(`${url}/daily`).then(res=>{
        callback(true,res.data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date })))
    }).catch(err=>{
        callback(false,err.message)
    });
};

export const fetchCountries=(callback)=>{
     axios.get(`${url}/countries`).then(res=>{
        callback(true,res.data.countries)
    }).catch(err=>{
        callback(false,err.message)
    });
}
