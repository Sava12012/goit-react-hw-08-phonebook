import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Wrapper, Label, Btn, FormEl, InputEl } from './RegisterForm.styled';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ErrorMsg } from 'components/ContactForm/ContactForm.styled';
import { ToastContainer } from 'react-toastify';

const schema = Yup.object().shape({
  username: Yup.string().min(2).max(70).required(),
  email: Yup.string().email('Not valid email'),
  password: Yup.string().min(8, 'Password is to short').max(21, 'Password is to long'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    // values.preventDefault();
    console.log('user log out');
    dispatch(
      register({
        name: e.username,
        email: e.email,
        password: e.password,
      })
    );
    // resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <FormEl>
          <>
            <Wrapper>
              <Label htmlFor="username">Username</Label>
              <InputEl type="text" name="username" id="username" />
              <ErrorMsg name="username" component="div" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="email">Email</Label>
              <InputEl type="email" name="email" id="email" />
              <ErrorMsg name="email" component="div" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="password">Password</Label>
              <InputEl type="password" name="password" id="password" />
              <ErrorMsg name="password" component="div" />
            </Wrapper>
            <Btn type="submit">Register</Btn>
          </>
        </FormEl>
      </Formik>
      <ToastContainer />
    </>
  );
};
