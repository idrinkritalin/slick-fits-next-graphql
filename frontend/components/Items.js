import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../components/Spinner'
import Item from '../components/Item'
import styled from 'styled-components'

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`
const ItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto
`

export default class Items extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <Spinner />
            if (error !== undefined) return <p>⚡ {error.message} ⚡</p>
            return <ItemList>
              {data.items.map(item => <Item key={item.id} item={item} />)}
            </ItemList>
          }}
        </Query>
      </div>
    )
  }
}