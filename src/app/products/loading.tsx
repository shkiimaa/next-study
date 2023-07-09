export default function ProductsLoading() {
  return <p>로딩중 입니다...</p>;
}

//layout.ts의 children 부분을 suspense로 감싸주는 역할 (즉 page컴포넌트를 suspense로 감싸주고 fallback에 loading 컴포넌트가 들어가 있다.)
