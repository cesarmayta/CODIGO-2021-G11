const projectController = {}
const Project = require('../models/Project');

projectController.getAll = async (req,res) => {
    try{
        const projects = await Project.findAll()
        res.json({
            status:true,
            content: projects
        })

    } catch(error){
        console.log(error);
        res.json({
            status:false,
            content:'ocurrio un problema'
        });
    }
}

module.exports = projectController