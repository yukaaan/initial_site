import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ data }) => (
  <Layout>
      <ul>
        {data.allSitePage.edges.map(edge => (
          <li key={edge.node.id}>
            <a>{edge.node.id}</a>
          </li>
        ))}
      </ul>
  </Layout>
)

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          id
          
        }
      }
    }
  }
`
