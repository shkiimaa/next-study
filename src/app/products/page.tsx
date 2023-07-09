import Link from 'next/link';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import styles from './page.module.css';
import clothesImage from '../../../public/images/photo-1441986300917-64674bd600d8.jpeg';
import Image from 'next/image';

// export const revalidate = 3;
// revalidate는 ISG나 SSR로 렌더링 설정할때 사용한다.
// 0으로 주면 SSR로 동작한다.
// fetch의 두번째 파라미터에서 섦정하거나 위 처럼 따로 변수로 설정하면된다.

export default async function ProductsPage() {
  const products = await getProducts();
  // SSG로 하면 서버가 빌드될 때만 요청하므로 데이터가 변경되지않는다.
  // fetch의 2번째 파라미터에 next : {revalidate : time(초)}를 작성하면 ISG로 할 수 있다.
  // fetch는 웹 API이지만 리액트 18 버전에는 서버 컴포넌트에서도 fetch를 사용할 수 있도록 구현해 두었다.
  const response = await fetch('https://meowfacts.herokuapp.com', {
    // next: { revalidate: 3 },
    /* cache : 'no-store' */
    // cache를 'no-store'로 주어도 SSR로 동작한다.
  });
  const data = await response.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt="Clothes" priority />
      {/* 이미지 태그는 자동으로 리사이징되고 뷰사이즈에 따라 최적화된 이미지를 보여준다. 
          priority를 주면 next에서 가장 먼저 해당 이미지를 다운로드한다.
      */}
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
      <article className={styles.article}>{factText}</article>
      <MeowArticle />
    </>
  );
}
