import styles from './styles/Home.module.css'
import Layout from './components/Layout'
import { SearchInput } from './components/SearchInput/SearchInput'
import CountryTable from './components/CountryTable/CountryTable'

export default function Home({countries}) {
  return (
    <Layout>
      <div className={styles.count}>Found {countries.length} Countries</div>
      <SearchInput placeholder="Filter By Name, Region or Subregion"/>
      <CountryTable countries={countries}/>
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