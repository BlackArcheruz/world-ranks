import styles from './CountryTable.module.css'
import React, {useState} from 'react';
import Link from 'next/link'
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@material-ui/icons'

const orderBy = (countries, value, direction)=>{
    if (direction === "asc") {
        return countries.sort((a, b) => (a[value] > b[value] ? 1 : -1));
      }
    
      if (direction === "desc") {
        return countries.sort((a, b) => (a[value] > b[value] ? -1 : 1));
      }
    
      return countries;
}

const SortArrow = ({direction})=>{
    if(!direction){
        return <></>
    }

    if(direction === 'desc'){
        return(
            <div className={styles.heading_arrow}>
                        <KeyboardArrowDownRounded color="inherit"/>
                    </div>
        )
    }else{
        return(
            <div className={styles.heading_arrow}>
                        <KeyboardArrowUpRounded color="inherit"/>
                    </div>
        )
    }


}

const CountryTable = ({countries})=>{
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();
    const orderedCountries = orderBy(countries,value, direction);

    const switchDirection = ()=>{
        if(!direction){
            setDirection('desc');
        }else if(direction === 'desc'){
            setDirection('asc');
        }else{
            setDirection(null);
        }
    }
    const setValueAndDirection = (value)=>{
        switchDirection();
        setValue(value);
    }

    return(
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name} onClick={()=>setValueAndDirection("name")}>
                    <div color="inherit">Name</div>
                    <SortArrow direction = {direction}/>
                </button>

                <button className={styles.heading_population} onClick={()=>setValueAndDirection("population")}>
                    <div color="inherit">Population</div>
                    <SortArrow direction = {direction}/>
                    
                </button>

                <button className={styles.heading_area} onClick={()=>setValueAndDirection("area")}>
                    <div color="inherit">Area (km<sup style={{fontSize:'0.5rem'}}>2</sup>)</div>
                    <SortArrow direction = {direction}/>
                </button> 
            </div>

            {countries.map(country=>(
                <div>
                <Link href={`/country/${country.alpha3Code}`}>
            <div className={styles.row} >
                <div className={styles.name}>{country.name}</div>
                <div className={styles.population}>{country.population}</div>
                <div className={styles.area}>{country.area}</div>
            </div>
            </Link>
            </div>
            ))}
        </div>
    )
}

export default CountryTable;