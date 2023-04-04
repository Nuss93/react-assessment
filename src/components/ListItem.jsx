import React from 'react'
import { Card } from 'antd'

// Reusable component to display items in a card view
export default function ListItem(props) {
  return (
    <Card style={{zIndex:10, position: 'relative'}} headStyle={{fontSize:'2rem'}}>
     {props.children(props.data)}
    </Card>
  )
}
