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
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { wrapper } from '@/app/store';

const { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_SPACE_ID } =
  process.env;

const Home = (props: {
  device: string;
  isBot: boolean;
  response: any;
}) => {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  function click() {
    dispatch(increment());
  }

  const isMobile = props.device === 'mobile';

  return (
    <MainLayout
      headerImgSrc={imageFile.src}
      footerProps={{
        contactLinks: [
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
        ],
        infoLinks: [
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
        ],
        offertLinks: [
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
        ]
      }}
      menuProps={{
        isMobile,
        navigationItems: [
          { title: 'Strona główna', href: '#' },
          {
            title: 'Targi',
            subMenu: [
              { href: '#', title: 'Wszystkie Targi' },
              { title: 'Mazowsze', href: '#' }
            ],
            submenuRole: 'Targi'
          },
          {
            title: 'Locals',
            subMenu: [
              { href: '#', title: 'Wszyscy Localsi' },
              { title: 'Mazowsze', href: '#' }
            ],
            submenuRole: 'Locals'
          }
        ]
      }}
    >
      {JSON.stringify(props.response, null, 2)}
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
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    store =>
      async ({ req: { headers } }) => {
        const { device, isBot } = getDeviceInfoFromClient(headers);

        // toDo remove this demo
        const responseFromContentful = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              query: `query {headingCollection{items{sys{id},text,type,isBold}}}`
            })
          }
        );

        if (!responseFromContentful.ok)
          console.error(responseFromContentful);

        const data = await responseFromContentful.json();
        const response = data.data.headingCollection.items;
        return {
          props: {
            device,
            isBot,
            response
          }
        };
      }
  );
