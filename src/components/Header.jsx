import React, { useState } from 'react'
import logo from '../assets/img/logo.svg'
import { Dropdown, Button, Space, message, Row, Col  } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';

export default function Header(props) {
    const [current, setCurrent] = useState('Maps')

    const handleMenuClick = (e) => {
        let select = Number(e.key)

        switch (select) {
            case 1:
                setCurrent('Maps');
                message.warning('Switched to Maps', 0.7);
                break;
            case 2:
                setCurrent('History');
                message.warning('Switched to History', 0.7);
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
            label: 'History',
            key: '2',
            icon: <UserOutlined />,
        }
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
  return (
    <Row justify={'space-between'} align={'middle'} style={{zIndex:10, position: 'relative', marginBottom: '2rem'}}>
        <Col>
            <img src={logo} width={50} style={{backgroundColor:'black', borderRadius:'100%', padding:'10px 5px'}} />
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
