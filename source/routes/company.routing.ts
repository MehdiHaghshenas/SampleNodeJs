import express from "express"
import companycontroler from "../controllers/CompanyController"
const companyRouter = express.Router()

companyRouter.get("/company", companycontroler.getAllCompany)

companyRouter.get("/company/:id", companycontroler.getCompany)
// sampleRouter.put("/posts/:id", controller.updatePost)
// sampleRouter.delete("/posts/:id", controller.deletePost)
// sampleRouter.post("/posts", controller.addPost)

export default companyRouter
