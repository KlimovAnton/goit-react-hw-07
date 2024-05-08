import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContacts } from "../../redux/contactsOps";
import { selectIsLoading, selectError } from "../../redux/selectors";


export default function App() {
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

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
