import {useRouter} from 'next/router'

const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  
    const country = await res.json();
  
    return country;
};

const Country = ({country})=>{
    const router = useRouter();
    const {id} = router.query;
    return(
        <div>{id}</div>
    )
}

export default Country
