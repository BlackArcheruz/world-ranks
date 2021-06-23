import styles from './SearchInput.module.css';
import SearchRounded from '@material-ui/icons/SearchRounded'

export const SearchInput = ({...res})=>{
    return(
        <div className={styles.wrapper}>
            <SearchRounded color="inherit"/>
            <input className={styles.input} {...res}/>
        </div>
    )
}