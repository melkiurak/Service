type Category = {
    id: string;
    name: string;
    icon: string;
}

type Transaction ={
    id: string;
    date: Date;
    amount: number;
    category: Category;
    currency: 'UAH' | 'USD' | 'EUR';
    description: string;
    type: 'income' | 'expense';
}
const Categories: Category[] = [
    {id: 'object1', name: 'products', icon: 'public/icons/free-icon-product-management-8510670.png'},
    {id: 'object2', name: 'restaurants', icon: 'public/icons/free-icon-food-and-restaurant-mega-pack-color-8285335.png'},
    {id: 'object3', name: 'transport', icon: 'public/icons/free-icon-rental-11865935.png'},
    {id: 'object4', name: 'company', icon: 'public/icons/free-icon-home-16116233.png'},
    {id: 'object5', name: 'cloth', icon: 'public/icons/free-icon-dress-9211222.png'},
    {id: 'object6', name: 'health', icon: 'public/icons/free-icon-health-and-care-9747093.png'},
    {id: 'object7', name: 'technology', icon: 'public/icons/free-icon-gadget-18753780.png'},
    {id: 'object8', name: 'journey', icon: 'public/icons/free-icon-plane-8111913.png'},
    {id: 'object9', name: 'education', icon: 'public/icons/free-icon-graduate-17376043.png'},
]
export type {Category, Transaction,}
export {Categories}