import express from 'express'
import User from './models/User.js'
import Product from './models/Product.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger.js'

const env = process.env.NODE_ENV || 'dev'

let envFile = `.env.${env}`;

dotenv.config({ path: envFile })

console.log(`🔧 Carregando configurações de ${envFile}`);

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
User.init(sequelize)
Product.init(sequelize)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/users', userRoutes)
app.use('/products', productRoutes)

sequelize.authenticate().then(() => {
    console.log("BD Conectado!")
    app.listen(3000, () => {
        console.log('Servidor ON!')
    })
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err)
})


