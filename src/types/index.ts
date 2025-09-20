export interface Order {
    id: string;
    customer: string;
    date: string;
    total: number;
    status: 'Completed' | 'In Progress' | 'Pending' | 'Cancelled';
}

export interface MenuItem {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
}

