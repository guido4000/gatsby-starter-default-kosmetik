import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default Image;

// https://github.com/gatsbyjs/gatsby/tree/master/examples/using-gatsby-image
// https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e
// https://codebushi.com/using-gatsby-image/

/*
{ allImageSharp 
  { edges 
    { node 
      {
        original
       		{ src width height} 
        
        fluid
        	{ src srcSet sizes}
        
        fixed (width: 350)
        	{ src width}
        
        resize (width: 350 ) { originalName src}
      }
    }
  }
}
*/

/*
query {
  imageOne: file(relativePath: {eq: "astro"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  }
}
*/
