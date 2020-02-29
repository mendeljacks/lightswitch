import React from 'react';
import './App.css';
import socketIOClient from 'socket.io-client'
import axios from './axios'
export default class App extends React.Component {
	componentDidMount() {
		const socket = socketIOClient('http://localhost:4411')
        socket.on('mode', data => {
			console.log(data); 
			this.setState({ checked: data })
		})
	

	}
	state = {
		checked: false
	}
	render() {
		return (
			<div className="App" onClick={() => { axios.post('/mode', {mode: !this.state.checked}) }}>
				<input type="checkbox" className="side" id="side" checked={this.state.checked} onChange={()=>{}} />
				<div className="onoff">
					<span className="off">OFF</span>
					<span className="on">ON</span>
				</div>
				<label className="front" htmlFor="side"></label>

				<div className="wall"></div>
				<div className="switchplate">
					<div className="screw top">&ndash;</div>
					<div className="screw bottom">&ndash;</div>
				</div>
				<div className="switch"></div>
			</div>
		);
	}

}

