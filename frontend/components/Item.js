/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'
import formatMoney from '../lib/formatMoney'
import { imagePlaceholder } from '../config'

const Item = (props) => {
  const imageSource = () => {
    const { item } = props
    return item.image !== '' ? item.image : imagePlaceholder
  }

  const { item } = props

  return (
    <ItemStyles>
      <img src={imageSource()} alt={item.title} />
      <Title>
        <Link href={{
          pathname: '/item',
          query: { id: item.id }
        }}>
          <a>{item.title}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(item.price)}</PriceTag>
      <p>{item.description}</p>
      <div className="buttonList">
        <Link href={{
          pathname: 'update',
          query: { id: item.id }
        }}>
          <a>Edit ✍️</a>
        </Link>
        <button>Add to Cart</button>
        <button>Delete</button>
      </div>
    </ItemStyles>
  )
}

Item.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    largeImage: PropTypes.string
  }).isRequired
}

export default Item
