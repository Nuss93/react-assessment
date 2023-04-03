import React from 'react'
import { Dropdown, Button, Space, message, Row, Col, Typography } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function Header(props) {
    const handleMenuClick = (e) => {
        let select = Number(e.key)
        // console.log('click', e);
        switch (select) {
            case 1:
                message.info('Switched to Maps');
                break;
            case 2:
                message.info('Switched to History');
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
    <Row justify={'space-between'} align={'middle'}>
        <Col>
            <Title>The Map</Title>
        </Col>
        <Col>
            <Dropdown menu={menuProps}>
                <Button>
                    <Space>
                        Button
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </Col>
    </Row>
  )
}
