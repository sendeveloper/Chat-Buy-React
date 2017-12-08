import React from 'react'
import { Card, Button } from 'antd-mobile'

const Item = ({item, type}) => {
  let stateText = ''
  switch (item.state) {
    case 0:
      stateText = '等待接单'
      break
    case 1:
      stateText = '正在派送'
      break
    case 2:
      stateText = '订单已完成'
      break
    default:
      break
  }
  const countDesc = item.count > 1 ? ` 等${item.count}件` : ''
  return (
    <Card className='list-item'>
      <Card.Header
        title='YCK 的店'
        extra={<span>{stateText}</span>}
      />
      <Card.Body>
        <div className='card-body'>
          <div>{item.desc + countDesc }</div>
          <div>¥{item.price}</div>
        </div>
        
      </Card.Body>
      <Card.Footer extra={
        item.state !== 0 ? (
          <div >
            <Button type="ghost" inline size="small" >联系对方</Button>
            <Button type="ghost" inline size="small" style={{marginLeft: '8px'}} >确认送达</Button>
          </div>
        ) : null
      } 
      />
    </Card>
  )
}

export default Item