import React from 'react';
import { Button, Htag, Paragraph } from '@/components';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Paragraph size='B'>Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='S'>Малекий</Paragraph>
    </>
  );
}
