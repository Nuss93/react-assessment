import React, { useState } from 'react'
import { Dropdown, Button, Space, message, Row, Col, Typography } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function Header(props) {
    const [current, setCurrent] = useState('Maps')

    const handleMenuClick = (e) => {
        let select = Number(e.key)
        // console.log('click', e);
        switch (select) {
            case 1:
                setCurrent('Maps');
                message.info('Switched to Maps', 0.7);
                break;
            case 2:
                setCurrent('Maps NPM Package');
                message.info('Switched to Maps 2', 0.7);
                break;
            case 3:
                setCurrent('History');
                message.info('Switched to History', 0.7);
                break;
            default:
                break;
        }
        props.selectParentFunction(select)
    };
    const items = [
        {
            label: 'Maps',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'Maps NPM Package',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: 'History',
            key: '3',
            icon: <UserOutlined />,
        }
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
  return (
    <Row justify={'space-between'} align={'middle'} style={{zIndex:10, position: 'relative'}}>
        <Col>
            <Title style={{margin:0}}>The Map</Title>
        </Col>
        <Col>
            <Dropdown menu={menuProps}>
                <Button>
                    <Space>
                        {current}
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </Col>
    </Row>
  )
}
