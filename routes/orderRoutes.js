const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//CRIAR
router.post('/', orderController.createOrder);
//OBTER
router.get('/:id', orderController.getOrder);
//ISTAR
router.get('/list', orderController.listOrders);
//ATUALIZAR
router.put('/:id', orderController.updateOrder);
//APAGAR
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
