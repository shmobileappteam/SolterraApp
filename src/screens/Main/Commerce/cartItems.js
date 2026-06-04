import { fert1, plant1, plant2 } from '../../../assets/images';

/** Mock cart — same lines as CartScreen; replace with store/context later */
export const CART_ITEMS = [
  { n: 'Monstera Deliciosa', c: 'Medium', p: 32, q: 1, img: plant1 },
  { n: 'Terracotta Pot', c: '8 inch', p: 18, q: 2, img: plant2 },
  { n: 'Organic Compost', c: '5 lb', p: 22, q: 1, img: fert1 },
];

/** Web badge shows line-item count (e.g. 3), not total quantity */
export const getCartItemCount = () => CART_ITEMS.length;
