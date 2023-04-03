import React from 'react'
import { Card } from 'antd'

export default function ListItem(props) {
  return (
    <Card title={props.title} style={{zIndex:10, position: 'relative'}} headStyle={{fontSize:'2rem'}}>
     {props.children()}
    </Card>
  )
}
