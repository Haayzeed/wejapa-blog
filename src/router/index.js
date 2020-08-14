import blogs from '../components/blogs'
import viewBlogs from '../components/viewBlogs'

export const routes = [
    {
      name: 'blogs',
      path: '/',
      component: blogs
    },
    {
      name: 'viewBlogs',
      path: '/viewBlogs/:id',
      component: viewBlogs
    }
  ]