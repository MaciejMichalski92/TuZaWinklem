import { increment } from '@/app/feature/counter.slice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  function click() {
    dispatch(increment());
  }
  return (
    <h1
      className={inter.className + ' text-3xl font-bold underline'}
    >
      Hello, Next.js! {counterValue}
      <button onClick={click}>+</button>
    </h1>
  );
}
