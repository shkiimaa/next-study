import { getProducts } from '@/service/products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
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
