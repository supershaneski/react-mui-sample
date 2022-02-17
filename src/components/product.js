import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'

import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

import { grey, blue } from '@mui/material/colors'

const itemData = [
    {
        img: `${process.env.PUBLIC_URL}/images/image01.jpg`,
        title: 'Train Train',
        rows: 2,
        cols: 2,
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image02.jpg`,
        title: 'Capture the mic',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image03.jpg`,
        title: 'Pikachu hug',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image04.jpg`,
        title: 'Liberte',
        cols: 2,
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image05.jpg`,
        title: 'Freedom',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image06.jpg`,
        title: 'Contemplating',
        rows: 2,
        cols: 2,
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image07.jpg`,
        title: 'Numa numa',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image08.jpg`,
        title: 'Yellow smoke',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image09.jpg`,
        title: 'Shogun',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image10.jpg`,
        title: 'Soyuz',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image11.jpg`,
        title: 'Mr Brexit',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image12.jpg`,
        title: 'Lamb',
        cols: 2,
    },
]

function Product(props) {

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
                color: blue[500],
                lineHeight: '140%'
            },
            svsToptext: {
                fontSize: '0.9em',
                fontWeight: 'bold',
                color: grey[600],
                lineHeight: '140%',
                display: 'block'
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
                <Box 
                sx={{
                    position: 'relative',
                    backgroundColor: grey[100],
                    minHeight: 'calc(100vh - 50px)',
                    borderTopRightRadius: '5px',
                    borderTopLeftRadius: '5px',
                    overflow: 'hidden',
                }}>
                    <Box sx={{padding: 1}}>
                        {
                            !matches &&
                            <Box>
                                <IconButton onClick={props.onMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        }
                        <Box sx={{
                            padding: '0 1em',
                        }}>
                            <Box sx={{marginTop: {xs: 1, sm: 2}}}>
                                <Typography variant="svsToptext">An Inspiring Series</Typography>
                                <Typography variant="svsTitle">Modern </Typography>
                                <Typography variant="svsTitleBlue">Products</Typography>
                            </Box>
                            <Box>
                                <ImageList
                                sx={{ width: { xs: '100%', sm: '100%' }, height: 'auto' }}
                                variant="quilted"
                                cols={4}
                                rowHeight={121}
                                >
                                    {
                                        itemData.map((item) => (
                                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                                <img src={item.img} alt={item.title} loading="lazy" />
                                                <ImageListItemBar title={item.title} />
                                            </ImageListItem>
                                        ))
                                    }
                                </ImageList>
                            </Box>
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

const styles = {
    download: {
        marginRight: 5,
        width: 'auto',
        height: 45,
    }
}

export default Product