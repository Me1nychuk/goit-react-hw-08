import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import PropTypes from "prop-types";
import { apiDeleteUserContact } from "../../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteUserContact(contact.id));
  return (
    <li className={css.mainWrapper}>
      <div className={css.textWrapper}>
        <div>
          {" "}
          <FaUser /> {contact.name}
        </div>
        <div>
          {" "}
          <FaPhone /> {contact.number}
        </div>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
