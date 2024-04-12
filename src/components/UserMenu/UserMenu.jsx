import css from "./UserMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";

const UserMenu = () => {
  const userName = useSelector(selectUserData).name;
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <div className={css.flexBlock}>
      <p className={css.flexText}>Welcome, {userName}</p>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
