import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function Orders(props)
{
	const state=useSelector(s=>s)
	const dispatch=useDispatch()

	const {orders}=state

	return <div>

		<h1>My Orders ({orders.length})</h1>
		<table>
			<thead>
				<tr>
					<th>title</th>
					<th>price</th>
					<th>photo</th>
					<th>discount</th>
				</tr>
			</thead>
			<tbody>
				{orders.map(x=><tr>
					<td>{x.title}</td>
					<td>{x.new}</td>
					<td>
						<img width={100} src={x.image} />
					</td>
					<td>{x.discount}</td>
				</tr>
				)}
			</tbody>
		</table>	

	</div>	
}
export default Orders;