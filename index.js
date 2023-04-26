
const jsonServer = require('json-server')

//create json server app
const server = jsonServer.create()

// set up path for db.json
const router = jsonServer.router('db.json')
//returns middle ware used by json server
const middleware = jsonServer.defaults()

//set up port
const port = process.env.PORT || 4000

//user router , middleware in server
server.use(middleware)
server.use(router)

//app listen
server.listen(port,()=>{
    console.log("server is listening at port 4000")
})