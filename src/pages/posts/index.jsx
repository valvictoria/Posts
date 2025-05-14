import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPosts } from "../../redux/slices/postsSlice"
import { Container } from "../../components/ui/Container"
import { Posts } from "../../components/Posts"
import { Typo } from '../../components/ui/Typo'
import { Loader } from '../../components/ui/Loader'
import { Modal } from "../../components/ui/Modal"
import { CloseButton } from "../../components/ui/CloseButton"
import { Filter } from "../../components/ui/Filter"
import { Pagination } from "../../components/ui/Pagination"
import { Sort } from "../../components/ui/Sort"
import { Wrapper } from "../../components/ui/Wrapper"

export const PostsPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { list, loading } = useSelector((state) => state.posts.posts)

    const [currentPage, setCurrentPage] = useState(1)
    const [filteredPosts, setFilteredPosts] = useState('')
    const [sortPosts, setSortPosts] = useState('asc')

    const quantityPerPage = 9


    const filteredAndSortedPost = list ?
        list
            .filter((post) => post.title.toLowerCase().includes(filteredPosts.toLowerCase()))
            .sort((a, b) => {
                if (sortPosts === 'asc') {
                    return a.title.localeCompare(b.title) // Сортировка по возрастанию (А-Я)
                } else {
                    return b.title.localeCompare(a.title) // Сортировка по убыванию (Я-А)
                }
            })
        : []

    const totalPages = Math.ceil(filteredAndSortedPost.length / quantityPerPage)

    const lastIndexPostsCurrentPage = currentPage * quantityPerPage
    const firstIndexPostsCurrentPage = lastIndexPostsCurrentPage - quantityPerPage
    const postsOnCurrentPage = filteredAndSortedPost.slice(
        firstIndexPostsCurrentPage,
        lastIndexPostsCurrentPage
    )

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    const onFilterChange = (e) => {
        setFilteredPosts(e.target.value)
        setCurrentPage(1)
    }

    const onSortChange = (e) => {
        setSortPosts(e.target.value)
    }

    useEffect(() => {
        if (!list) {
            dispatch(getPosts())
        }
    }, [list, dispatch])

    if (!list && loading) {
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    if (!list) {
        return (
            <Container>
                <Modal title={'Ошибка'}>
                    <CloseButton onClick={() => navigate('/main')}>На главную</CloseButton>
                </Modal>
            </Container>
        )
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Wrapper>
                <Filter
                    placeholder={'Введите название'}
                    value={filteredPosts}
                    onChange={onFilterChange}
                />
                <Sort
                    value={sortPosts}
                    onChange={onSortChange}
                />
            </Wrapper>
            <Posts posts={postsOnCurrentPage} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </Container>
    )
}