import React from 'react';
import './App.css';
import socketIOClient from 'socket.io-client'
import axios, { API_URL } from './axios'
export default class App extends React.Component {
	state = {
		checked: false,
		user_count: ''
	}

	componentDidMount() {
		const socket = socketIOClient(API_URL)
        socket.on('mode', data => {
			this.setState({ checked: data })
		})
        socket.on('user_count', data => {
			this.setState({ user_count: data })
		})
	

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
					<center>
						<h4><span>{this.state.user_count}</span> users</h4>
					</center>
					<div className="screw top">&ndash;</div>
					<div className="screw bottom">&ndash;</div>
				</div>
				<div className="switch"></div>
			</div>
		);
	}

}

