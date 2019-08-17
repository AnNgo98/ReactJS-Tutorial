import React from 'react';
import './traffic-light.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE =1;
const GREEN =2;

class TrafficLight extends React.Component{
    
    render(){
        const {currentCorlor} = this.props;
        return(     
            <div className="TrafficLight">
            {/* classnames hiển thị khi thỏa mãn active */}
                <div className={classNames('bulb','red',{
                    active: currentCorlor ===RED
                })}></div>
                <div className={classNames('bulb','orange',{
                    active: currentCorlor ===ORANGE
                })}></div>
                <div className={classNames('bulb','green',{
                    active: currentCorlor ===GREEN
                })}></div>
            </div>
        );
    }
}
export default TrafficLight;