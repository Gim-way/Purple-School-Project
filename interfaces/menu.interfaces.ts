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
  pages: PagItem[];
}

