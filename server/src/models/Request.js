module.exports = (sequelize, DataTypes) =>{
	const Request = sequelize.define('Request', {
		project_description: DataTypes.STRING,
		address: DataTypes.STRING,
		sourceofinfo: DataTypes.STRING,
		contactinfo: DataTypes.STRING
	})
	return Request
}