import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from '../../../../redux/slices/postsSlice'

export const usePostsPagination = () => {
    const dispatch = useDispatch()
    const { currentPage, itemsPerPage } = useSelector((state) => state.posts.ui)

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page))
    }

    return { currentPage, itemsPerPage, handlePageChange }
}