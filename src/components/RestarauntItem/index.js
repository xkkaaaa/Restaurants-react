import React, { useState } from 'react'
import cookTimeIcon from './icons/cookTime.svg'
import likeIcon from './icons/like.svg'
import busketIcon from './icons/cart.svg'
import ratingIcon from './icons/star.svg'
import kebabIcon from './icons/more.svg'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { setLike } from '../../store/user/actions'
import { useSelector } from 'react-redux'

const RestarauntItem = ({ id, name, image, price, cookTime, grade, filters }) => {
	const dispatch = useDispatch();
	const allLikedItems = useSelector(state => state.user.likedRestaurants)

	const handleLike = () => {
		dispatch(setLike(id))
		dispatch({ type: 'SET_LIKE_SAGA', allLikedItems })
	}

	return (
		<div className='restaraunt-item'>
			<div className='restaraunt-item__header'>
				<img className='restaraunt-item__image' src={image} alt='Burgers and Steaks' />
				<div className='restaraunt-item__cook-time'>
					<img src={cookTimeIcon} alt='cook Tike' />
					<span>{cookTime} min</span>
				</div>
				<div onClick={handleLike} className={`restaraunt-item__like ${allLikedItems.includes(id) ? 'liked' : ''}`}>
					<img src={likeIcon} alt='like icon' />
				</div>
			</div>
			<div className='restaraunt-item__bottom'>
				<div className='restaraunt-item__details'>
					<h3 className='restaraunt-item__name'>{name}</h3>
					<div>
						<div className='restaraunt-item__rating'>
							<img src={ratingIcon} alt='rating of the product' />
							<span>{grade}</span>
						</div>
						<div className='restaraunt-item__order'>
							<img src={busketIcon} alt='Order' />
							<span>Order from {price}$</span>
						</div>
					</div>
				</div>
				<div className='restaraunt-item__filters'>
					{filters.map((item, index) => {
						if (index < 3) {
							return <span key={item}>{item}</span>
						}
					})}
					<img src={kebabIcon} alt='Learn More' />
				</div>
			</div>
		</div>
	)
}

export default RestarauntItem
