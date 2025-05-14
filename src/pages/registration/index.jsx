import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typo } from '../../components/ui/Typo'
import { Container } from '../../components/ui/Container'
import { Input } from '../../components/ui/Input'
import { Form } from '../../components/ui/Form'
import { Field } from '../../components/ui/Field'
import { Button } from '../../components/ui/Button'
import { Modal } from '../../components/ui/Modal'
import { CloseButton } from '../../components/ui/CloseButton'

export const RegistrationPage = () => {
    const navigate = useNavigate()
    const userId = Date.now()

    const [formValues, setFormValues] = useState(
        {   
            name: '', 
            surname: '', 
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
            const newUser = { id: userId, ...formValues }

            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]))
                setModalActive(true)
                setMessage('Вы успешно зарегистрировались')
                navigate('/auth')            
                return
            } 

            if (users.find((user) => user.email === formValues.email)) {
                setModalActive(true)
                setMessage('Пользователь с таким E-mail уже существует')
                return
            }

            users.push(newUser)

            localStorage.setItem('users', JSON.stringify(users))

            setModalActive(true)
            setMessage('Вы успешно зарегистрировались')
            navigate('/auth')
        } catch (e) {
            console.log(e)
        }
    }

    const disabled = !formValues.email || !formValues.password

    return (
        <Container>
            <Typo>Регистрация</Typo>
            <Form onSubmit={onSubmit} autoComplete="off">
                <Field>
                    <Input
                        type="text"
                        name="name"
                        placeholder='Имя'
                        value={formValues.name}
                        onChange={(e) => onChange(e.target.name, e.target.value)} />
                </Field>
                <Field>
                    <Input
                        type="text"
                        name="surname"
                        placeholder='Фамилия'
                        value={formValues.surname}
                        onChange={(e) => onChange(e.target.name, e.target.value)} />
                </Field>
                <Field>
                    <Input
                        type="email"
                        name="email"
                        placeholder='E-mail'
                        value={formValues.email}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        autoComplete="off"/>
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
                <Button type='submit' disabled={disabled}>Регистрация</Button>
            </Form>
            {modalActive && (
                <Modal title={message}>
                    <CloseButton onClick={() => setModalActive(false)}>Закрыть</CloseButton>
                </Modal>
            )}
        </Container>
    )
}