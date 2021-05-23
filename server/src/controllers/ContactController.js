const {Contact} = require('../models')
//const EmailController = require('./EmailController')

module.exports = {

	async index(req, res){
		try{
			const contacts = await Contact.findAll({

			})
			res.status(200).send(contacts)
		}
		catch(err) {
			return res.status(500).send({
				error: 'Server error'
			})
		}
	},

	async post (req, res) {
    try{  
      const contact = await Contact.create(req.body)
 /*     EmailController.sendQueryToUser(query)
      EmailController.sendQueryToAdmin(query)
*/      
	res.status(200).send(contact)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const contact = await Contact.findById(req.params.contactId)
      if(!contact)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(contact)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const contact = await Contact.update(req.body,{
        where: {
          id: req.params.contactId
        }
      })
      if(contact==0)
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
      const contact = await Contact.destroy({
        where: {
          id: req.params.contactId
        }
      })
      if(contact==0)
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