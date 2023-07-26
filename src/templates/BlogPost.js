import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSideBar from "../components/postsidebar"
import Container from "../components/container"
import Hero from "../components/hero"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wpPost.title}
      description={data.wpPost.excerpt}
    />
    <Container className="columns-1 lg:columns-2 py-[80px] lg:flex">
      <PostSideBar className="mb-8 lg:mb-0" />
      <div className="w-full lg:w-3/4">
        <h1 className="text-xl font-bold">{data.wpPost.title}</h1>
        <p className="mb-4 text-gray-400">
          By {data.wpPost.author.node.name} | {data.wpPost.date} | {data.wpPost.categories.nodes[0].name}
        </p>
        <div
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
        />
      </div>
    </Container>
    
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
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
`