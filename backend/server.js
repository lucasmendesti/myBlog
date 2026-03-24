const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const posts = require("./postRoutes")
const users = require("./userRoutes")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json()) //with this we dont need to keep using parse everytime
app.use(posts)
app.use(users)

connect.connectToServer().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
