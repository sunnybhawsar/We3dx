module.exports = (sequelize, DataTypes) => {
  const Query = sequelize.define('Query', {
    email: DataTypes.STRING,
    query: DataTypes.STRING,
  })
  return Query
}
