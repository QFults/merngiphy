const router = require('express').Router()
const axios = require('axios')

router.get('/giphy/:search', (req, res) => {
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.search}&rating=g&limit=20`)
    .then(({ data }) => {
      res.json(data)
    })
    .catch(err => console.error(err))
})

module.exports = router
