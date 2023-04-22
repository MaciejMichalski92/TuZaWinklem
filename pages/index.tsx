import { increment } from '@/app/feature/counter.slice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';

export default function Home() {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  function click() {
    dispatch(increment());
  }
  return (
    <h1 className=" text-3xl font-bold underline">
      Hello, Next.js! {counterValue}
      <button onClick={click}>+</button>
    </h1>
  );
}
