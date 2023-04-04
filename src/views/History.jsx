import React from 'react'
import ListItem from '../components/ListItem'
import { Card, Col, Row, Tag, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { selectHistory } from '../features/historySlice'

const { Title, Text } = Typography;

export default function History() {
  const history = useSelector(selectHistory)
  
  const _renderItemChild = (data) => {
    console.log('here', data);
    let display =
    <div>
      <Row justify='space-between' align='middle'>
        <Col span={12}>
          <Title level={3} style={{textAlign:'left', margin:0}}>{data.terms[0].value}</Title>
          <small style={{textAlign:'left', display:'block'}}>Place ID : {data.place_id}</small>
        </Col>
        <Col span={12} className='flex-right'>
          {data.types.map((data, index) => <Tag key={index} color='processing'>{data}</Tag>)}
        </Col>
      </Row>
    </div>

    return display
  }

  return (
    <div>
      <Card title='Your search history' style={{zIndex:10, position: 'relative'}} headStyle={{fontSize:'2.5rem'}}>
        {history.length !== 0 ? history.map((data,index) => {
          return (
            <ListItem title={data.terms[0].value} children={_renderItemChild} data={data} key={index} />
          )
        }) : <div>Search for a location in <i>Maps</i> to get a history.</div>}
      </Card>
    </div>
  )
}
