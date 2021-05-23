module.exports = (sequelize, DataTypes)=>{
	const Hiring = sequelize.define('Hiring', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    position: DataTypes.STRING,
    experience: DataTypes.STRING,
    resumeUrl: DataTypes.STRING
	})
	return Hiring
}