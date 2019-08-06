const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const {devId} = req.params; //usuario que está recebendo o like
        const {user}  = req.headers; //usuario que esta dando o like

        const loggedDev = await Dev.findById(user);
        const targetDev  = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: 'Dev not exists'});
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log('DEU MATCH!');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};