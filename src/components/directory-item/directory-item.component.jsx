import { useNavigate } from 'react-router-dom'
import {
  BackgroundImage,
  Body,
  DierectoryItemContainer,
} from './directory-item.styles'

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DierectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DierectoryItemContainer>
  )
}

export default CategoryItem
