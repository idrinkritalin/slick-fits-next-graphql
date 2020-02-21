import React, { useState } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../components/Spinner'
import Error from './ErrorMessage'
import Form from './styles/Form'

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY ($id: ID!) {
    items(where: {
      id: $id
    }) {
      id
      title
      description
      price
    }
  }
`

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION (
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem (
      id: $id,
      title: $title,
      description: $description,
      price: $price
    ) {
      id
    }
  }
`

const UpdateItem = ({ id }) => {
  const defaultForm = { id }

  const [form, setForm] = useState(defaultForm)

  const onUpdateItem = async (e, updateItem) => {
    e.preventDefault()
    const res = await updateItem({ ...form })
  }

  return <Query variables={{ id }} query={SINGLE_ITEM_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <Spinner />
      // eslint-disable-next-line jsx-a11y/accessible-emoji
      if (error !== undefined) return <p>⚡ {error.message} ⚡</p>
      if (!data.items[0]) return <p> No data found! </p>
      return <Mutation mutation={UPDATE_ITEM_MUTATION} variables={form}>
        {(updateItem, { loading, error }) => (
          <Form onSubmit={e => onUpdateItem(e, updateItem)}>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="id">
            ID
                <input
                  type="text"
                  id="id"
                  name="id"
                  defaultValue={data.items[0].id}
                  disabled />
              </label>
              <label htmlFor="title">
            Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your title..."
                  defaultValue={data.items[0].title}
                  onChange={(e) => { setForm({ ...form, title: e.target.value }) }}
                  required />
              </label>
              <label htmlFor="description">
            Description
                <input
                  type="text"
                  id="descritpion"
                  name="description"
                  placeholder="Enter a description..."
                  defaultValue={data.items[0].description}
                  onChange={e => { setForm({ ...form, description: e.target.value }) }}
                  required />
              </label>
              <label htmlFor="price">
            Price
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  defaultValue={data.items[0].price}
                  min={0}
                  onChange={e => { setForm({ ...form, price: e.target.value }) }}
                  required />
              </label>
              <button type="submit">SUBMIT</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    }}
  </Query>
}

export default UpdateItem
export { UPDATE_ITEM_MUTATION, SINGLE_ITEM_QUERY }
