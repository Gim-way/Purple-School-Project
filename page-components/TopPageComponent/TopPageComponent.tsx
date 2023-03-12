import { TopPageComponentProps } from '@/page-components/TopPageComponent/TopPageComponent.props'


export const TopPageComponent = ({
  firstCategory,
  page,
  products,
  ...props
}: TopPageComponentProps): JSX.Element => {
  return (
    <>
      {products && products.length}
    </>
  )
}
