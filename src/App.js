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
				<input type="checkbox" class="side" id="side" checked={this.state.checked} />
				<div class="onoff">
					<span class="off">OFF</span>
					<span class="on">ON</span>
				</div>
				<label class="front" for="side"></label>

				<div class="wall"></div>
				<div class="switchplate">
					<div class="screw top">&ndash;</div>
					<div class="screw bottom">&ndash;</div>
				</div>
				<div class="switch"></div>
			</div>
		);
	}

}

