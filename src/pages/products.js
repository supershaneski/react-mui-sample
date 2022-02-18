import React from 'react'
import Page from './page'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { grey, blue } from '@mui/material/colors'

import Modal from '@mui/material/Modal'
//import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

import InfoIcon from '@mui/icons-material/Info'
import MenuIcon from '@mui/icons-material/Menu'

const styles = {
    download: {
        marginRight: 5,
        width: 'auto',
        height: 45,
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs: '90%', sm: 500 },
        boxShadow: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: 'relative',
        width: '100%',
        height: 'minmax(auto, 90%)',
        objectFit: 'cover',
    }
}

const itemData = [
    {
        img: `${process.env.PUBLIC_URL}/images/image01.jpg`,
        title: 'Train Train',
        text: 'Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do tempor labore. Compostela valley si all continents except ranging across widespread group.',
        rows: 2,
        cols: 2,
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image02.jpg`,
        title: 'Capture the mic',
        text: 'The conference lorem ipsum de color lavandera y collada mojito con patola. Mikasa y casas don henrique casanova ruben sandwhich salada lettuce.'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image03.jpg`,
        title: 'Pikachu hug',
        text: 'Widespread hug and lorem ipsum dolor quezo de bola uniqlo gap. Vitamin D in sunshine and wave sunshine red camote forum hugo.'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image04.jpg`,
        title: 'Liberte',
        text: 'In the city focus lorem ipsum dolor quezodillas camote. Garden secret martillo focus de calabaza bottled. June and somewhere year dijon mustard curry rice.',
        cols: 2,
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image05.jpg`,
        title: 'Freedom',
        text: 'Brave heart in scotland freedom shout lorem ipsum dolor con patola. Currently quezo de bola caramel purin and nata de coco incident utility.'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image06.jpg`,
        title: 'Contemplating',
        text: 'In the car, Ghosn is lorem ipsum dolor et consecutetur adispiscing elit sed eiusmod tempor. Ut enim ad minim veniam quis, nostrud ullamo laboris velit dolore.',
        rows: 2,
        cols: 2,
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image07.jpg`,
        title: 'Numa numa',
        text: 'Sanders democratic numa numa lorem ipsum dolor dance in estuary. Direction quezo de bola saint guidance huge profit.'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image08.jpg`,
        title: 'Yellow smoke',
        text: 'The vest is green but yellow lorem ipsum dolor quezo de bola. Protest in avenue solo kayaking green avenues.'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image09.jpg`,
        title: 'Shogun',
        text: 'Space earth the moon lorem ipsum dolor et camote quezo de bola. Huge fire in the refinery water is dolor sit media venture capitalist.',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image10.jpg`,
        title: 'Soyuz',
        text: 'In Edo castle the lorem ipsum dolor quesadilla camote pikachu domontes. Easy fuller the shine build venture shamilla justed miodeia.',
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image11.jpg`,
        title: 'Mr Brexit',
        text: 'Great Britain in Manchester lorem ipsum dolor quezo de campanilla. Fuego del toro si watero nullish contemplation.'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/image12.jpg`,
        title: 'Lamb',
        text: 'Jingisukan in daruma white lamb shoyu ramen kare raisu. Olympic while heat duracell bite mostly polenta hollens.',
        cols: 2,
    },
]

function Product(props) {

    const matches = useMediaQuery((theme) => theme.breakpoints.up("md"))

    const [isModalOpen, setModalOpen] = React.useState(false)
    const [modalItem, setModalItem] = React.useState(null)

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

    const handleItemClick = (item) => {
        setModalItem(item)
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }
    
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
                                                <ImageListItemBar 
                                                    title={item.title} 
                                                    actionIcon={
                                                        <IconButton onClick={() => handleItemClick(item)} sx={{color: '#9999'}}>
                                                            <InfoIcon />
                                                        </IconButton>
                                                    }
                                                />
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
                <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                >
                    <Box sx={styles.modal}>
                    {
                        modalItem &&
                        <Card>
                            <CardMedia 
                            component="img"
                            image={modalItem.img}
                            alt={modalItem.title}
                            sx={{height: {xs: 300, sm: 500}}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">{ modalItem.title }</Typography>
                                <Typography variant="body2" color="text.secondary">{ modalItem?.text || '' }</Typography>
                            </CardContent>
                        </Card>
                    }
                    </Box>
                </Modal>
            </ThemeProvider>
        </>
    )
}

                /*
                <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                >
                    <Box sx={styles.modal}>
                    {
                        modalItem &&
                        <Box sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img style={styles.image} title={modalItem.title} src={modalItem.img} />
                        </Box>
                    }
                    </Box>
                </Modal>
                */

export default function Products(props) {
    return (
        <Page Component={Product} {...props} />
    )
}