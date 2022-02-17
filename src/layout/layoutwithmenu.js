import React from 'react'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'

import Menu from '../components/menu'

function LayoutWithMenu(props) {

    const matches = useMediaQuery((theme) => theme.breakpoints.up("md"))

    return (
        <Box 
            component="main"
            sx={{
                display: "flex",
            }}
        >
            {
                matches &&
                <Box>
                    <Box sx={{
                        width: 250,
                        minHeight: 'calc(100vh - 50px)',
                    }}>
                        <Box sx={{
                            padding: 2,
                        }}>
                            <Menu />
                        </Box>
                    </Box>
                </Box>
            }
            <Box sx={{
                flexGrow: 1,
            }}>
            {
                props.children
            }
            </Box>
            <Drawer
                anchor={'left'}
                open={props.isDrawerOpen}
                onClose={props.onDrawerClose}
            >
                <Box sx={{
                    width: 250,
                    padding: 2,
                }}>
                    <Menu />
                </Box>
            </Drawer>
        </Box>
    )
}

export default LayoutWithMenu