import http from "http"
import express, { Express } from "express"
import morgan from "morgan"
import sampleRouter from "./routes/sample.routing"
import swaggerUi from "swagger-ui-express"
import fs from "fs"

const outputFile = "swagger_output.json"

console.log("Current directory:", __dirname);

try {
    if (!fs.existsSync(__dirname + "/" + outputFile)) {
        fs.writeFileSync(__dirname + "/" + outputFile, "{}")
    }
} catch (err) {
    console.error(err)
}

const swaggerFile = require('./swagger_output.json')
const router: Express = express()

/** Logging */
router.use(morgan("dev"))
/** Parse the request */
router.use(express.urlencoded({ extended: false }))
/** Takes care of JSON data */
router.use(express.json())

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header("Access-Control-Allow-Origin", "*")
    // set the CORS headers
    res.header(
        "Access-Control-Allow-Headers",
        "origin, X-Requested-With,Content-Type,Accept, Authorization"
    )
    // set the CORS method headers
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST")
        return res.status(200).json({})
    }
    next()
})
/* agg swagger */
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile))

/** Routes */
router.use("/", sampleRouter)

/** Error handling */
router.use((req, res, next) => {
    const error = new Error("not found")
    return res.status(404).json({
        message: error.message,
    })
})

/** Server */
const httpServer = http.createServer(router)
const PORT: any = process.env.PORT ?? 6060
httpServer.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`)
)
