import { usePostsPagination } from './hooks/usePostsPagination'
import * as SC from './styles'

export const Pagination = ({ totalPages }) => {
    const { currentPage, handlePageChange } = usePostsPagination()

    const getVisiblePages = () => {
        const visiblePages = [];
        const maxVisible = 3;
        let start = Math.max(1, currentPage - 1)
        let end = Math.min(totalPages, start + maxVisible - 1)

        if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1)
        }

        for (let i = start; i <= end; i++) {
            visiblePages.push(i)
        }

        return visiblePages
    }

    const numberPage = () => {
        const visiblePages = getVisiblePages()

        return visiblePages.map(page => (
            <SC.PageButton
                key={page}
                $active={page === currentPage}
                onClick={() => handlePageChange(page)}
            >
                {page}
            </SC.PageButton>
        ))
    }

    return (
        <SC.PaginationWrapper>
            {currentPage > 2 && (
                <SC.ArrowButton
                    onClick={() => handlePageChange(1)}>
                    ❮❮
                </SC.ArrowButton>
            )}
            <SC.ArrowButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                ❮
            </SC.ArrowButton>

            {numberPage()}

            <SC.ArrowButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}>
                ❯
            </SC.ArrowButton>
            {
                currentPage < totalPages - 1 && (
                    <SC.ArrowButton
                        onClick={() => handlePageChange(totalPages)}>
                        ❯❯
                    </SC.ArrowButton>
                )
            }
        </SC.PaginationWrapper>
    )
}