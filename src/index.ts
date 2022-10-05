import express, {Request, Application} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

import { config } from '../node_modules/dotenv/lib/main'
config({ path: path.join(__dirname, 'config/.env') })

/* Port */
const PORT = process.env.PORT || 3003

/* App  */
const app:Application = express()

/* Parse Body */
app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({limit: '30mb', 'extended': true}))

/* Cors */
app.use(cors<Request>());

/* Router */
import routes from "./routers"
app.use('/', routes)

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});

