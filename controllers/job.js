const db = require('../models/index.js');
const Job = db.jobs;
const Op = db.Sequelize.Op;

module.exports = { 
    list: async (req, res) => {
        let data = await Job.findAll();
        console.log('List Jobs');
        //console.log(JSON.stringify(data));
        res.send(JSON.stringify(data));
    },
    
    select: async (req, res) => {
        let data = await Job.findByPk(req.params.id);
        console.log('Job By ID');
        //console.log(JSON.stringify(data));
        res.send(JSON.stringify(data));
    },
    
    create: async (req, res) => {
        let data = await Job.create(req.body);
        console.log('Job Create');
        //console.log(JSON.stringify(data));
        res.send(JSON.stringify(data));
    },
    
    update: async (req, res) => {
        const data = await Job.update(req.body, { where: { id: req.body.id } });
        console.log('Job Update');
        //console.log(JSON.stringify(data));
        res.send(JSON.stringify(data));
    },

    erase: async (req, res) => {
        const data = await Job.destroy({ where: { id: req.params.id } });
        console.log('Job Delete');
        //console.log(JSON.stringify(data));
        res.send(JSON.stringify(data));
    },

    change: async (req, res) => {
        if(req.body.status){
            req.body.status = false;
        } else {
            req.body.status = true;
        }
        
        const data = await Job.update(req.body, { where: { id: req.body.id } });
        console.log('Job Change Status');
        //console.log(JSON.stringify(data));
        res.send(JSON.stringify(data));
    }
};