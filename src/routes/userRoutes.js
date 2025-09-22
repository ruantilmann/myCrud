import express from 'express';
import { createUser, getAllUsers, deleteUser, updateUser } from '../controllers/userController.js';

const router = express.Router()

/**
 * @swagger
 * /users/createUser:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               age:
 *                 type: integer
 *                 example: 30
 *               email:
 *                 type: string
 *                 example: joao.silva@example.com
 *     responses:
 *       '201':
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
 *                 name:
 *                   type: string
 *                   example: João Silva
 *                 age:
 *                   type: integer
 *                   example: 30
 *                 email:
 *                   type: string
 *                   example: joao.silva@example.com
 *       '400':
 *         description: Erro de validação (ex. email já existe)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Email already exists
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
router.post('/createUser', createUser)

/**
 * @swagger
 * /users/allUsers:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: Retorna uma lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
 *                   name:
 *                     type: string
 *                     example: João Silva
 *                   age:
 *                     type: integer
 *                     example: 30
 *                   email:
 *                     type: string
 *                     example: joao.silva@example.com
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
router.get('/allUsers', getAllUsers)

/**
 * @swagger
 * /users/deleteUser/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser deletado
 *         schema:
 *           type: string
 *           example: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
 *     responses:
 *       '200':
 *         description: Usuário deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuário deletado!!!
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
router.delete('/deleteUser/:id', deleteUser)

/**
 * @swagger
 * /users/updateUser:
 *   put:
 *     summary: Atualiza um usuário pelo ID ou email
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: query
 *         required: false
 *         description: ID do usuário a ser atualizado
 *         schema:
 *           type: string
 *           example: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
 *       - name: email
 *         in: query
 *         required: false
 *         description: Email do usuário a ser atualizado
 *         schema:
 *           type: string
 *           example: joao.silva@example.com
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               age:
 *                 type: integer
 *                 example: 30
 *               email:
 *                 type: string
 *                 example: joao.silva.novo@example.com
 *     responses:
 *       '200':
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
 *                 name:
 *                   type: string
 *                   example: João Silva
 *                 age:
 *                   type: integer
 *                   example: 30
 *                 email:
 *                   type: string
 *                   example: joao.silva.novo@example.com
 *       '400':
 *         description: Erro de validação (ex. ID ou email não fornecido)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: ID ou email deve ser fornecido
 *       '404':
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Usuário não encontrado
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
router.put('/updateUser', updateUser)

export default router