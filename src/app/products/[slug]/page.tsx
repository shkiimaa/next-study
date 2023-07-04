import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
    // not-found.tsx 보여줌
  }

  return <div>{product.name} 제품 소개 페이지</div>;
}

/**

* -----------------------------

* generateStaticParams

* -----------------------------

* generateStaticParams 함수는 사전에 미리 생성할 페이지의 경로를 정의합니다.

* 예를 들어, 'pants'와 'skirt' 페이지에 대한 경로를 미리 생성하고 싶다면 해당 값을 products 배열에 추가하면 됩니다.

* props를 json 형태로 전달하여 필요한 데이터를 채워 HTML을 생성한다.

* 함수는 products 배열의 각 요소를 slug 속성을 가진 객체로 변환하여 반환합니다.

*/

// 빌드힐때 SSG로 만드냐 아니면 사용자가 해당 경로로 들어왔을때 SSR로 하냐의 차이
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((product) => {
    return {
      slug: product.id,
    };
  });
}
