import React, { Component } from 'react'

const withCounter = (WarppedComponent, incrementValue)=>{
    class WithCounter extends Component {
        constructor(props) {
            super(props)
            this.state = { count: 0 }
        }
    
        incrementCountHandler = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementValue}
            })
        }
        render(){
            console.log(this.props.name)
            return <WarppedComponent count={this.state.count}
             incrementCountHandler={this.incrementCountHandler} {...this.props}/>
        }
    }
    return WithCounter;
}

export default withCounter;