import React from 'react';
import './App.css';
import {redibase} from './redibase'


export default class App extends React.Component {
	componentDidMount() {
		redibase.on('mode', (old_value, new_value) => {
			this.setState({checked: new_value})
		})

	}
	state = {
		checked: false
	}
	render() {
		return (
			<div className="App" onClick={() => { redibase.set('mode', !this.state.checked) }}>
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

