import { increment } from '@/app/feature/counter.slice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import Button from '@/components/atoms/Button';
import { ImageWrapper } from '@/components/atoms/CustomImage/CustomImage';
import imageFile from '../public/testImage.jpg';

export default function Home() {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  function click() {
    dispatch(increment());
  }
  return (
    <>
      <h1 className=" text-3xl font-bold underline">
        Hello, Next.js! {counterValue}
        <button onClick={click}>+</button>
        <Button ariaLabel="Label" handleClick={click}>
          Dodaj
        </Button>
      </h1>

      <ImageWrapper width="400px">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageFile.src} alt="test" />
      </ImageWrapper>
    </>
  );
}
