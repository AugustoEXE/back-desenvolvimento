const express = require('express')

const router = express.Router()

const authorController = require('../controllers/authorController')

router.get('/authors',async (req,res)=>{
    const authors = await authorController.getAll()
    res.json(authors)
})

router.post('/author', async (req,res)=>{
    const {data} = req.body
    await authorController.create(data)
    res.send('OK')
})

router.put('/author/:id', async (req,res)=>{
    const {name} = req.body
    const {id} = req.params
    await authorController.update(Number(id),name)
    res.send('OK')
})

router.delete('/author/:id', async (req,res)=> {
    const { id } = req.params
    await authorController.delete(Number(id))
    res.send('OK')
})



module.exports =  router