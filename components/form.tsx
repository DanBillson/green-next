import { Formik, Form } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import Input from './input'
import Checkbox from './checkbox'
import Button from './button'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide a valid email')
    .required('Please provide an email'),
})

const LoginForm = ({ isLoading, ...props }: any) => {
  return (
    <Formik validationSchema={schema} validateOnChange={false} {...props}>
      <Form>
        <Input label="Email Address" name="email" />
        <Checkbox label="Remember this device" name="remember" />
        <Button type="submit">
          {isLoading ? (
            <Spinner src="/images/spinner.svg" alt="loading spinner" />
          ) : (
            'Sign In'
          )}
        </Button>
      </Form>
    </Formik>
  )
}

export default LoginForm

const Spinner = styled.img`
  width: 20px;
  height: 20px;
`
