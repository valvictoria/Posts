import { Link } from '../../../Link'
import * as SC from './styles'

export const Post = ({ post }) => {
    const image = post.image || 'https://lapkins.ru/upload/iblock/401/40164de2367cfa4761592b2b57ec0fac.jpg'
    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
}