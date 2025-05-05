import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 6,
      title: 'Post 6',
      image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt suscipit non eligendi fuga expedita nostrum omnis eaque veritatis reprehenderit'
    },
    {
      id: 5,
      title: 'Post 5',
      image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt suscipit non eligendi fuga expedita nostrum omnis eaque veritatis reprehenderi'
    },
    {
      id: 4,
      title: 'Post 4',
      image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt suscipit non eligendi fuga expedita nostrum omnis eaque veritatis reprehenderit'
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt suscipit non eligendi fuga expedita nostrum omnis eaque veritatis reprehenderit'
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt suscipit non eligendi fuga expedita nostrum omnis eaque veritatis reprehenderit'
    },
    {
      id: 1,
      title: 'Post 1',
      image: 'https://hvost.news/upload/medialibrary/9b6/krested_svinka.jpg',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt suscipit non eligendi fuga expedita nostrum omnis eaque veritatis reprehenderit'
    },
  ],
  postForView: null,
  freshPosts: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload
    },
    editPost: (state, action) => {

    },
    getPost: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload)

    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3)
    },
    addPost: (state, action) => {

    }
  },
})

export const { setPosts, editPost, getPost, getFreshPosts, addPost } = postsSlice.actions

export default postsSlice.reducer