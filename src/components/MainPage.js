import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
	render() {
		return (
			<div className="main-menu">
				<nav>
					<ul>
						<li><Link to='/'>Main page</Link></li>
						<li><Link to='/orderslist'>List of orders</Link></li>
						<li><Link to='/ordercreate'>Create order</Link></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default MainPage;