/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios')
const path = "https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/"


axios.get(path, {
    params: {
        access_token: "zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg",
        select: "fields.name, fields.category",
        content_type: "Gowns"
    }
})
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });


https://cdn.contentful.com/spaces/2n4rer1mpqy8/entries/?access_token=zmHoMF9Kow4AAaDPjwNMu5-BNtdMiVJ_yrC9K1RHFyg

& select=fields.name & content_type=Gown