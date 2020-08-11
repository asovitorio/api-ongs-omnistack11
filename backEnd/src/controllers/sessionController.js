const connection = require('../database/connection')
const sessionController = {
 create: async (req,res) =>{
     
    const {id} = req.body

    try {
        const ong = await connection('ongs').where('id',id).select("name").first();
        if(!ong){
            return res.status(400).json({error:"Ong não cadastrada"});
        }
        return res.status(200).json(ong);
    } catch (error) {
        return res.status(400).json(error);
    }

 }
    
}


module.exports = sessionController