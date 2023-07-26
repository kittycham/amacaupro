import { useStaticQuery, graphql } from "gatsby";

export const useLatestPostQuery = () => {
    const data = useStaticQuery(graphql`
        {
            allWpPost(sort: {date: DESC}) {
            nodes {
                author {
                node {
                    name
                }
                }
                content
                slug
                id
                link
                uri
                title
                date(formatString: "MMMM DD, YYYY")
                excerpt
                categories {
                nodes {
                    name
                }
                }
            }
            }
            allWpCategory {
            nodes {
                id
                name
            }
            }
        }
    `)
    return data;
}