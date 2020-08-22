import { useField } from 'formik'
import styled from 'styled-components'
import { useHasMounted } from '../utils/useHasMounted'

const Checkbox = ({ label, name }: { label?: string; name: string }) => {
  const mounted = useHasMounted()
  const [field, , { setValue }] = useField({ name, type: 'checkbox' })

  // Check if app has mounted to fix hydration issue on checkbox
  return !mounted ? null : (
    <Container>
      <HiddenInput id={name} {...field} />
      <Box checked={field.value} onClick={() => setValue(!field.value)}>
        <Check src="/images/check.svg" alt="check" />
      </Box>
      {label ? (
        <Label htmlFor={name} onClick={() => setValue(!field.value)}>
          {label}
        </Label>
      ) : null}
    </Container>
  )
}

export default Checkbox

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 3rem;
`
const HiddenInput = styled.input`
  display: none;
`

const Box = styled.span<any>`
  padding: 4px;
  margin-right: 0.75rem;
  width: 10px;
  height: 10px;
  border: 1px solid #b2afb1;
  border-radius: 3px;
  transition: 0.23s ease-in-out;

  ${(props) =>
    props.checked
      ? `
    background-color: #37a9e0;
    border: 1px solid #37a9e0;

    img {
      opacity: 1;
    }
  `
      : ''}
`

const Check = styled.img`
  display: block;
  opacity: 0;
  transition: 0.23s ease-in-out;
  color: #fff;
`

const Label = styled.label`
  color: #777
  font-size: 0.9rem;
`
