import { Avatar, Badge, Icon, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import React from 'react';
import { useHistory } from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { pagePaths } from '../../Utils/Constant';
import useStyles from './style';

/**
* @author
* @function CustomDrawer
**/

const CustomDrawerMenu = (props) => {
	const classes = useStyles();
	let history = useHistory();
	const currentRoute = history.pathname;
	console.log('===> currentRoute: ', currentRoute);



	const menus = [
		{
			index: 0,
			avatar: '/assets/logo/overview.svg',
			text: 'OverView',
			link: pagePaths.overview,
		},

		{
			index: 2,
			avatar: '/assets/logo/bitcoin.svg',
			text: 'User',
			link: pagePaths.user,
			
		},
		{
			index: 3,
			avatar: '/assets/logo/trade.svg',
			text: 'Trade',
			link: pagePaths.trade,
			notification: 25
		},

		{
			index: 4,
			avatar: '/assets/logo/wallet.svg',
			text: 'Wallet',
			link: pagePaths.wallet,
			notification: 0
		},
		{
			index: 5,
			avatar: '/assets/logo/transactions.svg',
			text: 'Transactions',
			link: pagePaths.transactions,
		},
		{
			index: 4,
			avatar: '/assets/logo/statics.svg',
			text: 'Statistics',
			link: pagePaths.statistics,
		},
		{
			index: 5,
			avatar: '/assets/logo/settings.svg',
			text: 'Settings',
			link: pagePaths.settings,
		},

	];

	const renderMenus = () => {
		return menus.map((obj) => (
			<ListItem
				button
				key={obj.index}
				onClick={() => history.push(obj.link)}
				activeClassName={obj.link === currentRoute ? classes.active : ''}
				className={classes.listItem}
			>      
			<ListItemAvatar>
			 <Avatar src={obj.avatar} variant="square"/>			
			</ListItemAvatar>
				
			<ListItemText primary={obj.text} className={classes.listText} />
				{ (obj.notification &&  obj.notification !== 0) ? <Badge badgeContent={obj.notification}  color="primary" className={classes.badgeStyle} ></Badge> : null}
			</ListItem>
		));
	};



	return (
		<div>
			{renderMenus()}
		</div>
	)

}

export default CustomDrawerMenu;