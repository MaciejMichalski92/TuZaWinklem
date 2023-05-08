import { increment } from '@/app/feature/counter.slice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import Button from '@/components/atoms/Button';
import imageFile from '@public/testImage.jpg';
import ContentSeparator from '@/components/atoms/ContentSeparator';
import Header from '@/components/molecules/Header';
import AnimationWrapper from '@/components/molecules/AnimationWrapper';
import {
  styleShowFromRight,
  styleShowFromLeft
} from '@/components/molecules/AnimationWrapper/childrenStyles';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { getDeviceInfoFromClient } from '@/helpers/utils/getDeviceInfoFromClient';
import Footer from '@/components/organisms/Footer';

export default function Home(props: {
  device: string;
  isBot: boolean;
}) {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  console.log(props);

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
      <ContentSeparator />
      <ContentSeparator />
      <ContentSeparator />
      <AnimationWrapper animationClass="show">
        <h2 style={styleShowFromRight}>Test Anim</h2>
        <h2 style={styleShowFromLeft}>Test Anim</h2>
      </AnimationWrapper>
      <ContentSeparator />
      <AnimationWrapper animationClass="show">
        <Image
          style={styleShowFromRight}
          src={imageFile.src}
          alt="h"
          width={500}
          height={400}
        />
      </AnimationWrapper>
      <ContentSeparator />
      <Footer
        contactLinks={[
          {
            id: '56566ddd7',
            href: '#',
            text: 'Lorem'
          },
          {
            id: '1',
            href: '#',
            text: 'Lorem'
          },
          {
            id: '2',
            href: '#',
            text: 'Lorem'
          }
        ]}
        infoLinks={[
          {
            id: '43',
            href: '#',
            text: 'Lorem'
          },
          {
            id: '4444',
            href: '#',
            text: 'Lorem'
          }
        ]}
        offertLinks={[
          {
            id: '555',
            href: '#',
            text: 'Lorem'
          },
          {
            id: '7777',
            href: '#',
            text: 'Lorem'
          },
          {
            id: '4',
            href: '#',
            text: 'Lorem'
          }
        ]}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req: { headers }
}) => {
  const { device, isBot } = getDeviceInfoFromClient(headers);

  return {
    props: {
      device,
      isBot
    }
  };
};
