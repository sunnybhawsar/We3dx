const {Query} = require('../models')
//const EmailController = require('./EmailController')

module.exports = {
  async index (req, res) {
    try{
      const queries = await Query.findAll({
        limit: 10
      })
      res.status(200).send(queries)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Fetch Failed)'
        })
    }
  },

  async post (req, res) {
    try{
      const query = await Query.create(req.body)
     // EmailController.sendQueryToUser(query)
     // EmailController.sendQueryToAdmin(query)
      res.status(200).send(query)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const query = await Query.findById(req.params.queryId)
      if(!query)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(query)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const query = await Query.update(req.body,{
        where: {
          id: req.params.queryId
        }
      })
      if(query==0)
        res.status(404).send({
          error: 'No such data'
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
      const query = await Query.destroy({
        where: {
          id: req.params.queryId
        }
      })
      if(query==0)
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