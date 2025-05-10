import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from '../../redux/slices/authSlice'
import { Container } from "../../components/ui/Container"
import { Typo } from "../../components/ui/Typo"
import { Form } from "../../components/ui/Form"
import { Field } from "../../components/ui/Field"
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"

export const AuthPage = () => {
    const [formValues, setFormValues] = useState(
        {
            email: '',
            password: ''
        }
    )
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        try {           
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                alert('Данный пользователь не найден в системе')
                return
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)

            if (!currentUser) {
                alert('Данный пользователь не найден в системе')
                return
            }

            dispatch(login(currentUser))
            navigate('/posts')

        } catch (e) {
            console.log(e)
        }
        
    }

    const disabled = !formValues.email || !formValues.password

    return <Container>
        <Typo>Авторизация</Typo>
        <Form onSubmit={onSubmit} autoComplete="off">
            <Field>
                <Input
                    type="email"
                    name="email"
                    placeholder='E-mail'
                    value={formValues.email}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    autoComplete="off" />
            </Field>
            <Field>
                <Input
                    type="password"
                    name="password"
                    placeholder='Пароль'
                    value={formValues.password}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    autoComplete="off" />
            </Field>
            <Button type='submit' disabled={disabled}>Авторизация</Button>
        </Form>
    </Container>
}