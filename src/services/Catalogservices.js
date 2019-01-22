import http from './http';

class CatalogServices {
    static getOrders() {
        return http.get('/orders');
    }
    static createOrder(newOrder) {
        return http.put('/orders', newOrder);
    }
    static editOrder(updatedOrder) {
        return http.post('/orders', updatedOrder);
    }
    static deleteOrder(id) {
        return http.delete('/orders', id);
    }
}

export default CatalogServices;