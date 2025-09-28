import User from '../models/User.js'
import crypto from 'node:crypto'

export const createUser = async (req, res) => {

    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        const user = await User.create(userToCreate)

        res.status(201).json(user)
    } catch (err) {
        // Handle unique constraint error for email or username
        if (err.name === 'SequelizeUniqueConstraintError') {
            const field = err.errors[0].path;
            return res.status(400).json({ error: `${field} already exists` })
        }
        res.status(500).json({ error: err.message })
    }

}

export const getAllUsers = async (req, res) => {

    const users = await User.findAll()
    res.status(200).json(users)

}

export const deleteUser = async (req, res) => {
    const user = await User.destroy({
        where: { id: req.params.id }
    })
    res.status(200).json({ message: 'Usuário deletado!!!' })
}

export const updateUser = async (req, res) => {
    try {
        const { id, email } = req.query;
        
        // Verificar se foi fornecido ID ou email
        if (!id && !email) {
            return res.status(400).json({ error: 'ID ou email deve ser fornecido' });
        }
        
        // Preparar condição de busca
        const whereCondition = id ? { id } : { email };
        
        // Buscar usuário
        const user = await User.findOne({ where: whereCondition });
        
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        
        // Atualizar usuário com os dados do body
        const updatedUser = await user.update(req.body);
        
        res.status(200).json(updatedUser);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            const field = err.errors[0].path;
            return res.status(400).json({ error: `${field} already exists` });
        }
        res.status(500).json({ error: err.message });
    }
}