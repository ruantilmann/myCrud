import express from 'express';
import { createList, getListsForUser } from '../controllers/shoppingListController.js';
import { addItemToList, updateItemInList, removeItemFromList } from '../controllers/ShoppingListItemController.js';

const router = express.Router()

// POST /users/:userId/lists - Create a new list for a user
// GET  /users/:userId/lists - Get all lists for a user
router.route('/users/:userId/lists')
    .post(createList)
    .get(getListsForUser);

// POST /lists/:shoppingListId/products/:productId - Add a product to a list
router.route('/lists/:shoppingListId/products/:productId')
    .post(addItemToList)
    .put(updateItemInList)
    .delete(removeItemFromList);

export default router;