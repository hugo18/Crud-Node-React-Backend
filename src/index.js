import express from 'express';
import cors from 'cors';
import router from './routes/clientRoute.js';
const app = express();
const port = 3000;  

app.use(cors());
app.use(express.json());
app.use('/api', router);


app.listen(port, () => {
    console.log('Escutando na porta 3000');
});

