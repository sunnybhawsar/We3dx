module.exports = (sequelize, DataTypes)=>{
 const Position = sequelize.define('Position', {
  position: DataTypes.STRING,
  details: DataTypes.STRING
 })
 return Position
}