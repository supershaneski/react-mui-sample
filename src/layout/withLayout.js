import React from 'react'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
//import Container from '@mui/material/Container'

import Button from '@mui/material/Button'
//import ButtonGroup from '@mui/material/ButtonGroup'

import Typography from '@mui/material/Typography'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
//import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
//import FormGroup from '@mui/material/FormGroup'

import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'

import { CustomTheme } from '../lib/custom-theme'

export default function withLayout(WrappedComponent) {
    return class extends React.Component {

        static contextType = CustomTheme

        constructor(props) {
            
            super(props)
            
            this.state = {
                openDialog: false,
            }

            this.handleDialogOpen = this.handleDialogOpen.bind(this)
            this.handleDialogClose = this.handleDialogClose.bind(this)
            
        }

        handleDialogOpen() {
            this.setState({
                openDialog: true,
            })
        }
    
        handleDialogClose() {
            this.setState({
                openDialog: false,
            })
        }

        render() {

            //console.log("render me")
            
            const [value, setValue] = this.context

            /*
            <Box component="nav" sx={{
                        width: { sm: 256 },
                        flexShrink: { sm: 0 },
                    }}>
                    <Box sx={{
                        //backgroundColor: 'chartreuse',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    */

            const appName = `${process.env.REACT_APP_NAME} v${process.env.REACT_APP_VERSION}`

            return (
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={11}>
                            <Box sx={{
                                padding: 1,
                            }}>
                                <Typography variant="caption">{ appName }</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1} sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <IconButton onClick={this.handleDialogOpen}>
                                <SettingsIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box>
                                <WrappedComponent {...this.props} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Dialog
                        fullWidth={true}
                        maxWidth={'sm'}
                        open={this.state.openDialog}
                        onClose={this.handleDialogClose}
                        aria-labelledby="custom-dialog-title"
                    >
                        <DialogTitle id="custom-dialog-title">Settings</DialogTitle>
                        <DialogContent>
                            <FormControl fullWidth>
                                <FormLabel>Display Mode</FormLabel>
                                <RadioGroup row value={parseInt(value)} onChange={(e) => setValue(parseInt(e.target.value))}>
                                    <FormControlLabel value={0} control={<Radio />} label="Auto" />
                                    <FormControlLabel value={1} control={<Radio />} label="Light" />
                                    <FormControlLabel value={2} control={<Radio />} label="Dark" />
                                </RadioGroup>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleDialogClose}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            )
        }
    }
}