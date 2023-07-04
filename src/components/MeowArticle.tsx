'use client';

/*
CSR 컴포넌트를 사용해도 next는 최대한 정적인 데이터를 수집하여 pre-rendering 한다.
네트워크에서 받아온 html을 확인해보면 useState의 기본값, 아래 P태그의 내용이 pre-rendering 된걸 확일할 수 있다.
*/

import { useEffect, useState } from 'react';

export default function MeowArticle() {
  const [text, setText] = useState();

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return (
    <>
      <p>CSR</p>
      <div>{text}</div>
    </>
  );
}
