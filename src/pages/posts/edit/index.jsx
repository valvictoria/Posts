import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PostForm } from '../component/PostForm'
import { editPost } from '../../../redux/slices/postsSlice'

export const EditPostPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)

    if (!list) {
        return <>Пост не найден</>
    }

    const findedPost = list.find((item) => item.id === Number(id))

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
        navigate('/posts')
    }

    return (
        <PostForm title={`Редактирование поста - ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPost}/>
    )
}