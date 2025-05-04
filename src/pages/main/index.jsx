import { Posts } from "../../components/Posts"
import { Container } from '../../components/Container'
import { Typo } from "../../components/Typo"

const INITIAL_POST = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://sun9-68.userapi.com/impg/YCk3zPhjcR5tYsaQgvtmpS_vTyrVw9hj1ZaHmA/JmmB6hLj-kg.jpg?size=1200x900&quality=95&sign=1b196aedcab485a81ecbe69f82e23230&c_uniq_tag=fJn82SNyrZy04qXwWPN00_RTcl1-SacQ8jWUETQBZPo&type=album'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://sun9-68.userapi.com/impg/YCk3zPhjcR5tYsaQgvtmpS_vTyrVw9hj1ZaHmA/JmmB6hLj-kg.jpg?size=1200x900&quality=95&sign=1b196aedcab485a81ecbe69f82e23230&c_uniq_tag=fJn82SNyrZy04qXwWPN00_RTcl1-SacQ8jWUETQBZPo&type=album'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://sun9-68.userapi.com/impg/YCk3zPhjcR5tYsaQgvtmpS_vTyrVw9hj1ZaHmA/JmmB6hLj-kg.jpg?size=1200x900&quality=95&sign=1b196aedcab485a81ecbe69f82e23230&c_uniq_tag=fJn82SNyrZy04qXwWPN00_RTcl1-SacQ8jWUETQBZPo&type=album'
    },
]

export const MainPage = () => {
    return (
        <>
            <Container>
                <Typo>Свежие публикации</Typo>
                <Posts posts={INITIAL_POST} />
            </Container> 
        </>
    )
}