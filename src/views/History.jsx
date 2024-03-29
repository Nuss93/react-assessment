import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import { Button, Card, Col, Row, Tag, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { remove, selectHistory } from '../features/historySlice'
import { DeleteOutlined, DeleteTwoTone } from '@ant-design/icons'

const { Title, Text } = Typography;

export default function History() {
  const resize = () => {
    setScreen(window.innerWidth)
  }
  const history = useSelector(selectHistory)
  const dispatch = useDispatch();

  const [screen, setScreen] = useState(1440)

  useEffect(() => {
    window.addEventListener('resize', resize);
    // resize();
  }, [screen])
  
  const _renderItemChild = (data) => {
    // console.log('here', data);
    let display =
    <div>
      <Row justify='space-between' align='middle'>
        <Col md={12}  sm={24}>
          <Title level={3} style={{textAlign:'left', margin:0}}>{data.terms[0].value}</Title>
          <small style={{textAlign:'left', display:'block'}}>Place ID : {data.place_id}</small>
        </Col>
        <Col lg={11} md={24}  sm={24} className='flex-right'>
          {data.types.map((data, index) => <Tag key={index} color='processing'>{data}</Tag>)}
        </Col>
        <Col md={1} sm={24}> 
          <Button type='text' danger onClick={() => {
            dispatch(remove(data.index))
            console.log(history);
          }}>
            <DeleteTwoTone twoToneColor='red' />
          </Button>
        </Col>
      </Row>
    </div>

    return display
  }

  return (
    <div>
      <Card title={screen > 425 ? 'Your search history' : 'History'} style={{zIndex:10, position: 'relative'}} headStyle={{fontSize:screen > 425 ? '2.5rem' : '1.5rem'}}>
        {history.length !== 0 ? history.map((data,index) => {
          return (
            <ListItem title={data.terms[0].value} children={_renderItemChild} data={{...data, index}} key={index} />
          )
        }) : <div>Search for a location in <i>Maps</i> to get a history.</div>}
      </Card>
    </div>
  )
}
