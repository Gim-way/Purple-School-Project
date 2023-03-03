import React from 'react';
import { Button, Htag, Paragraph, Tag } from '@/components';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Paragraph size='B'>Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='S'>Малекий</Paragraph>
      <Tag size='S'>Ghost</Tag>
      <Tag size='M' color='red'>Red</Tag>
      <Tag size='S' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>

    </>
  );
}
