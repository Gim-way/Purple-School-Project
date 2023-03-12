import { TopLevelCategory } from '@/interfaces/page.interface'


export interface PagItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string
  }
  isOpened?: boolean
  pages: PagItem[];
}

export interface FirstLevelMenuItem {
  route: string
  name: string
  icon: JSX.Element
  id: TopLevelCategory
}
