/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const axios = require("axios");

// Set Gatsby path up to be used by .createPages
const path = require('path')

// Using Node's module export, Gatsby adds in a createPages factory 
exports.createPages = ({ actions }) => {
   
  // We setup the createPage function takes the data from the actions object
  const { createPage } = actions

  // Setup a promise to build pages from contentful data model for gowns
  return new Promise((resolve, reject) => {
    
    // Setup destination component for the data
    const mockComponent = path.resolve('src/components/mockComponent.js')
    resolve(
        axios
        .get(
          `https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg&content_type=gowns`
        ).then((result) => {

        // Now we loop over however many gowns Contentful sent back
        result.data.items.forEach((gowns) => {
          console.log(gowns)
          createPage ({
            path: `/gowns/${gowns.fields.slug}`,
            component: mockComponent,
            context: {
              id: gowns.fields.id,
              name: gowns.fields.name,
              gownImage: gowns.fields.gownImage,
              details: gowns.fields.details,
              silhouette: gowns.fields.silhouette,
              accessories: gowns.fields.accessories,
              collections: gowns.fields.collections,
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
