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

    const { filter, sort, currentPage, itemsPerPage } = useSelector((state) => state.posts.ui)

    const filteredAndSortedPost = list ?
        list
            .filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()))
            .sort((a, b) => {
                if (sort === 'asc') {
                    return a.title.localeCompare(b.title) 
                } else {
                    return b.title.localeCompare(a.title) 
                }
            })
        : []

    const totalPages = Math.ceil(filteredAndSortedPost.length / itemsPerPage)

    const lastIndexPostsCurrentPage = currentPage * itemsPerPage
    const firstIndexPostsCurrentPage = lastIndexPostsCurrentPage - itemsPerPage
    const postsOnCurrentPage = filteredAndSortedPost.slice(
        firstIndexPostsCurrentPage,
        lastIndexPostsCurrentPage
    )

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
                <Filter placeholder={'Введите название'}/>
                <Sort/>
            </Wrapper>
            <Posts posts={postsOnCurrentPage} />
            <Pagination totalPages={totalPages} />
        </Container>
    )
}