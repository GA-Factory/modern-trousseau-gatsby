/**
 * Implement Gatsby's Node APIs in this file.
 *
 * ######################################################
 * BIG CASE STUDY BACKEND CODE
 * ######################################################
 * 
 * We are using the .createPages part of the Gatsby Node API: https://next.gatsbyjs.org/docs/node-apis/#createPages 
 * What this does is dynamically create pages (surprise) based on the data you feed into it
 * 
 * Feed the contentful API call into the promise
 * Here I'm calling BigCaseStudy, which is a custom content type set up in contentful
 * This is briefly explained over here: https://www.gatsbyjs.org/packages/gatsby-source-contentful/
 * 
 * Also, note the caseStudyIntro field is long text `markdown`
 * Gatsby returns the long text field as an object
 * Calling it's name inside of the object returns the HTML
 * Read more here: https://github.com/gatsbyjs/gatsby/issues/3205
 */
// Set Gatsby path up to be used by .createPages
const path = require('path')
// Using Node's module export, Gatsby adds in a createPages factory 
exports.createPages = ({ actions }) => {
   
  // We setup the createPage function takes the data from the actions object
  const { createPage } = actions
  // Setup a promise to build pages from contentful data model for bigCaseStudies
  return new Promise((resolve, reject) => {
    // Setup destination component for the data
    const mockComponent = path.resolve('src/components/mockComponent.js')
    resolve(
        axios
        .get(
          `https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg&content_type=gowns`
        ).then((result) => {
        // Now we loop over however many caseStudies Contentful sent back
        result.data.items.contentType.sys.id.forEach((gowns) => {
          let matchedGowns = result.data..filter(
            contentfulGowns => 
              contentfulGowns.node.bigCaseStudyReference.id === gowns.node.id 
          )
          createPage ({
            path: `src/components/mockComponent.js`,
            component: mockComponent,
            context: {
              id: gowns.node.id,
              name: gowns.node.name,
              slug: gowns.node.slug,
              gownImage: gowns.node.gownImage,
              details: gowns.node.details,
              silhouette: gowns.node.silhouette,
              accessories: gowns.node.accessories,
              collections: gowns.node.collections,
              designer: gowns.node.designer,
              designer: gowns.node.designer,
              designerQuote: gowns.node.designerQuote,
              designerImage: gowns.node.designerImage,
            }
          })
        })
      })
      // This is the error handling for the calls
      .catch((errors) => {
        console.log(errors)
        reject(errors)
      })
        
    ) // close resolve handler
  }) // close promise
}

