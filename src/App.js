import React,{useState,useEffect} from 'react';
import { Countries } from './components/Countries';
import { Search } from './components/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const fetchData = async(url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data)
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
    
  }
  useEffect(() => {
    fetchData(url)
  },[]);
  const handelSearch = (searchValue) =>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    });
    setFilteredCountries(newCountries);
  }
  return <>
    <Search onSearch={handelSearch}/>
    <h1>Country App</h1>
    {isLoading && <h2>Loading...</h2>}
    {error && <h2>{error.message}</h2>}
    {countries && <Countries c={filteredCountries}/>}
  </>
}

export default App;
