import React from 'react'
import {Link} from 'react-router-dom'

function BreadCrumb({ paths }) {
	return (
		<ul className="ml-56 py-4 text-sm uppercase text-gray-700 dark:text-gray-300">
			{paths.map((path, i) => (
				<Link to={path.location}>
					{i !== 0 && " | "}{path.name}
				</Link>
			))}
		</ul>
	)
}
export default BreadCrumb