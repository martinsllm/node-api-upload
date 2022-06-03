const UploadData = require('../data/UploadData');

module.exports = {

    async List(req, res) {
       try {
           const data = await UploadData.List();
           return res.json(data);
       } catch (error) {
           return res.status(500).json({'message': error.message})
       }
    },

    async Create(req, res) {
        try {
            const url = `data:image/jpeg;base64,${req.file.buffer.toString('base64')}`;
            await UploadData.Create(url);
            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'message': error.message})
        }
    },

    async Delete(req, res) {
        try {
            const data = await UploadData.ListOne(req.params.id);
            if(!data) return res.status(404).json({'message': 'File Not Found!'});

            await UploadData.Delete(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'message': error.message})
        }
    }

    
}