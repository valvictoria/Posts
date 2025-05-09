import { Outlet } from "react-router-dom";
import { Container } from '../ui/Container'
import * as SC from "./styles";

export const Root = () => {
    return (
        <>
            <Container>
                <SC.Menu>
                    <SC.MenuItem to={'/'}>Главная</SC.MenuItem>
                    <SC.MenuItem to={'/posts'}>Список постов</SC.MenuItem>
                    <SC.MenuItem to={'/posts/add'}>Добавление поста</SC.MenuItem>
                    <SC.MenuItem to={'/auth'}>Авторизация</SC.MenuItem>
                    <SC.MenuItem to={'/registration'}>Регистрация</SC.MenuItem>
                </SC.Menu>
            </Container>
            <Outlet />
        </>
    )
}
