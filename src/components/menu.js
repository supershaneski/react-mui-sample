import React from 'react'

import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ApartmentIcon from '@mui/icons-material/Apartment'
import LogoutIcon from '@mui/icons-material/Logout'

function Menu(props) {
    return (
        <>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Member</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ApartmentIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Company</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={props.onLogout}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Sign Out</ListItemText>
                </MenuItem>
            </MenuList>
        </>
    )
}

export default Menu