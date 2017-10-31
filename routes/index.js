const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', async (req, res) => {
  let error, balance
  const address = req.query.address
  const userJustLanded = address !== undefined
  const api = `https://api.blockcypher.com/v1/eth/main/addrs/${address}/balance`

  if (userJustLanded) {
    if (address) {
      try {
        balance = (await axios.get(api)).data.balance
      } catch (e) {
        error = `Address "${address}" was not recognized!`
      }
    } else {
      error = 'Address is required!'
    }
  }

  res.render('index', {
    address,
    balance,
    error,
  })
})

module.exports = router
