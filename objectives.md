## Node

- Student can create an index.js file
- Student can run a javascript file using node
- Student can run a javascript file using nodemon
- Student can describe that node is the V8 javascript engine
- Student can require and use other files in node

## Servers

- Student can describe the role of servers in a client-server model
- Student can identify the parts of code that listen to external requests

## NPM

- Student can npm init
- Student can npm install
- Student can npm install --save
- Student can describe the role of a package.json file
- Student can describe the purpose of the node_modules folder
- Student can .gitignore node_modules

## Express

- Student can install and require express
- Student can start a basic express server by creating an app and listening on a port
- Student can write the handler function with the correct parameters req, res and next
- Student can access url parameters on req.params
- Student can set up an endpoint path to expect multiple params
- Student can use req.query
- Student can send data back with res.send and res.json
- Student can set a status code with res.status

---

params
typically stand for a particular resource looks like a normal path on the fronend

backend example:
params denoted with a "`:`"

```js
app.get("/api/:id");
```

acess params in endpoint function handler:

```js
req.params.id;
```

**query**
typically used to manipulate/search data being accessed

server instructions
mkdir server
touch index.js .gitignore
npm init -y
add node_modules => git.ignore
npm i express
require express
declare app variable set = to express()
declare a port
app.listen => port
declare endpoint
method - get
path'/apii....'
handler => (req, res, next) => data to send
