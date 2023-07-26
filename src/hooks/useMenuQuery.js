import { useStaticQuery, graphql } from "gatsby";

export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allWpPage(sort: {uri: ASC}) {
                nodes {
                    id
                    parentId
                    uri
                    title
                    link
                    wpChildren {
                        nodes {
                            id
                            slug
                            uri
                            link
                            ... on WpPage {
                            title
                            }
                        }
                    }
                }
            }
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return data;
}