import UpdateItem from '../components/UpdateItem'

const Update = props => (
  <section>
    <UpdateItem id={props.query.id}/>
  </section>
)

export default Update
