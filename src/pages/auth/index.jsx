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
import { Modal } from '../../components/ui/Modal'
import { CloseButton } from "../../components/ui/CloseButton"

export const AuthPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState(
        {
            email: '',
            password: ''
        }
    )
    const [modalActive, setModalActive] = useState(false)
    const [message, setMessage] = useState('')
    
    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        try {           
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                setModalActive(true)
                setMessage('Данный пользователь не найден в системе')
                return
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)

            if (!currentUser) {
                setModalActive(true)
                setMessage('Данный пользователь не найден в системе')
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
        {modalActive && (
            <Modal title={message}>
                <CloseButton onClick={() => setModalActive(false)}>Закрыть</CloseButton>
            </Modal>
        )}
    </Container>
}