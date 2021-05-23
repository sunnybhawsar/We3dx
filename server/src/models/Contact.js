module.exports = (sequelize, DataTypes)=>{
	const Contact = sequelize.define('Contact', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
    contact: DataTypes.STRING,
    subject: DataTypes.STRING,
		text: DataTypes.STRING
	})
	return Contact
}