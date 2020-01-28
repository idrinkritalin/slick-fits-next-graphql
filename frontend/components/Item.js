import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'
import formatMoney from '../lib/formatMoney'
import { imagePlaceholder } from '../config'

export default class Item extends Component {
  static propTypes = {
    items: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    }).isRequired
  }

  imageSource = () => {
    const { item } = this.props
    return item.image !== '' ? item.image : imagePlaceholder
  }

  render() {
    const { item } = this.props
    return (
      <ItemStyles>
        <img src={this.imageSource()} alt={item.title} />
        <Title>
          <Link href={{
            pathname: '/item',
            query: {id: item.id}
          }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link href={{
            pathname: "update",
            query: {id: item.id}
          }}>
            <a>Edit ✍️</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    )
  }
}