'use strict';

module.exports = function(app) {
    var product = require('../controllers/orderController');
    app.route('/orders')
        .get(product.products)
        .post(product.add);
    app.route('/orders/:orderId')
        .get(product.getproduct)
        .put(product.update)
        .delete(product.delete);
};
