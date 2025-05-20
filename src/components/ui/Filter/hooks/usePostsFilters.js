import { useSelector, useDispatch } from "react-redux";
import { setFilter } from '../../../../redux/slices/postsSlice'

export const usePostsFilter = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.posts.ui.filter)

    const handleFilterChange = (value) => {
        dispatch(setFilter(value))
    }

    return { filter, handleFilterChange }
}