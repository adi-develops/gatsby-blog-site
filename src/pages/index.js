// Pages created in the src/pages directory use the name of the file as the route for the page.
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// The Gatsby Link component provides a performance feature called preloading.
// This means that the resources for the linked page are requested when the link scrolls into view or when the mouse hovers on it.
// That way, when the user actually clicks on the link, the new page can load super quickly.

// Use the Link component for linking between pages within your site.
// For external links to pages not created by your Gatsby site, use the regular HTML <a> tag.

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src='../images/clifford.webp'
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
      />
      </Layout>
  )
}

// You can use the Gatsby Head API by exporting a named function called Head in your pages and page templates
export const Head = () => <title>Home Page</title>

export default IndexPage