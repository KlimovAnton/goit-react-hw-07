import { useSelector } from "react-redux"
import ContactItem from "../ContactItem/ContactItem"
import css from "./ContactList.module.css"

export default function ContactList () {

    const items = useSelector(state => state.contacts.items)
    console.log(items)
    // const value = useSelector(state => state.filters.name)

    // const showContact = contacts.filter((contact) =>
    //     contact.name.toLowerCase().includes(value.toLowerCase()));

    return (
        <ul className={css.list}>
            {items.map((contact) => (
            <li className={css.item} key={contact.id}>
                <ContactItem contact={contact} />
            </li>
            ))
            }
        </ul>
    )
}
