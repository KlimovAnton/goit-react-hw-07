import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading)
  const error = useSelector(state => state.contacts.error)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <b>Loading contacts...</b>}
      <ContactList />
      {error && <b>Error...</b>}
    </>
  )
}
