import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'
import { useHistory } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col md={3} className={'mt-3'} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image src={process.env.REACT_APP_API_URL + device.img} width={150} height={150} />
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div className="text-black-50">Device...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
