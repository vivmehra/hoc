import React, { Component } from 'react'
import withCounter from '../hoc/withCounter'

class ClickCounter extends Component {

    render() {
        const { count, incrementCountHandler } = this.props
        return <button onClick={incrementCountHandler}>
            {this.props.name} Clicked {count} times
            </button>
    }
}

export default withCounter(ClickCounter, 20);