import { usePostsFilter } from './hooks/usePostsFilters'
import * as SC from './styles'

export const Filter = ({ placeholder }) => {
    const { filter, handleFilterChange } = usePostsFilter()
    return (
        <SC.FilterWrapper>
            <SC.FilterInput 
                placeholder={placeholder}
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)} />                
        </SC.FilterWrapper>
    )
}