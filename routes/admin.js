const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Categoria")
const Categoria = mongoose.model('categorias')

router.get('/', (req, res)=>{
    res.render('admin/index')

})

router.get('/posts', (req, res)=>{
    res.send('pagina de posts')//API

})

router.get('/categorias', (req, res)=>{
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res)=>{
    res.render('admin/addcategoria')//cria páginas
})

router.post('/categorias/nova', (req, res)=>{
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido"})
    }

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug inválido"})
    }
    
    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria precisa ser acima de 2 caracteres!"})
    } 

    if(erros.length > 0){
        res.render("admin/addcategoria", {erros: erros})
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
        new Categoria(novaCategoria).save()
        .then(()=>{
            req.flash("success_msg", "Categoria criada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err)=>{
            req.flash("error_msg", "Tente novamente!")
            res.redirect("/admin")
        })
    }

    
})

module.exports = router