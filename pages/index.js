import styles from './styles/Home.module.css'
import Layout from './components/Layout'
import { SearchInput } from './components/SearchInput/SearchInput'
import CountryTable from './components/CountryTable/CountryTable'
import { useState } from 'react'


export default function Home({countries}) {
  const [keyword, setKeyword] = useState("")
  const filteredCountries = countries.filter(country=>(country.name.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword) || country.subregion.toLowerCase().includes(keyword)))
  return (
    <Layout>
      <div className={styles.count}>Found {countries.length} Countries</div>
      <SearchInput placeholder="Filter By Name, Region or Subregion" onChange={e=>setKeyword(e.target.value.toLowerCase())}/>
      <CountryTable countries={filteredCountries}/>
    </Layout>
  )
}

export const getStaticProps = async ()=>{
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  return {
    props:{
      countries
    }
  }
}