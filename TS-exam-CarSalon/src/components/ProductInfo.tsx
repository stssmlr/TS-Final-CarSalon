import { LeftOutlined } from '@ant-design/icons';
import { Image, Tag, Flex, Skeleton, Space, Button, Col, Row  } from 'antd';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductModel } from '../models/cars';

const productsApi = import.meta.env.VITE_PRODUCTS_API;


type Params = {
    id: string;
};

export default function ProductInfo() {
    const [item, setItem] = useState<ProductModel | null>(null);
    const { id } = useParams<Params>();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(productsApi + id)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    return (
        <div>
            <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftOutlined />}></Button>
            {
                item ?
                    <div>
                        <Row>
                            <Col span={12} >
                            <div className='colF'>
                            <h2>{item.name}</h2>
                                <p>{item.categoryName}</p>
                                <hr />

                                <p>Price: {item.price}$</p>
                                <p>Discount: {item.discount}%</p>
                                <p>Availability: {item.quantity > 0 ?
                                <Tag color="green">{item.quantity}</Tag>
                                :
                                <Tag color="volcano">Out of Stock</Tag>}</p>

                                
                            </div>
                                
                            </Col>
                            <Col span={12}>
                                <Image className='carImageInfo'
                                width={700}
                                src={item.imageUrl}
                                />
                                <p>Description: <hr/>{item.description}</p>
                            </Col>
                         </Row>
                        
                    </div>
                    :
                    <Flex gap="middle" vertical>
                        <Space>
                            <Skeleton.Input active />
                            <Skeleton.Input active />
                        </Space>
                        <Skeleton
                            paragraph={{
                                rows: 0,
                            }}
                        />
                        <Skeleton.Image />
                        <Skeleton active />
                    </Flex>
            }
        </div >
    )
}
