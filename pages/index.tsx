import Container from '../components/container'
import PostsIndex from '../components/posts-index'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { TITLE } from '../lib/constants'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{ TITLE }</title>
        </Head>
          <Header />
        <Container>
          <Navbar />
          <PostsIndex posts={allPosts} />
          <Footer />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
