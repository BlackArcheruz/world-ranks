import styles from './CountryTable.module.css'
import { KeyboardArrowDownRounded } from '@material-ui/icons'

const orderBy = (countries, direction)=>{
    if(direction === 'asc'){
        return countries.sort((a,b)=> a.population > b.population ? 1 : -1)
    }
    if(direction === 'desc'){
        return countries.sort((a,b)=> a.population > b.population ? -1 : 1)
    }
    return countries
}

const CountryTable = ({countries})=>{
    const orderedCountries = orderBy(countries, 'desc')

    return(
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name}>
                    <div color="inherit">Name</div>
                    <div className={styles.heading_arrow}>
                        <KeyboardArrowDownRounded color="inherit"/>
                    </div>
                </button>

                <button className={styles.heading_population}>
                    <div color="inherit">Population</div>
                    <div className={styles.heading_arrow}>
                        <KeyboardArrowDownRounded color="inherit"/>
                    </div>
                    
                </button>

                <button className={styles.heading_area}>
                    <div color="inherit">Area (km<sup style={{fontSize:'0.5rem'}}>2</sup>)</div>
                    <div className={styles.heading_arrow}>
                        <KeyboardArrowDownRounded color="inherit"/>
                    </div>
                </button> 
            </div>

            {countries.map(country=>(
            <div className={styles.row}>
                <div className={styles.name}>{country.name}</div>
                <div className={styles.population}>{country.population}</div>
                <div className={styles.area}>{country.area}</div>
            </div>
            ))}
        </div>
    )
}

export default CountryTable;