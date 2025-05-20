import { usePostsSort } from './hooks/usePostsSort'
import * as SC from './styles'

export const Sort = () => {
    const { sort, handleSortChange } = usePostsSort()
    return (
        <SC.SortContainer>
            <SC.SortLabel>Сортировать</SC.SortLabel>
            <SC.SortSelect 
                value={sort} 
                onChange={(e) => handleSortChange(e.target.value)}
            >
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </SC.SortSelect>
        </SC.SortContainer>
    )
}