import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch} from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm () {
    const dispatch = useDispatch()
    const nameId = useId()
    const phoneId = useId()

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values.username, values.phone))
        actions.resetForm()
    }

    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
        phone: Yup.string().min(3, "Too short").max(50, "Too long").required("Required")
      })
    return (
        <Formik initialValues={{
            username: "",
            phone: ""
          }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <label htmlFor={nameId} className={css.label}>Name</label>
                <Field type="text" name="username" id={nameId} className={css.input}/>
                <ErrorMessage className={css.error} name="username" component="span" />
                
                <label htmlFor={phoneId} className={css.label}>Phone</label>
                <Field type="tel" name="phone" id={phoneId} className={css.input}/>
                <ErrorMessage className={css.error} name="phone" component="span" />

                <button type="submit" className={css.button}>Add contact</button>
            </Form>
        </Formik>
    )
}