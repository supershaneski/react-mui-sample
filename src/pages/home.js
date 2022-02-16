import React from 'react'
import withLayout from '../layout/withLayout'
//import { CustomTheme } from '../lib/custom-theme'
import { getLoginCredentials } from '../lib/utils'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
/*
import Container from '@mui/material/Container'

import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'

import CutIcon from '@mui/icons-material/ContentCut'
import CopyIcon from '@mui/icons-material/ContentCopy'
import PasteIcon from '@mui/icons-material/ContentPaste'
import CloudIcon from '@mui/icons-material/Cloud'

import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ApartmentIcon from '@mui/icons-material/Apartment'
import SettingIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'

import IconButton from '@mui/material/IconButton'
*/
import Drawer from '@mui/material/Drawer'

//import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
//import { grey } from '@mui/material/colors'

import Main from '../components/main'
import Menu from '../components/menu'

function Page() {

    const [loaded, setLoaded] = React.useState(false)
    const [openDrawer, setOpenDrawer] = React.useState(false)

    const matches = useMediaQuery((theme) => theme.breakpoints.up("md"))

    React.useEffect(() => {

        const login = getLoginCredentials()

        if(!login) {

            window.location.href = "/login"
            return;

        }

        setLoaded(true)

    }, [])

    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    const handleOpenDrawer = () => {
        setOpenDrawer(true)
    }

    const handleLogout = () => {

        window.location.href = "/login"

    }

    if(!loaded) {

        return <div></div>

    }

    return (
        <>
            <Box 
                component="main" 
            >
                <Grid container>
                    {
                        matches &&
                        <Grid item md={3} xs={0}>
                            <Box sx={{
                                minHeight: 'calc(100vh - 50px)',
                            }}>
                                <Box sx={{
                                    padding: 2,
                                }}>
                                    <Menu onLogout={handleLogout} />
                                </Box>
                            </Box>
                        </Grid>
                    }
                    <Grid item md={9} xs={12}>
                        <Main onMenuOpen={handleOpenDrawer} />
                    </Grid>
                </Grid>
                <Drawer
                    anchor={'left'}
                    open={openDrawer}
                    onClose={handleCloseDrawer}
                >
                    <Box sx={{
                        width: 250,
                        padding: 2,
                    }}>
                        <Menu onLogout={handleLogout} />
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default withLayout(Page)