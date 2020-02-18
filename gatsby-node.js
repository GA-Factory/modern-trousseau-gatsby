const axios = require("axios");
const path = require('path')

exports.createPages = ({ actions }) => {
   

  const { createPage } = actions

  return new Promise((resolve, reject) => {

    const mockComponent = path.resolve('src/components/mockComponent.js')
    resolve(
        axios
        .get(
          `https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg&content_type=gowns`
        ).then((result) => {

        result.data.items.forEach((gowns) => {
          createPage ({
            path: `/gowns/${gowns.fields.slug}`,
            component: mockComponent,
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
      })

      .catch((errors) => {
        console.log(errors)
        reject(errors)
      })
    ) 
  }) 
}
// return new Promise((resolve, reject) => {



//   const mockComponent = path.resolve('src/components/mockComponent.js')
//   resolve(
//       axios
//       .get(
//         `https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg&content_type=store`
//       ).then((result) => {

//       result.data.items.forEach((store) => {
//         createPage ({
//           path: `/store/${store.fields.slug}`,
//           component: mockComponent,
//           context: {
//             name: store.fields.name,
//             streetAddress: store.fields.streetAddress,
//             city: store.fields.city,
//             state: store.fields.state,
//             zip: store.fields.zip,
//             phoneNumber: store.fields.phoneNumber,
//           }
//         })
//       })
//     })

//     .catch((errors) => {
//       console.log(errors)
//       reject(errors)
//     })
//   ) 
// }) 
// }


