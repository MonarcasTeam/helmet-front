import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

export const BarraBuscar = () => {

    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = (value) => console.log(value);

    return (
            <Space direction="vertical">
                <Search
                    placeholder="Buscar usuario"
                    allowClear
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                />
            </Space>
    )
}
