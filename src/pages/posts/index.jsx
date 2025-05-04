import { Container } from "../../components/Container"
import { Posts } from "../../components/Posts"
import { Typo } from '../../components/Typo'

const INITIAL_POST = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg'
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg'
    },
    {
        id: 5,
        title: 'Post 5',
        image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg'
    },
    {
        id: 6,
        title: 'Post 6',
        image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg'
    },
]

export const PostsPage = () => {
    return (
        <>
            <Container>
                <Typo>Публикации</Typo>
                <Posts posts={INITIAL_POST} />
            </Container>
        </>
    )
}