import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import formatMoney from '../lib/formatMoney'

const CreateItem = () => {
  const defaultForm = {
    title: '',
    price: 0,
    description: ''
  }

  const [form, setForm] = useState(defaultForm)

  return <Form>
    <fieldset>
      <label htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={(e) => { setForm({ ...form, title: e.target.value }) }}
          required />
      </label>
    </fieldset>
  </Form>
}

export default CreateItem
