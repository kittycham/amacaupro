/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const BlogCategoryTemplate = path.resolve("./src/templates/BlogCategory.js")

  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
            id
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
      allWpPage {
        edges {
          node {
            slug
            id
            uri
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const BlogPosts = result.data.allWpPost.edges
  BlogPosts.forEach(post => {
    const category = post.node.categories.nodes[0].name
    createPage({
      path: `/${category}/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
  const Pages = result.data.allWpPage.edges
  Pages.forEach(page => {
    createPage({
      path: `${page.node.uri}`,
      component: PageTemplate,
      context: {
        id: page.node.id,
      },
    })
  })
  const Categories = result.data.allWpCategory.edges
  Categories.forEach(categoryItem => {
    createPage({
      path: `/${categoryItem.node.name}`,
      component: BlogCategoryTemplate,
      context: {
        id: categoryItem.node.id,
      },
    })
  })
}