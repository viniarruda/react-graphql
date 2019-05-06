import React from 'react'
import {
	connect
} from 'react-redux'
import {
	testApi
} from '../../../store/products/thunks'

class Home extends React.Component {
	componentDidMount() {
		this.props.testApi();
	}
	render() {
		const { products } = this.props
		return ( 
			<div>
				<h1>Home</h1> 
				{
					!products.loading && products.list &&
						<div>
							<h2>{products.list.repositoryOwner.repository.stargazers.totalCount}</h2>
							<p>{products.list.repositoryOwner.repository.watchers.totalCount}</p>
						</div>
				}
				{
					console.log()
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	products: state.products
})

export default connect(mapStateToProps, {
	testApi
})(Home)