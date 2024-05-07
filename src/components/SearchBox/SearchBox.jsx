import { useDispatch, useSelector } from "react-redux"
import css from "./SearchBox.module.css"
import { filtersSlice } from "../../redux/filtersSlice"

export default function SearchBox () {

    const dispatch = useDispatch()
    const selectNameFilter  = (evt) => dispatch(filtersSlice(evt.target.value))
    
    return  (
        <div className={css.searchContainer}>
            <label className={css.label}>Find contacts by name</label>
            <input className={css.input} type="text" onChange={selectNameFilter} />
        </div>
    )
}