import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "../stylesheets/blog.module.css"

const BlogPage = function BlogPage() {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>I love Blogs!!</h1>
      <ol className={blogStyles.blogList}>
        {posts.allMarkdownRemark.edges.map(element => {
          return (
            <li key={element.node.fields.slug} className={blogStyles.post}>
              <Link
                to={`/blog/${element.node.fields.slug}`}
                className={blogStyles.blogLink}
              >
                <h3 className={blogStyles.blogTitle}>
                  {element.node.frontmatter.title}
                </h3>
                <h4 className={blogStyles.blogDate}>
                  {element.node.frontmatter.date}
                </h4>
                <p className={blogStyles.excerpt}>{element.node.excerpt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
