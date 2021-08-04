import { Button, FormControl, Input, InputAdornment } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

/**
* @author
* @function CustomSearchBox
**/

const CustomSearchBox = (props) => {
    const classes = useStyles();
    const { value, placeholder, onChange, btnProps } = props;
    return (
        <div className={classes.serchBox}>
            <FormControl className={classes.textField}>
                <Input
                    name="input"
                    startAdornment={
                        <InputAdornment position="end">
                            <img src="/assets/logo/Search-Icon.svg" alt="SearchIcon" />
                        </InputAdornment>
                    }
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange ? onChange : () => { }}
                />
            </FormControl>
            {btnProps && <Button className={classes.searchBtn}>Search</Button>}

        </div>
    )

}

export default CustomSearchBox