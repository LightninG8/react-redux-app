export default class RestoService {
    _apiBase = "http://localhost:8000";

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} with status ${res.status}`);
        }

        return await res.json();
    }
    
    getMenuItems = async () => {
        return this.getResource("/menu/");
    }
    getMenuItem = async (id) => {
        const res = this.getResource("/menu/");

        const item = res.find(el => el.id === id);

        return item;
    }
    setOrder = async (order) => {
        const number = await this.getOrderNumber();

        const newOrder = {
            id: number,
            order: order,
        }

        console.log(newOrder);

        const res = await fetch(`${this._apiBase}/orders/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify(newOrder)
        });
   
        
        if (!res.ok) {
            throw new Error(`Не получилось сделать заказ №${number}`);
        }
    }
    getOrderNumber = async () => {
        const res = await this.getResource("/orders/");

        const orderNumber = res.length + 1;

        return orderNumber;
    }
}