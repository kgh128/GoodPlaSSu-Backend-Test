require('dotenv').config();

// config.js
module.exports = {
	app: {
		port: process.env.PORT,
		appName: process.env.APP_NAME,
	},
	db: {
		port: process.env.DB_PORT,
		database: process.env.DB_NAME,
		password: process.env.DB_PASS,
		username: process.env.DB_USER,
		host: process.env.DB_HOST,
		dialect: 'postgres',
		logging: true,
	},
};