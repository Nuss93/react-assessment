import { GithubFilled } from '@ant-design/icons'
import { Col, Row, Space } from 'antd'
import React from 'react'

export default function Footer() {
  return (
    <div style={{zIndex:10, position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem 0 1.5rem', background:'rgba(255, 255, 255,  0.4)'}} className="flex-center">
        <Col style={{marginRight:'1rem'}}>Nasreen | {new Date().getFullYear()}</Col>
        <Col>Github repo : <a href='https://github.com/Nuss93/react-assessment' target='_blank' style={{color:'black'}}><GithubFilled/></a></Col>
    </div>
  )
}