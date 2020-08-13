const connection = require('../database/connection')
const profileController = {
index: async (req,res) =>{
    const ong_id = req.headers.authorization;
    try {
        const incident = await connection('incidents').where('ong_id',ong_id).select('*');
        return res.status(200).json(incident)
    } catch (error) {
        return res.status(400).json(error)
    }

}
    
}

module.exports = profileController;