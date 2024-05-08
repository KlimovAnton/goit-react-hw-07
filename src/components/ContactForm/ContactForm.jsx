import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm () {
    const dispatch = useDispatch()
    const nameId = useId()
    const phoneId = useId()

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm()
    }

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
        number: Yup.string().min(3, "Too short").max(50, "Too long").required("Required")
      })
    return (
        <Formik initialValues={{
            name: "",
            number: ""
          }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <label htmlFor={nameId} className={css.label}>Name</label>
                <Field type="text" name="name" id={nameId} className={css.input}/>
                <ErrorMessage className={css.error} name="name" component="span" />
                
                <label htmlFor={phoneId} className={css.label}>Phone</label>
                <Field type="tel" name="number" id={phoneId} className={css.input}/>
                <ErrorMessage className={css.error} name="number" component="span" />

                <button type="submit" className={css.button}>Add contact</button>
            </Form>
        </Formik>
    )
}