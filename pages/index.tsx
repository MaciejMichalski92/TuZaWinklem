import { increment } from '@/app/feature/counter.slice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import Button from '@/components/atoms/Button';
import imageFile from '../public/testImage.jpg';
import ContentSeparator from '@/components/atoms/ContentSeparator';
import Header from '@/components/molecules/Header';

export default function Home() {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  function click() {
    dispatch(increment());
  }

  return (
    <>
      <Header
        title="Lorem"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatem."
        imgSrc={imageFile.src}
        imgAlt="test"
      />
      <ContentSeparator />
      <h1 className=" text-3xl font-bold underline">
        Hello, Next.js! {counterValue}
        <button onClick={click}>+</button>
        <Button ariaLabel="Label" handleClick={click}>
          Dodaj
        </Button>
      </h1>
    </>
  );
}
