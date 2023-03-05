import React, { useState } from 'react';
import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import { withLayout } from '@/layout/Layout';


 function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);

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
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home)
