const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use('/api', express.Router)

app.use(errorHandler())

app.listen(PORT),
	() => {
		console.log(`Server is running at http://locahost:${PORT}`)
	}
