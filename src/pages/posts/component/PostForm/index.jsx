import { useState } from "react"
import { Container } from "../../../../components/ui/Container"
import { Typo } from "../../../../components/ui/Typo"
import { Form } from "../../../../components/ui/Form"
import { Field } from "../../../../components/ui/Field"
import { Input } from "../../../../components/ui/Input"

import * as SC from './styles'

const DEFAULT_VALUES = { title: '', body: '' }


export const PostForm = ({ title, onSubmitForm, defaultValues }) => {
    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES)

    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(formValues)
        !defaultValues && setFormValues(DEFAULT_VALUES)
    }
    
    const disabled = !formValues.title || !formValues.body

    return (
        <Container>
            <Typo>{title}</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text"
                        name="title"
                        placeholder='Заголовок поста'
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)} />
                </Field>
                <Field>
                    <SC.Textarea
                        name="body"
                        placeholder="Текст"
                        value={formValues.body}
                        rows={10}
                        cols={39}
                        onChange={(e) => onChange(e.target.name, e.target.value)} />
                </Field>
                <SC.Button type="submit" disabled={disabled}>Опубликовать</SC.Button>
            </Form>
        </Container>
    )
}