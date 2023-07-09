import Image from 'next/image';
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

export default function Home() {
  console.log(os.hostname()); //서버 컴포넌트이기에 노드에서 실행되는 API를 사용할 수 있다. 대신 브라우저에서 제공하는 API는 사용못한다.
  /* const [name, setName] = useState(''); // 사용 불가 */
  return (
    <>
      <h1>홈페이지 경로</h1>
      {/* 외부 이미지를 사용할땐 next.config에서 설정을 해줘야한다. */}
      <Image
        src={`https://images.unsplash.com/photo-1441986300917-64674bd600d8`}
        alt="shop"
        width={400}
        height={400}
      />
      <Counter></Counter>
    </>
  );
}
