import React from 'react'
import ListItem from '../components/ListItem'
import { Card } from 'antd'

const sampleData = [
  {
    "description": "KLCC, Kuala Lumpur City Centre, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
    "matched_substrings": [
        {
            "length": 4,
            "offset": 0
        }
    ],
    "place_id": "ChIJH5xmLdE3zDERKa4a_IywVck",
    "reference": "ChIJH5xmLdE3zDERKa4a_IywVck",
    "structured_formatting": {
        "main_text": "KLCC",
        "main_text_matched_substrings": [
            {
                "length": 4,
                "offset": 0
            }
        ],
        "secondary_text": "Kuala Lumpur City Centre, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia"
    },
    "terms": [
        {
            "offset": 0,
            "value": "KLCC"
        },
        {
            "offset": 6,
            "value": "Kuala Lumpur City Centre"
        },
        {
            "offset": 32,
            "value": "Kuala Lumpur"
        },
        {
            "offset": 46,
            "value": "Federal Territory of Kuala Lumpur"
        },
        {
            "offset": 81,
            "value": "Malaysia"
        }
    ],
    "types": [
        "shopping_mall",
        "point_of_interest",
        "establishment"
    ],
    "lat": 3.1577167,
    "lng": 101.7121716
  }
]

export default function History() {
  const _renderItemChild = (data) => {
    console.log('here', data);
    let display = <div style={{backgroundColor:'red', padding:'2rem'}}>{data.description}</div>
    return display
  }
  return (
    <div>
      <Card title='Things you have searched for' style={{zIndex:10, position: 'relative'}} headStyle={{fontSize:'2.5rem'}}>
        {sampleData.map((data,index) => {
          return (
            <ListItem title={data.terms[0].value} children={_renderItemChild} data={data} key={index} />
          )
        })}
      </Card>
    </div>
  )
}
