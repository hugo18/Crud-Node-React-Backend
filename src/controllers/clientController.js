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
        console.error('Erro ao adicionar cliente:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const updatedClient = await clientService.updateClient(clientId, clientData);
        if (!updatedClient) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.status(200).json(updatedClient);

    } catch (err) { 
        console.error('Erro ao atualizar cliente:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deleted = await clientService.deleteClient(clientId);
        if (!deleted) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        res.status(200).send();

    } catch (err) { 
        console.error('Erro ao apagar cliente:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

/*
export const searchClients = async (req, res) => {
    try {
      const searchTerm = req.query.q; // Get the search term from the query parameters
      const clients = await clientService.searchClients(searchTerm);
      res.status(200).json(clients);
    } catch (error) {
      console.error('Error ao pesquisar clientes:', error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
};
*/