import * as SC from './styles'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getVisiblePages = () => {
        const visiblePages = [];
        const maxVisible = 3; 
        let start = Math.max(1, currentPage - 2)
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
                onClick={() => onPageChange(page)}
            >
                {page}
            </SC.PageButton>
        ))}

    return (
        <SC.PaginationWrapper>
            <SC.ArrowButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                ❮
            </SC.ArrowButton>

            {numberPage()}

            <SC.ArrowButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}>
                ❯
            </SC.ArrowButton>
       </SC.PaginationWrapper>
    )
}