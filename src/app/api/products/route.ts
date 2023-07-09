import { getProducts } from '@/service/products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
