import React, { useState } from 'react';
import { Button, Htag, Paragraph, Tag } from '@/components';


export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance="ghost" arrow="right" onClick={() => setCounter(x => x - 1)}>Кнопка</Button>
      <Paragraph size="B">Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size="S">Малекий</Paragraph>
      <Tag size="S">Ghost</Tag>
      <Tag size="M" color="red">Red</Tag>
      <Tag size="S" color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>

    </>
  );
}
