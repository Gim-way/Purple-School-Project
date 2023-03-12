import React, { useState } from 'react'
import { Button, Htag, Input, Paragraph, Rating, Tag, Textarea } from '@/components'
import { withLayout } from '@/layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'


function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)

  const [rating, setRating] = useState<number>(4)

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
      <Input placeholder='тест' />
      <Textarea placeholder='тест area' />
    </>
  )
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}
