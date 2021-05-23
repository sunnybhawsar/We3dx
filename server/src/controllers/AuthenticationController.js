const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const EmailController = require('./EmailController')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    try{
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: `This email is already registered
        ${err}`
      })
    }
  },
  async login(req, res) {
    try{
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if(!user) {
        return res.status(403).send({
          error: 'Wrong email/password'
        })
      }

      const isPasswordValid = await user.comparePassword(password)

      if (!isPasswordValid) {
        return res.status(403).send({
          error: `Wrong email/password`
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })

    } catch (err) {
      return res.status(500).send({
          error: 'Connection Error'
        })
    }
  },

  async forgot(req, res) {
    try {
      const response = await EmailController.forgot(req.body.email)
      res.send(response)
    }
    catch(err) {
      res.status(500).send(err)
    }
  },

  async reset(req, res) {
    console.log(req.body)
    try{
      const user = await User.findOne({
        where: {
          password: req.body.token
        }
      })
      if(user==0)
        res.status(404).send({
          error: 'No such user'
        })
      user.update({password: req.body.password})
      res.status(200).send(req.body.password)
    } catch (err) {
        return res.status(500).send({
          error: 'Server Error (Update Failed)' +err
        })
    }
  } 
}