import React from 'react'

import Link from '@mui/material/Link'

import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import HomeIcon from '@mui/icons-material/Home'
//import PersonIcon from '@mui/icons-material/Person'
//import ApartmentIcon from '@mui/icons-material/Apartment'
import LogoutIcon from '@mui/icons-material/Logout'
//import StoreIcon from '@mui/icons-material/Store'
import SpaIcon from '@mui/icons-material/Spa'
import LanguageIcon from '@mui/icons-material/Language'

function Menu() {
    //<MenuItem onClick={props.onLogout}>
    return (
        <>
            <MenuList>
                <MenuItem sx={styles.menuItem}>
                    <Link href="/" sx={{display: 'flex'}} underline="none" color="inherit">
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem sx={styles.menuItem}>
                    <Link href="/products" sx={{display: 'flex'}} underline="none" color="inherit">
                        <ListItemIcon>
                            <SpaIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Modern Products</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem sx={styles.menuItem}>
                    <Link href="/about" sx={{display: 'flex'}} underline="none" color="inherit">
                        <ListItemIcon>
                            <LanguageIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Business Model</ListItemText>
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem sx={styles.menuItem}>
                    <Link href="/login" sx={{display: 'flex'}} underline="none" color="inherit">
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Sign Out</ListItemText>
                    </Link>
                </MenuItem>
            </MenuList>
        </>
    )
}

const styles = {
    menuItem: {
        padding: 2,
    }
}

export default Menu