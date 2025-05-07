import { useState } from "react"
import { Container } from "../../../../components/Container"
import { Typo } from "../../../../components/Typo"

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
            <SC.Form onSubmit={onSubmit}>
                <SC.Field>
                    <SC.Input
                        type="text"
                        name="title"
                        placeholder='Заголовок поста'
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)} />
                </SC.Field>
                <SC.Field>
                    <SC.Textarea
                        name="body"
                        placeholder="Текст"
                        value={formValues.body}
                        rows={10}
                        cols={39}
                        onChange={(e) => onChange(e.target.name, e.target.value)} />
                </SC.Field>
                <SC.Button type="submit" disabled={disabled}>Опубликовать</SC.Button>
            </SC.Form>
        </Container>
    )
}