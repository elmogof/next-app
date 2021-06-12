import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllCommentIds, getCommentData } from '../../lib/comments'

export default function Comment({ commentData }) {
  const { item } = commentData
  // console.log(item)
  return (
    <Layout>
      <Head>
        <title>{item[0].name}</title>
      </Head>
      {item.map(({ id, name, user_comment }) => {
        return (
          <article key={id}>
            <h1 className={utilStyles.headingX1}>{name}</h1>
            {user_comment}
          </article>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const commentData = await getCommentData(params.id)
  return {
    props: {
      commentData,
    },
  }
}

export async function getStaticPaths() {
  const paths = await getAllCommentIds()

  return {
    paths,
    fallback: false,
  }
}
