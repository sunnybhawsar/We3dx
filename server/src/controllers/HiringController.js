const {Hiring} = require('../models')


module.exports = {

	async index(req, res){
		try{
			const hirings = await Hiring.findAll({

			})
			res.status(200).send(hirings)
		}
		catch(err) {
			return res.status(500).send({
				error: 'Server error'
			})
		}
	},

	async post (req, res) {
    //console.log(req.body)
    try{  
      const hiring = await Hiring.create(req.body)      
      res.status(200).send(hiring)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const hiring = await Hiring.findById(req.params.hiringId)
      if(!hiring)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(hiring)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const hiring = await Hiring.update(req.body,{
        where: {
          id: req.params.hiringId
        }
      })
      if(hiring==0)
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
      const hiring = await Hiring.destroy({
        where: {
          id: req.params.hiringId
        }
      })
      if(hiring==0)
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