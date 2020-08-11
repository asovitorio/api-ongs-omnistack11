const connection = require('../database/connection')
const incidentsController = {

    index: async (req, res) => {
        const { page = 1} = req.query
        const [count] = await connection('incidents').count();
        res.header('pages',count['count(*)']);
        try {
            console.log(count['count(*)'])
            const incidents = await connection('incidents')
            .join('ongs','ong_id','=','incidents.ong_id')
            .limit(5)
            .offset((page -1) * 5)
            .select('incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf');
            return res.status(200).json(incidents)
        } catch (error) {

        }
    },
    create: async (req, res) => {
        // "title":"Aula de Banco de Dados",
        // "description":"Voluntários para aulas de BD avançado",
        // "value":4.25,
        // "ong_id":"8b25eb3f"
        const {title,description,value} = req.body;
        const ong_id = req.headers.authorization

        try {
         const incidents = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
         })
             
              console.log(req.headers.authorization)
              return res.status(201).json(incidents);

        } catch (error) {
            console.log(error)
            return res.status(400).json(error);
        }
    },
    
    delete: async (req,res) =>{
        const {id} = req.params
        const ong_id = req.headers.authorization
          console.log(ong_id)
        try {
            const incident = await connection('incidents').where('id',id).select('ong_id').first()
        
            console.log(incident.ong_id)
            if(incident.ong_id != ong_id){
                return res.status(401).json({status:"Não Autorizado"})
            }
          await connection('incidents').where('id',id).del()
        return res.status(200).json({status:"Ok",id});
        } catch (error) {
            return res.status(400).json(error);
        }
        
    }
}

module.exports = incidentsController