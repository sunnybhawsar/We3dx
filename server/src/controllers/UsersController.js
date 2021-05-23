const {User} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const users = await User.findAll({
        limit: 10
      })
      res.status(200).send(users)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Fetch Failed)'
        })
    }
  },

  async post (req, res) {
    try{
      const user = await User.create(req.body)
      res.status(200).send(user)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const user = await User.findById(req.params.userId)
      if(!user)
        res.status(404).send({
          error: 'No such data'
        })
      console.log(user)
      res.status(200).send(user)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const user = await User.update(req.body,{
        where: {
          id: req.params.userId
        }
      })
      if(user==0)
        res.status(404).send({
          error: 'No such user'
        })
      res.status(200).send(req.body)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Update Failed)'
        })
    }
  },

  async delete (req, res) {
    try{
      const user = await User.destroy({
        where: {
          id: req.params.userId
        }
      })
      console.log(req.params.userId)
      if(user==0)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send({
        success: 'Sucessfully Deleted'
      })
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Update Failed)'
        })
    }
  }
}