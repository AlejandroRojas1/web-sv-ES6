import express from 'express'
import path from 'path'

export const startServer = (options)=> {
    const {port, public_path} = options;
    const app = express();

    app.use(express.static(public_path)); // sirve el contenido estatico que haya en el public_path

    app.get('/', (req, res)=> {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath);
    })

    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto: ${port}`);
      })
}
