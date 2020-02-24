const axios = require("axios");
const path = require('path'); // gatsby path up to be used by .createPages

// Using Node's module export, Gatsby adds in a createPages factory 
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // Use await to get all the gowns via Axios
  const allGowns = await axios.get(`https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg&content_type=gowns`)

  // Loop over all the gowns, however many we get from contentful
  allGowns.data.items.forEach((gowns) => {
    createPage ({
      path: `/gowns/${gowns.fields.slug}`,
      component: path.resolve('src/components/mockComponent.js'),
      context: {
        name: gowns.fields.name,
        gownImage: gowns.fields.gownImage,
        details: gowns.fields.details,
        silhouette: gowns.fields.silhouette,
        accessories: gowns.fields.accessories,
        collections: gowns.fields.collections,
      }
    })
  })

  // axios call for stores
  const allStores = await axios.get(`https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg&content_type=store`)

  // Output each store
  allStores.data.items.forEach((store) => {
    createPage ({
      path: `/store/${store.fields.slug}`,
      component: path.resolve('src/components/mockComponent.js'),
      context: {
        name: store.fields.name,
        streetAddress: store.fields.streetAddress,
        city: store.fields.city,
        state: store.fields.state,
        zip: store.fields.zip,
        phoneNumber: store.fields.phoneNumber,
      }
    })
  })

}


