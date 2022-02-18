import React from 'react'
import Page from './page'

import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { grey, blue } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import MenuIcon from '@mui/icons-material/Menu'
import ImportantIcon from '@mui/icons-material/ImportantDevices'
import CommuteIcon from '@mui/icons-material/Commute'
import LandscapeIcon from '@mui/icons-material/Landscape'
import Avatar from '@mui/material/Avatar'

function HomePage(props) {

    const matches = useMediaQuery((theme) => theme.breakpoints.up("md"))

    const theme = createTheme({
        palette: {
          mode: 'light',
        },
        typography: {
            svsTitle: {
                fontSize: '2.5em',
                fontWeight: 'bold',
                color: '#000',
                lineHeight: '140%'
            },
            svsTitle3: {
                fontSize: '2.1em',
                fontWeight: 'bold',
                color: '#000',
                lineHeight: '140%',
                display: 'block',
            },
            svsTitleBlue: {
                fontSize: '2.5em',
                fontWeight: 'bold',
                color: blue[500],
                lineHeight: '140%'
            },
            svsSubtitle: {
                fontSize: '1.2em',
                fontWeight: 'bold',
                color: '#000',
                lineHeight: '140%',
                display: 'block'
            },
            svsSubtitle3: {
                fontSize: '1.2em',
                fontWeight: 'bold',
                color: '#666',
                lineHeight: '140%',
                display: 'block',
                textTransform: 'uppercase',
            },
            svsText: {
                fontSize: '1em',
                color: '#666',
                lineHeight: '140%'
            },
            svsText2: {
                fontSize: '0.8em',
                color: '#666',
                lineHeight: '100%'
            },
            svsText3: {
                fontSize: '1em',
                color: '#666',
                lineHeight: '140%',
                display: 'block',
            },
        }
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box 
                sx={{
                    position: 'relative',
                    backgroundColor: grey[100],
                    minHeight: 'calc(100vh - 50px)',
                    padding: 1,
                    borderRadius: '5px',
                }}>
                    <Box>
                        {
                            !matches &&
                            <Box>
                                <IconButton onClick={props.onMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        }
                        <Box sx={{
                            position: 'relative',
                            padding: 2,
                            height: { xs: '300px', sm: '350px'},
                        }}>
                            
                            <Box 
                                sx={{
                                    width: {xs: '100%', sm: '320px'},
                                    position: {xs: 'relative', sm: 'absolute'},
                                    left: {xs: 0, sm: '50px'},
                                    top: {xs: 0, sm: '50px'},
                                    zIndex: 5,
                            }}>
                                <Box>
                                    <Typography variant="svsTitle">Turn your dream into </Typography>
                                    <Typography variant="svsTitleBlue">reality.</Typography>
                                </Box>
                                <Box sx={{marginTop: 2}}>
                                    <Typography variant="svsText">Lorem ipsum decorum este quezo de bola, donde esta con makaroni de kampanilla.</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    marginTop: 3,
                                }}>
                                    <Button sx={{marginRight: 1}} variant="contained" disableElevation>Get Started</Button>
                                    <Button variant="outlined">Documentation</Button>
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box sx={{
                            position: 'relative',
                            padding: 2,
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Box sx={{
                                width: {xs: '100%', sm: 'calc(100% - 60px)'}
                            }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{padding: 1, textAlign: 'center'}}>
                                            <Avatar sx={{margin: 'auto', marginBottom: 2}}><ImportantIcon
                                            sx={{color: blue[500]}} /></Avatar>
                                            <Typography variant="svsSubtitle">Developer Build</Typography>
                                            <Typography variant="svsText2">
                                                Lorem ipsum dolor esta condesada.
                                                Lake tikikaka consome de tirol champorado, burrito curacha.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{padding: 1, textAlign: 'center'}}>
                                            <Avatar sx={{margin: 'auto', marginBottom: 2}}><CommuteIcon
                                            sx={{color: blue[500]}} /></Avatar>
                                            <Typography variant="svsSubtitle">Modern design</Typography>
                                            <Typography variant="svsText2">
                                                Donde esta es santa klause noche buenas.
                                                Jambalaya sausage shrimp boil with mustard tacos.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{padding: 1, textAlign: 'center'}}>
                                            <Avatar sx={{margin: 'auto', marginBottom: 2}}><LandscapeIcon
                                            sx={{color: blue[500]}} /></Avatar>
                                            <Typography variant="svsSubtitle">Design blocks</Typography>
                                            <Typography variant="svsText2">
                                                Blue suede shoes contradiction but no puede.
                                                Paquito el diaz con leche teng sleng.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        
                        <Box sx={{
                            position: 'relative',
                            padding: 3,
                            marginTop: 4,
                        }}>
                            <Box sx={{textAlign: 'center'}}>
                                <Typography variant="svsSubtitle3">Product Feature</Typography>
                                <Typography sx={{marginBottom: 2}} variant="svsTitle3">The work remotely freedom pattern improvisation</Typography>
                                <Typography sx={{marginBottom: 4}} variant="svsText3">
                                    Lorem ipsum dolor watercrest in salada con patola.
                                    Condensada de kampanilla alahambra turrones.
                                    Marquessas longan fuschia dela colores et tu Brute chienes.
                                </Typography>
                                <Button disableElevation variant="contained">Purchase Now</Button>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
            </ThemeProvider>
        </>
    )
}

export default function Home(props) {
    return (
        <Page Component={HomePage} {...props} />
    )
}