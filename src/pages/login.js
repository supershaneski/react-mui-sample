import React from 'react'
import { CustomTheme } from '../lib/custom-theme'
import withLayout from '../layout/withLayout'
import { setCustomTheme } from '../lib/utils'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import CloseIcon from '@mui/icons-material/Close'
import ClearIcon from '@mui/icons-material/Clear'
import CancelIcon from '@mui/icons-material/Cancel'
import VisibleIcon from '@mui/icons-material/Visibility'
import NotVisibleIcon from '@mui/icons-material/VisibilityOff'
import LockIcon from '@mui/icons-material/LockOutlined'

function Page() {

    const [login, setLogin] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [loginError, setLoginError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [isRemember, setIsRemember] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false)

    const handleSignIn = () => {

        if(!login || login.length < 3) {
            setLoginError(true)
        }

        if(!password || password.length < 8) {
            setPasswordError(true)
        }

    }

    const handleLogin = (e) => {

        setLogin(e.target.value)
        setLoginError(false)

    }

    const handlePassword = (e) => {

        setPassword(e.target.value)
        setPasswordError(false)

    }

    const handleClear = () => {

        setLogin("")
        setLoginError(false)

    }

    const handleVisible = () => {

        setIsVisible(prev => !prev)

    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={0} sm={3}></Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{
                    //backgroundColor: '#faed23',
                    padding: {xs: 0, sm: '3em 0'},
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Paper sx={{
                        width: '100%',
                        boxShadow: { xs: 0, sm: 1 }
                    }}>
                        <Box sx={{
                            padding: { xs: 3, sm: 5 },
                        }}>
                            <Typography variant="h5" sx={{marginBottom: 2}}>Sign In</Typography>
                            <FormGroup>
                                <InputBase error={loginError} endAdornment={
                                    <IconButton onClick={handleClear}>
                                        <CancelIcon sx={styles.icon} />
                                    </IconButton>
                                } type="text" sx={styles.text} placeholder="Login" value={login} onChange={handleLogin} />
                                <Typography color="error" variant="caption" sx={{marginBottom: 2}}>
                                {
                                    loginError && "Invalid login"
                                }
                                </Typography>
                                <InputBase error={passwordError} endAdornment={
                                    <IconButton onClick={handleVisible}>
                                    {
                                        !isVisible && <VisibleIcon sx={styles.icon} />
                                    }
                                    {
                                        isVisible && <NotVisibleIcon sx={styles.icon} />
                                    }
                                    </IconButton>
                                } type={isVisible ? "text" : "password"} sx={styles.text} placeholder="Password" value={password} onChange={handlePassword} />
                                <Typography color="error" variant="caption" sx={{marginBottom: 2}}>
                                {
                                    passwordError && "Invalid password"
                                }
                                </Typography>
                                <FormControlLabel value={isRemember} onChange={e => setIsRemember(e.target.checked)} sx={{marginBottom: 3}} control={<Checkbox />} label="Remember Me" />
                                <Button onClick={handleSignIn} sx={styles.button} variant="contained">Sign In</Button>
                                <Button>Forgot Password?</Button>
                            </FormGroup>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={0} sm={3}></Grid>
        </Grid>
    )
}

const styles = {
    text: {
        backgroundColor: '#e6e6e6',
        borderRadius: '5px',
        width: '100%',
        padding: '0.5em 0.5em 0.5em 1em',
        //margin: '1em 0', 
        marginTop: 1,
        marginBottom: 1,
        color: '#333',
    },
    icon: {
        color: '#999',
    },
    button: {
        marginBottom: 3,
        padding: '1em 0'
    }
}

export default withLayout(Page)