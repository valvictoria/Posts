import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Typo } from "../../../components/ui/Typo"
import { Container } from "../../../components/ui/Container"
import { Link } from "../../../components/ui/Link"
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlice"

import * as SC from './styles'

export const DetailPostPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)

    const [postForDelete, setPostForDelete] = useState(null)

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))
        setPostForDelete(null)
        navigate('/posts')
    }

    useEffect(() => {
        const intId = Number(id)

        const findedPost = list ? list.find((item) => item.id === intId) : undefined

        if (findedPost) {
            dispatch(showPost(findedPost))
        } else {
            dispatch(getPostById(intId))
        }
    }, [id, list, dispatch])

    if (postForView.loading) {
        return <Container>Loading...</Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <Container>Пост не найден</Container>
    }

    const { post } = postForView
    const image = post.image || 'https://img.freepik.com/premium-vector/cute-pembroke-welsh-corgi-dog-cartoon-vector-illustrationx9_42750-1332.jpg'

    return (
        <Container>
            {postForDelete && <SC.ModalWrapper>
                <SC.Modal>
                    <SC.ModalText>Вы точно уверены, что хотите удалить публикацию с ID - {postForDelete.id}?</SC.ModalText>
                    <SC.ModalContent>
                        <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                        <SC.NoButton onClick={() => setPostForDelete(null)}>Нет</SC.NoButton>
                    </SC.ModalContent>
                </SC.Modal>
            </SC.ModalWrapper>}
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }}></div>
            <SC.LinkWrapper>
                {list && <Link to='/posts'>Обратно к публикациям</Link>}
                {list && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
                <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить пост</SC.DeleteButton>
            </SC.LinkWrapper>
        </Container>
    )
}