const crypto =  require('crypto')
const connection = require('../database/connection')


const ongsController = {

    index: async (req,res) =>{
        try {
                const ongs = await connection('ongs').select('*');
            return res.status(200).json(ongs)
        } catch (error) {
            return res.status(400).json(error); 
        }
    }, 
    create:  async (req,res) => {
            const {name,email,whatsapp,city,uf} = req.body
            const id = crypto.randomBytes(4).toString('HEX');
            try {
            await  connection('ongs').insert({
                  id,
                  name,
                  email,
                  whatsapp,
                  city,
                  uf,
              })
                return res.status(201).json({id:id});
            } catch (error) {
                return res.status(400).json(error); 
            }
        }
    } 


module.exports = ongsController