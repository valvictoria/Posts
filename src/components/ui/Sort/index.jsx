import * as SC from './styles'

export const Sort = ({ value, onChange }) => {
    return (
        <SC.SortContainer>
            <SC.SortLabel>Сортировать</SC.SortLabel>
            <SC.SortSelect 
                value={value} 
                onChange={onChange}
            >
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </SC.SortSelect>
        </SC.SortContainer>
    )
}