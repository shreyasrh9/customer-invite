import React from 'react';
import { useDrag } from 'react-dnd'

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
  }

const Box = (props) => {
    const [{ isDragging }, drag] = useDrag({
      item: { name, type: "box" },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult()
        if (item && dropResult) {
            props.dropped(props.name)
        }
      },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    })
    const opacity = isDragging ? 0.4 : 1
    return (
      <div ref={drag} style={{ ...style, opacity }}>
        {props.name}
      </div>
    )
  }
  export default Box