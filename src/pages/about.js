import React from 'react'
import Page from './page'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { grey, blue } from '@mui/material/colors'

import MenuIcon from '@mui/icons-material/Menu'

const styles = {
    download: {
        marginRight: 5,
        width: 'auto',
        height: 45,
    }
}

function AboutUs(props) {

    const matches = useMediaQuery((theme) => theme.breakpoints.up("md"))

    const theme = createTheme({
        palette: {
            mode: 'light',
        },
        typography: {
            svsTitle: {
                fontSize: '2em',
                fontWeight: 'bold',
                color: '#000',
                lineHeight: '140%'
            },
            svsTitleBlue: {
                fontSize: '2em',
                fontWeight: 'bold',
                color: '#ffffff',
                lineHeight: '140%'
            },
            svsToptext: {
                fontSize: '0.9em',
                fontWeight: 'bold',
                color: '#ffffff',
                lineHeight: '140%',
                display: 'block'
            },
            svsMaintext: {
                fontSize: '1.2em',
                color: '#000',
                lineHeight: '140%',
            },
            svsTopicTitle: {
                fontSize: '1.1em',
                fontWeight: 'bold',
                color: '#333',
                lineHeight: '140%',
                display: 'block',
            },
            svsTopicText: {
                fontSize: '1em',
                color: '#999',
                lineHeight: '140%',
                display: 'block',
            },
            svsBlueTopicTitle: {
                fontWeight: 'bold',
                fontSize: '1.2em',
                color: '#FFF',
                lineHeight: '140%',
                display: 'block',
            },
            svsBlueTopicText: {
                fontSize: '1em',
                color: '#FFF',
                lineHeight: '140%',
                display: 'block',
            },
            svsFooter: {
                fontSize: '0.9em',
                color: '#FFF',
            },
            svsCopyright: {
                fontSize: '0.9em',
                color: '#FFF',
            },
        },    
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    position: 'relative',
                    backgroundColor: grey[100],
                    minHeight: 'calc(100vh - 50px)',
                    borderTopRightRadius: '5px',
                    borderTopLeftRadius: '5px',
                    overflow: 'hidden',
                }}>
                    <Box sx={[{
                        position: 'relative',
                        backgroundImage: 'linear-gradient(to bottom, #2196f3, #f5f5f5)',
                        padding: 1,
                        height: 300,
                        overflow: 'hidden',
                        zIndex: 1,
                        /*'&::before': {
                            backgroundColor: '#f5f5f566',
                            borderRadius: {xs:'150px', sm:'170px'},
                            content: '""',
                            position: 'absolute',
                            left: {xs:-300, sm: -150},
                            top: {xs:-120, sm: -200},
                            width: {xs:500, sm: 600},
                            height: {xs:500, sm: 600},
                            transition: 'all 1s',
                            animation: 'wave 5s infinite linear',
                            zIndex: 1,
                        },
                        '&::after': {
                            backgroundColor: '#f5f5f566',
                            borderRadius: {xs:'160px', sm: '150px'},
                            content: '""',
                            position: 'absolute',
                            left: {xs:-150, sm: -100},
                            top: {xs:-50, sm: -100},
                            width: {xs:400, sm: 500},
                            height: {xs:400, sm: 500},
                            transition: 'all 1s',
                            animation: 'wave2 5s infinite -1s linear',
                            zIndex: 2,
                        },
                        '@keyframes wave': {
                            "0%": {
                                transform: 'rotate(180deg)',
                            },
                            "100%": {
                                transform: 'rotate(360deg)',
                            }
                        },
                        '@keyframes wave2': {
                            "0%": {
                                transform: 'rotate(180deg)',
                            },
                            "100%": {
                                transform: 'rotate(360deg)',
                            }
                        }*/
                    }]}>
                        <Box sx={[{
                            //backgroundColor: 'pink',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            zIndex: 1,
                            '&::before': {
                                backgroundColor: '#f5f5f566',
                                borderRadius: {xs:'150px', sm:'170px'},
                                content: '""',
                                position: 'absolute',
                                left: {xs:-300, sm: -150},
                                top: {xs:-120, sm: -200},
                                width: {xs:500, sm: 600},
                                height: {xs:500, sm: 600},
                                transition: 'all 1s',
                                animation: 'wave 5s infinite linear',
                                zIndex: 1,
                            },
                            '&::after': {
                                backgroundColor: '#f5f5f566',
                                borderRadius: {xs:'160px', sm: '150px'},
                                content: '""',
                                position: 'absolute',
                                left: {xs:-150, sm: -100},
                                top: {xs:-50, sm: -100},
                                width: {xs:400, sm: 500},
                                height: {xs:400, sm: 500},
                                transition: 'all 1s',
                                animation: 'wave2 5s infinite -1s linear',
                                zIndex: 2,
                            },
                            '@keyframes wave': {
                                "0%": {
                                    transform: 'rotate(180deg)',
                                },
                                "100%": {
                                    transform: 'rotate(360deg)',
                                }
                            },
                            '@keyframes wave2': {
                                "0%": {
                                    transform: 'rotate(180deg)',
                                },
                                "100%": {
                                    transform: 'rotate(360deg)',
                                }
                            }
                        }]}></Box>
                        {
                            !matches &&
                            <Box sx={{
                                position: 'relative',
                                zIndex: 10
                            }}>
                                <IconButton onClick={props.onMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        }
                        <Box sx={{
                            position: 'relative',
                            padding: '0 1em',
                            zIndex:10
                        }}>
                            <Box sx={{marginTop: {xs: 1, sm: 2}}}>
                                <Typography variant="svsToptext">A Symbiosis With Nature</Typography>
                                <Typography variant="svsTitle">Our Business </Typography>
                                <Typography variant="svsTitleBlue">Model</Typography>
                            </Box>
                        </Box>
                        <Box sx={{padding: '1em 1em',zIndex:10}}>
                            <Typography variant="svsMaintext">
                                Lorem ipsum dolor excelcius kite tesla camote dios.
                                Havana is banana de cuba tabacco si el fuego decasas supreme vision.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        padding: {xs:'1em 1em 3 em 1em', sm:'1em 1em 8em 1em'},
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Box sx={{
                            width: {xs: '90%', sm: '95%'}
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{
                                        position: 'relative',
                                        borderRadius: 1,
                                        backgroundColor: blue[200],
                                        height: {sm: 320},
                                        padding: 3,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        '&::before': {
                                            backgroundImage: `url('${process.env.PUBLIC_URL}/images/image01.jpg')`,
                                            backgroundSize: 'cover',
                                            borderRadius: 1,
                                            opacity: '0.1',
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                        }
                                    }}>
                                        <Box>
                                            <Typography variant="svsBlueTopicTitle">
                                                Mechanic Biosphere
                                            </Typography>
                                            <Typography variant="svsBlueTopicText">
                                                Lorem ipsum dolor con patatas y camote quezo de bola.
                                                Hulahoop sakana niku diaz mekeni tocino.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{padding: 1}}>
                                                <Typography variant="svsTopicTitle">
                                                    Full Responsive UX
                                                </Typography>
                                                <Typography variant="svsTopicText">
                                                    Lorem ipsum dolor esta con sobretes pelikula.
                                                    Dospera patola con patatas y tinola sobreher furgatorio todo los santos.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{padding: 1}}>
                                                <Typography variant="svsTopicTitle">
                                                    Immersize Environment
                                                </Typography>
                                                <Typography variant="svsTopicText">
                                                    Nikujyaga kare raisu tonkatsu so llama nodoame.
                                                    Mercado tomasito puritanica valejo.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{padding: 1}}>
                                                <Typography variant="svsTopicTitle">
                                                    Metaverse Ready
                                                </Typography>
                                                <Typography variant="svsTopicText">
                                                    Misoramen salada con patatas gurume to umaibo alacarte.
                                                    Sasson hiway or loberacion huber anapako banana.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{padding: 1}}>
                                                <Typography variant="svsTopicTitle">
                                                    AudioContext Media
                                                </Typography>
                                                <Typography variant="svsTopicText">
                                                    Texas instrument LED computer calculator Casio MK-10 sleng-teng riddim.
                                                    Under mi dynamic dancehall okada reggae.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{
                        backgroundColor: blue[500],
                        padding: 3,
                        marginTop: 10,
                    }}>
                        <Box>
                            <Typography variant="svsFooter">
                                Lorem ipsum dolor quezo de bola con carnitas, amet consecutetur adipiscing elit.
                                Auctor libero id et, in gravida.
                                Sit diam duis mauris nulla cursus alhambra erat con lectus.
                            </Typography>
                        </Box>
                        <Box sx={{marginTop: 1}}>
                            <img alt="Download from Apple AppStore" style={styles.download} src={`${process.env.PUBLIC_URL}/images/appstore_icon.png`} />
                            <img alt="Download from Google Play" style={styles.download} src={`${process.env.PUBLIC_URL}/images/googleplay_icon.png`} />
                        </Box>
                        <Box sx={{marginTop: 3}}>
                            <Typography variant="svsCopyright">
                                &copy; 2022 All rights reserved
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
        
    )
}

export default function About(props) {
    return (
        <Page Component={AboutUs} {...props} />
    )
}