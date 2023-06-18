interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface Address {
    id: number;
    street: string;
    number: number;
    cep: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
}

interface Review {
    id: number;
    user: User;
    rating: number;
    reviewDate: string;
    description: string;
    favorite: boolean;
}

interface Coupon {
    id: number;
    code: string;
    initialDate: string | null;
    expirationDate: string;
    description: string;
    isValid: boolean;
    valid: boolean;
}

interface Contact {
    id: number;
    email: string;
    phone: string;
}

interface Category {
    id: number;
    category: string;
}

export interface Establishment {
    id: number;
    name: string;
    averageRating: number;
    description: string;
    site: string;
    image: string;
    startOperation: string;
    endOperation: string;
    workingDays: string;
    menuUrl: string;
    paymentTypes: string;
    category: Category;
    address: Address[];
    reviews: Review[];
    coupon: Coupon[];
    contacts: Contact[];
}