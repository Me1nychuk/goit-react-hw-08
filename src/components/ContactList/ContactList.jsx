import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.wrapper}>
      {visibleContacts &&
        visibleContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}

      {visibleContacts && visibleContacts.length === 0 && <p>List is empty</p>}
    </ul>
  );
};

export default ContactList;
