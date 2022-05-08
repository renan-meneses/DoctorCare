import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'
import { router } from './routes'
import { PinoAdapter } from './telemetry'
import cors from 'cors'

const app = express()
const pinoAdapter = new PinoAdapter()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    const [error, httpCode] = err.message.split('::')

    response.status(+httpCode).json({
      error,
      statusCode: httpCode
    })
  }
)

app.listen(3333, () =>
  pinoAdapter.info('Server running at http://localhost:3333')
)
