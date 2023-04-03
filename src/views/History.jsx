import React from 'react'
import ListItem from '../components/ListItem'
import { Card } from 'antd'

export default function History() {
  const _renderItemChild = () => {
    let display = <div style={{backgroundColor:'red', padding:'2rem'}}>Haloo</div>
    return display
  }
  return (
    <div>
      <Card title='Things you have searched for' style={{zIndex:10, position: 'relative'}} headStyle={{fontSize:'2.5rem'}}>
        History
      </Card>

      <ListItem title='Item title' children={_renderItemChild} />
    </div>
  )
}
