import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSideBar from "../components/postsidebar"
import Container from "../components/container"
import LatestPostContainer from "../components/LatestPostContainer"

const BlogCategoryTemplate = ({ data }) => {
  console.log(data.wpCategory.posts.nodes)

  return (
  <Layout>
    <SEO
      title={data.wpCategory.name}
      description={data.wpCategory.name}
    />
    <Container className="columns-1 lg:columns-2 py-[80px] lg:flex">
      <PostSideBar className="mb-8 lg:mb-0" />
      <div className="w-full lg:w-3/4">
        <h2 className="text-xl font-bold mb-4">{data.wpCategory.name}</h2>
        <div className="columns-1">
          {data.wpCategory.posts.nodes.length !== 0 ? (
            data.wpCategory.posts.nodes.map(post => (
              <LatestPostContainer post={post} />
            ))
          ) : (
            <p>暫未有文章</p>
          )}
        </div>
    </div>
    </Container>
    
    
  </Layout>
)}
export default BlogCategoryTemplate

export const query = graphql`
  query($id: String!) {
    wpCategory(id: { eq: $id }) {
        id
        name
        posts {
          nodes {
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
            slug
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
    }
  }
`