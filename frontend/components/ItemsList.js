import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../components/Spinner'
import Item from '../components/Item'
import ItemsListStyle from './styles/ItemsListStyle'

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
const ItemsList = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Query query={ALL_ITEMS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <Spinner />
          // eslint-disable-next-line jsx-a11y/accessible-emoji
          if (error !== undefined) return <p>⚡ {error.message} ⚡</p>
          return <ItemsListStyle>
            {data.items.map(item => <Item key={item.id} item={item} />)}
          </ItemsListStyle>
        }}
      </Query>
    </div>
  )
}

export default ItemsList
