import api from './index.js'
import findAvalaiblePort from './free-port.js'
const port = process.env.PORT ?? 3000

findAvalaiblePort(port).then((port) => {
  api.listen(port, () => {
    console.log(`API is listening on port http://localhost:${port}`)
  })
})
