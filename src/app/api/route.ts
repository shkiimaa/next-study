import { Product, getProducts } from '@/service/products';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John' });
}

//12버전 api 라우팅
// {
//   type Data = {
//     name: string;
//   };

//   export async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Product[]>
//   ) {
//     if (req.method === 'GET') {
//       const products = await getProducts();
//       return res.status(200).json(products);
//     }
//   }
// }
