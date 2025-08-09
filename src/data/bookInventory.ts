export interface BookInventory {
  id: number;
  stock: number; // -1 for infinite/digital, 0 for sold out
  status: 'in-stock' | 'sold-out' | 'on-sale' | 'exclusive';
}

export const bookInventory: BookInventory[] = [
  { id: 1, stock: -1, status: 'in-stock' },
  { id: 2, stock: 5, status: 'on-sale' },
  { id: 3, stock: 0, status: 'sold-out' },
  { id: 4, stock: -1, status: 'in-stock' },
  { id: 5, stock: 10, status: 'exclusive' },
  { id: 6, stock: -1, status: 'in-stock' },
  { id: 7, stock: 0, status: 'sold-out' },
  { id: 8, stock: -1, status: 'in-stock' },
  { id: 9, stock: 2, status: 'in-stock' },
  { id: 10, stock: -1, status: 'on-sale' },
  { id: 11, stock: -1, status: 'in-stock' },
  { id: 12, stock: -1, status: 'exclusive' },
];