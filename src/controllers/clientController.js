import * as clientService from '../services/clientSevice.js';

export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    } catch (err) { 
        console.error('Erro ao buscar clientes:', err);
        res.status(500).json({ message: 'Erro no servidor'});
    }
};

export const createClient = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientService.createClient(clientData);
        res.status(200).json(newClient);
    } catch (err) { 
        console.error('Error adding client:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};