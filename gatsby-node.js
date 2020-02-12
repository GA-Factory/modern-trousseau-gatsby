/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const axios = require("axios");
// const path =
//   "https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg";
// const assetsPath =
//   "https://cdn.contentful.com/spaces/2n4rer1mpqy8/assets/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg";

// axios
//   .get(path, {})
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// axios
//   .get(assetsPath, {})
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// // exports.sourceNodes = async ({ actions }) => {
//     const { createNode } = actions;
//     return new Promise((resolve, reject) {
//         axios.get(`https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg`)
//     })
// }

//     const res = await fetchAllData;

//     res.data.results.map((allData, i) => {
//         const dataNode = {
//             id : `{i}`,
//             parent: null,
//             internal: {
//                 type: allContentfulGowns
//             },
//             children: [],
//             name: allData.name
//         }
//     })

// exports.sourceNodes = ({ action }) => {
//   const { createNode } = action;
//   return new Promise((resolve, reject) => {

//     axios
//       .get(
//         `https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg`
//       )
//       .then(res => {

//         res.data.results.map((gowns, i) => {
//           const userNode = {
//             id: `${i}`,
//             parent: `null`,
//             internal: {
//               type: `allContentfulGowns` 
//             },
//             children: [],
//             name: gowns.name
//           };
//         });
//         resolve();
//       });
//   });
// };
