import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Task.module.css';

function Task(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div onClick={() => setIsCompleted(!isCompleted)}
         className ={
          classNames (
            styles.task, {
            [styles.completed] : isCompleted
                   }
                            )
         }>

        {props.text}
    </div>
  )
}

export default Task;