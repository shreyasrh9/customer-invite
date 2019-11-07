import React from 'react'
import { useDrop } from 'react-dnd'
import { Row, Col } from 'reactstrap'
const style = {
  height: '12rem',
  width: '70%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
const Dustbin = (props) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "box",
    drop: () => ({ name: 'Dustbin' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  let border="1px solid black"
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, border }}>
      {isActive ? 'Release to drop' : 
        <Row>
        <Col>
            <ul class="tags">
                {
                    props.tags.map(tag => {
                        return (
                            <li><a href="#" class="tag">{tag}</a></li>
                        )
                    })
                }
            </ul>
        </Col>
    </Row>
    }
    </div>
  )
}
export default Dustbin