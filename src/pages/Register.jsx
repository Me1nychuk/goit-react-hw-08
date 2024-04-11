
import {  useDispatch} from "react-redux";

import RegisterForm from "../components/RegisterForm/RegisterForm";
import {apiRegisterUser} from "../redux/auth/operations"





const Register = () => {

  const dispatch = useDispatch();
  const onRegister = (formData) =>{
   dispatch(apiRegisterUser(formData));
  }

  return (
    <RegisterForm onRegister={onRegister}/>
  );
};

export default Register;
