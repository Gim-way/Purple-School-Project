import React, { useContext } from 'react'
import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem } from '@/interfaces/menu.interface'
import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'
import { TopLevelCategory } from '@/interfaces/page.interface'
import cn from 'classnames'
import styles from './Menu.module.css'


const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon/>,
    id: TopLevelCategory.Courses
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon/>,
    id: TopLevelCategory.Services
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon/>,
    id: TopLevelCategory.Books
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon/>,
    id: TopLevelCategory.Products
  },
]

export const Menu = (): JSX.Element => {
  const {
    menu,
    setMenu,
    firstCategory
  } = useContext(AppContext)

  const buldFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, { [styles.firstLevelActive]: m.id == firstCategory })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buldSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }
  const buldSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buldThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }
  const buldThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel,{
          [styles.thirdLevelActive]: false
        })}>
          {p.category}
        </a>
      ))
    )
  }

  return (
    <div className={styles.menu}>
      {buldFirstLevel()}
    </div>
  )
}
