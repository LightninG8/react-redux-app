export default class RestoService {
    getMenuItems = async () => {
        const res = await fetch("http://localhost:3004/menu");

        if (!res.ok) {
            throw new Error(`Could not fetch menu with status ${res.status}`);
        }

        return await res.json();
    }
}