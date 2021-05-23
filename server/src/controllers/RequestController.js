const {Request} = require('../models')

module.exports = {

	async index(req, res){
		try{
			const requests = await Request.findAll({

			})
			res.status(200).send(requests)
		}
		catch(err) {
			return res.status(500).send({
				error: 'Server error'
			})
		}
	},

	async post (req, res) {
    try{  
      const request = await Request.create(req.body)     
	res.status(200).send(request)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const request = await Request.findById(req.params.requestId)
      if(!request)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(request)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const request = await Request.update(req.body,{
        where: {
          id: req.params.requestId
        }
      })
      if(request==0)
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
      const request = await Request.destroy({
        where: {
          id: req.params.requestId
        }
      })
      if(request==0)
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