import { useSelector } from "react-redux"
import ContactItem from "../ContactItem/ContactItem"
import { selectVisibleContacts } from "../../redux/selectors"
import css from "./ContactList.module.css"

export default function ContactList () {
    const contacts = useSelector(selectVisibleContacts)
    console.log(contacts)
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
            <li className={css.item} key={contact.id}>
                <ContactItem contact={contact} />
            </li>
            ))
            }
        </ul>
    )
}
