import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import Container from "../components/container.js"
import Sidebar from "../components/sidebar.js"

const PageTemplate = ({ data }) => {

    const title = data.wpPage.title
    return (
    <Layout>
        <SEO
        title={title}
        description={data.wpPage.excerpt}
        />
        <Container className="columns-1 lg:columns-2 py-[80px] lg:flex">
            <Sidebar className="mb-8 lg:mb-0" />
            <div className="w-full lg:w-3/4">
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="w-1/2" dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
            </div>
        </Container>
    </Layout>
)}

export default PageTemplate

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      excerpt
      content
    }
  }
`