const {Position} = require('../models')
//const EmailController = require('./EmailController')

module.exports = {

 async index(req, res){
  try{
   const positions = await Position.findAll({

   })
   res.status(200).send(positions)
  }
  catch(err) {
   return res.status(500).send({
    error: 'Server error'
   })
  }
 },

 async post (req, res) {
    try{  
    const position = await Position.create(req.body)
    res.status(200).send(position)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const position = await Position.findById(req.params.positionId)
      if(!position)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(position)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const position = await Position.update(req.body,{
        where: {
          id: req.params.positionId
        }
      })
      if(position==0)
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
    console.log('Kuch bhi')
    try{
      const position = await Position.destroy({
        where: {
          id: req.params.positionId
        }
      })
      if(position==0)
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