import axios from 'axios'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import createPersistedState from 'use-persisted-state'
import Form from './form'

const useStoredLogin = createPersistedState('login')

interface FormValues {
  email: string
  remember: boolean
}

const initialValues = {
  email: '',
  remember: false,
}

const login = (email: string) => axios.post('/api/login', { data: { email } })

const Modal = () => {
  const [loginDetails, setLoginDetails] = useStoredLogin(initialValues)
  const [mutate, { isLoading }] = useMutation(login)

  return (
    <Container>
      <Logo src="/images/logo.svg" alt="green logo" />
      <Title>Example login screen</Title>
      <Subtitle>Getting started with Green.</Subtitle>
      <Form
        isLoading={isLoading}
        initialValues={loginDetails.remember ? loginDetails : initialValues}
        onSubmit={(values: FormValues) => {
          setLoginDetails(values)
          mutate(values.email)
          // navigate away
        }}
      />
    </Container>
  )
}

export default Modal

const Container = styled.div`
  padding: 2rem 1.5rem;
  width: 90%;
  max-width: 600px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  border-radius: 2px;
  letter-spacing: -0.5px;
`

const Logo = styled.img`
  width: 150px;
`

const Title = styled.h1`
  color: #4c494b;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const Subtitle = styled.h4`
  color: #b2afb1;
  font-weight: 300;
  margin: 0 0 3rem;
`
