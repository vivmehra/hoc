import React, {Component} from 'react'
import withCounter from '../hoc/withCounter'

class HoverComponent extends Component {
    render(){
        const { count, incrementCountHandler } = this.props
        return <h1 onMouseOver = {incrementCountHandler}>Hovered {count} times</h1>
    }
}
export default withCounter(HoverComponent, 10);