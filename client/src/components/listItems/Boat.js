import React, { useState } from 'react'
import { Card, List } from 'antd'

import { EditOutlined } from '@ant-design/icons'
import UpdateBoat from '../forms/UpdateBoat'
import RemoveBoat from '../buttons/RemoveBoat'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Boat = props => {
  const [id] = useState(props.id)
  const [year, setYear] = useState(props.year)
  const [make, setMake] = useState(props.make)
  const [model, setModel] = useState(props.model)
  const [price, setPrice] = useState(props.price)
  const [personId, setPersonId] = useState(props.personId)
  const [editMode, setEditMode] = useState(false)
  const styles = getStyles()

  const boatName = () => {
    return `${props.year} ${props.make} ${props.model} ${props.price} ${props.personId}`
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'year':
        setYear(value)
        break
      case 'make':
        setMake(value)
      case 'model':
        setModel(value)
      case 'price':
        setPrice(value)
      case 'personId':
        setPersonId(value)
        break
      default:
        break
    }
  }

  const handleButtonClick = () => setEditMode(!editMode)

  return (
    <List.Item key={props.id}>
      {editMode ? (
        <UpdateBoat
          id={id}
          year={year}
          make={make}
          model={model}
          price={price}
          personId={personId}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          actions={[
            <EditOutlined key='edit' onClick={handleButtonClick} />,
            <RemoveBoat id={id} year={year} make={make} model={model} price={price} personId={personId}  />
          ]}
          style={styles.card}
        >
          {boatName()}
        </Card>
      )}
    </List.Item>
  )
}

export default Boat
