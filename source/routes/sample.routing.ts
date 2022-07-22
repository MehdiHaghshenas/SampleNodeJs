import express from "express"
import controller from "../controllers/sample"
const sampleRouter = express.Router()

sampleRouter.get("/posts", controller.getPosts)
sampleRouter.get("/posts/:id", controller.getPost)
sampleRouter.put("/posts/:id", controller.updatePost)
sampleRouter.delete("/posts/:id", controller.deletePost)
sampleRouter.post("/posts", controller.addPost)

export default sampleRouter
