const server = require('server')
const { get } = server.router
const { json, status } = server.reply

const getBuiltPackageStats = require('./src/getPackageStats')
const {
  getPackageExportSizes,
  getAllPackageExports,
} = require('./src/getPackageExportSizes')

// Check effector
getBuiltPackageStats('effector', { debug: false })

/*
server({ port: 3000 }, [
  get('/size', async ctx => {
    const packageString = decodeURIComponent(ctx.query.p)

    try {
      const result = await getBuiltPackageStats(packageString, { debug: !!ctx.query.debug })
      return json(result)
    } catch (err) {
      console.log(err)
      return status(500).send({
        statusCode: 500,
        body: JSON.stringify(err),
      })
    }
  }),
  get('/export-sizes', async ctx => {
    const packageString = decodeURIComponent(ctx.query.p)

    try {
      const result = await getPackageExportSizes(packageString, { debug: !!ctx.query.debug })
      return json(result)
    } catch (err) {
      console.log(err)
      return status(500).send({
        statusCode: 500,
        body: JSON.stringify(err),
      })
    }
  }),
  get('/exports', async ctx => {
    const packageString = decodeURIComponent(ctx.query.p)

    try {
      const result = await getAllPackageExports(packageString, { debug: !!ctx.query.debug })
      return json(result)
    } catch (err) {
      console.log(err)
      return status(500).send({
        statusCode: 500,
        body: JSON.stringify(err),
      })
    }
  }),
])
*/
