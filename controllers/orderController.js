const Order = require('../models/orderModel');

// Criar
exports.createOrder = async (req, res) => {
  try {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;
    const order = new Order({
      orderId: numeroPedido,
      value: valorTotal,
      creationDate: new Date(dataCriacao),
      items: items.map(item => ({
        productId: item.idItem,
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter pedido
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Listar
exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Atualizar
exports.updateOrder = async (req, res) => {
  try {
    const { valorTotal, items } = req.body;
    const order = await Order.findOneAndUpdate(
      { orderId: req.params.id },
      { value: valorTotal, items: items.map(item => ({
        productId: item.idItem,
        quantity: item.quantidadeItem,
        price: item.valorItem
      })) },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Deletar
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({ orderId: req.params.id });
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json({ message: 'Pedido deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
