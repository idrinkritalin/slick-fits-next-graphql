import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import gql from 'graphql-tag'
import Form from './styles/Form'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION (
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem (
      title: $title,
      description: $description,
      price: $price,
      image: $image,
      largeImage: $largeImage
    ) {
      id
    }
  }
`

const CreateItem = () => {
  const defaultForm = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  }

  const [form, setForm] = useState(defaultForm)

  return <Mutation mutation={CREATE_ITEM_MUTATION} variables={form}>
    {(createItem, { loading, error }) => (
      <Form onSubmit={async e => {
        e.preventDefault()
        const res = await createItem()
        Router.push({
          pathname: '/item',
          query: { id: res.data.createItem.id }
        })
      }} >
        <Error error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="title">
        Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter your title..."
              value={form.title}
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
              value={form.description}
              onChange={(e) => { setForm({ ...form, description: e.target.value }) }}
              required />
          </label>
          <label htmlFor="price">
        Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={form.price}
              min={0}
              onChange={(e) => { setForm({ ...form, price: e.target.value }) }}
              required />
          </label>
          <button type="submit">SUBMIT</button>
        </fieldset>
      </Form>
    )}
  </Mutation>
}

export default CreateItem
export { CREATE_ITEM_MUTATION }
