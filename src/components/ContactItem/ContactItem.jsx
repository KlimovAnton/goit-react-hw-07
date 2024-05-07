import { useDispatch, useSelector } from "react-redux"
import css from "./ContactItem.module.css"
import { deleteContact } from "../../redux/contactsSlice"

export default function ContactItem ({ contact: { id, name, number }})  {
    
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(id))
    return (
        <>
            <div>
                <p className={css.text}>
                    {name}
                </p>
                <p className={css.text}>
                    {number}
                </p>
            </div>
            <div>
                <button className={css.button} type="button" onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}