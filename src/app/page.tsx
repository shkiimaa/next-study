import Image from 'next/image';
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

export default function Home() {
  console.log(os.hostname()); //서버 컴포넌트이기에 노드에서 실행되는 API를 사용할 수 있다. 대신 브라우저에서 제공하는 API는 사용못한다.
  /* const [name, setName] = useState(''); // 사용 불가 */
  return (
    <>
      <h1>홈페이지 경로</h1>
      <Counter></Counter>
    </>
  );
}
