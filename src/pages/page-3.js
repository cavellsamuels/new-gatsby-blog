import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the Third page</h1>
  </Layout>
)

export const Head = () => <Seo title="Page Three" />

export default ThirdPage
