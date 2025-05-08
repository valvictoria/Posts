import { Link } from '../../../Link'
import * as SC from './styles'

export const Post = ({ post }) => {
    const image = post.image || 'https://img.freepik.com/premium-vector/cute-pembroke-welsh-corgi-dog-cartoon-vector-illustrationx9_42750-1332.jpg'
    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
}