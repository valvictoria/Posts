import { useSelector, useDispatch } from "react-redux";
import { setSort } from '../../../../redux/slices/postsSlice'

export const usePostsSort = () => {
    const dispatch = useDispatch()
    const sort = useSelector((state) => state.posts.ui.sort)

    const handleSortChange = (value) => {
        dispatch(setSort(value))
    }

    return { sort, handleSortChange }
}