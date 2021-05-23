const htmlToText  = require('html-to-text')
const {Blog} = require('../models')
//const EmailController = require('./EmailController')

module.exports = {

  async index(req, res){
    console.log(req.params.page)
    try{
      const blogs = await Blog.findAll({
        attributes: ['id', 'title', 'color', 'overview', 'createdAt', 'updatedAt']
      })
      res.status(200).send(blogs)
    }
    catch(err) {
      return res.status(500).send({
        error: 'Server error'
      })
    }
  },

  async post (req, res) {
    //console.log(req.body)
    var body = {
      title: req.body.title,
      color: req.body.color,
      overview: htmlToText.fromString(req.body.content, {
        wordwrap: 130
      }),
      content: req.body.content
    }
    try{  
      const blog = await Blog.create(body)
 /*     EmailController.sendQueryToUser(query)
      EmailController.sendQueryToAdmin(query)
*/      
  res.send(blog)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const blog = await Blog.findById(req.params.blogId)
      if(!blog)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(blog)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    console.log(req.body)
    var body = {
      title: req.body.title,
      color: req.body.color,
      overview: htmlToText.fromString(req.body.content, {
        wordwrap: 130
      }),
      content: req.body.content
    }
    try{
      const blog = await Blog.update(body,{
        where: {
          id: req.params.blogId
        }
      })
      if(blog==0)
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
      const blog = await Blog.destroy({
        where: {
          id: req.params.blogId
        }
      })
      if(blog==0)
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