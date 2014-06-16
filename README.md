### cloud-one

A POC to show how to create a visual studio project that houses the angular seed and deploys on github.io. The site hits another project (cloud) which is a vs.net webapi/sql server/mongo serivices project published to azure web sites and sql database. 

The idea is to have the free msdn azure bucks support webapi serivces tied to sql server and free mongolab, then have multiple free github.io angular spas hitting the service. All would be free (with the $200/mo from msdn for azure).

Had to cut corners on this and "fake" the build (just created a dist directory manually) as didn't want to spend the time required to learn the ins and outs of angular-seed grunt as I'm thinking the yo cg-angular generator may be more appropriate. Left out testing as well, but no obstacles in that from what I could see.

The dkServiceUrl.js file is a bit of a hack, i.e. how to switch between local service and azure? The elegant solution would be to generate index.html on the fly using some scripting technology (razor or such). Didn't want to resort to this though, as it demands so much more of the server, whereas html/css/js will run anywhere. In the end, I simply look for the page's location.host and if dankahle.github.io, then hit azure, otherwise hit local with a hardcoded cloudservice virtual directory (in iis). For CORS, I have the service set the Access-Control-Allow-Origin response header for dankahle.github.io on azure and "*" locally.


