import { Link } from '@material-ui/core';
import clsx from 'clsx'
import React from 'react'
import useStyle from './style'
/**
* @author
* @function LinkButton
**/

const LinkButton = (props) => {
    const classes = useStyle();
  return(
    <Link href={props.Link}
    className={clsx(classes.activeLink,props.linkStyle)}
    >
        {props.text}
    </Link>
   )

 }

export default LinkButton