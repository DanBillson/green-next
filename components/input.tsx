import { useField } from 'formik'
import styled from 'styled-components'

const Input = ({ label, name }: { label?: string; name: string }) => {
  const [field, { error }] = useField(name)

  return (
    <Container>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <TextInput id={name} {...field} />
      {error ? <Error>{error}</Error> : null}
    </Container>
  )
}

export default Input

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: #777;
  font-weight: 300;
`

const TextInput = styled.input`
  padding: 0.85rem;
  margin: 0.25rem 0 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-family: inherit;
`

const Error = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  width: fit-content;
  font-size: 0.75rem;
  color: #fff;
  border-radius: 6px;
  background-color: #e67f25;
`
