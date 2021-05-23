module.exports = (sequelize, DataTypes)=>{
	const Blog = sequelize.define('Blog', {
		title: DataTypes.STRING,
    color: DataTypes.STRING,
    overview: DataTypes.STRING,
		content: DataTypes.TEXT('medium')
	})
	return Blog
}