import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlice"
import { Typo } from "../../../components/ui/Typo"
import { Container } from "../../../components/ui/Container"
import { Link } from "../../../components/ui/Link"
import { DeleteButton } from "../../../components/ui/DeleteButton"
import { Loader } from "../../../components/ui/Loader"
import { CloseButton } from "../../../components/ui/CloseButton"
import { Modal } from '../../../components/ui/Modal'

import * as SC from './styles'

export const DetailPostPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const { user } = useSelector((state) => state.auth)

    const [postForDelete, setPostForDelete] = useState(null)

    const showEditAndDeleteBtn = list && user

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
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return (
            <Container>
                <Modal title={'Ошибка при загрузке данных'}>
                    <CloseButton onClick={() => navigate('/posts')}>К публикациям</CloseButton>
                </Modal>
            </Container>
        )
    }

    const { post } = postForView
    const image = post.image || 'https://img.freepik.com/premium-vector/cute-pembroke-welsh-corgi-dog-cartoon-vector-illustrationx9_42750-1332.jpg'

    return (
        <Container>
            {postForDelete &&
                <Modal title={`Вы точно уверены, что хотите удалить публикацию с ID - ${postForDelete.id}?`}>
                    <DeleteButton onClick={onDeletePost}>Да</DeleteButton>
                    <CloseButton onClick={() => setPostForDelete(null)}>Нет</CloseButton>
                </Modal>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }}></div>
            <SC.LinkWrapper>
                {list && <Link to='/posts'>Обратно к публикациям</Link>}
                {showEditAndDeleteBtn && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
                {showEditAndDeleteBtn && <DeleteButton onClick={() => setPostForDelete(post)}>Удалить пост</DeleteButton>}
            </SC.LinkWrapper>
        </Container>
    )
}