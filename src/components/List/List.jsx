import React from 'react'
import './List.scss'
import classNames from 'classnames'
import SideBar from '../SideBar/SideBar'
import removeSvg from '../../assets/img/remove.svg'
import Badge from '../Badge'


const List = ({ items, isRemovable, onClick }) => {
	// console.log(items,isRemovable)
	return (
		<ul onClick={onClick} className="list">
			{items.map((item, index) => (
				<li key={index} className={classNames(item.className, { 'active': item.active })} >
					<i>{item.icon ? (
						item.icon
					) : <Badge color={item.color} />}
					</i>
					<span>{item.name}</span>
					{isRemovable && (
						<img className='list__remove-icon' src={removeSvg} alt="Remove Icon" />
          )}
				</li>
			))}
		</ul>
	)
}

export default List