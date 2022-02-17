import React from 'react'
import withLayout from '../layout/withLayout'
import { getLoginCredentials, saveLoginCredentials } from '../lib/utils'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import CancelIcon from '@mui/icons-material/Cancel'
import VisibleIcon from '@mui/icons-material/Visibility'
import NotVisibleIcon from '@mui/icons-material/VisibilityOff'

import useMediaQuery from '@mui/material/useMediaQuery'

function Page() {

    const [login, setLogin] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [loginError, setLoginError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [isRemember, setIsRemember] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false)

    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"))

    React.useEffect(() => {

        const token = getLoginCredentials(true)
        if(token) {

            setLogin(token?.login)
            setPassword(token?.password)

        }

    }, [])

    const handleSignIn = () => {

        let error = false;

        const slogin = login.trim()
        const spassword = password.trim()

        if(slogin.length < 6) {
            error = true
            setLoginError(slogin.length === 0 ? "Please enter your login" : "Invalid login")
        }

        if(spassword.length < 8) {
            error = true
            setPasswordError((slogin.length > 0 && spassword.length === 0) ? "Please enter your password" : "Invalid password")
        }

        if(error) return

        const newlogin = {
            login: slogin,
            password: spassword
        }

        saveLoginCredentials(newlogin, isRemember)

        window.location.href = "/"

    }

    const handleLogin = (e) => {

        setLogin(e.target.value)
        setLoginError("")

    }

    const handlePassword = (e) => {

        setPassword(e.target.value)
        setPasswordError("")

    }

    const handleClear = () => {

        setLogin("")
        setLoginError("")

    }

    const handleVisible = () => {

        setIsVisible(prev => !prev)

    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{width: {xs: '100%', sm: 450 }}}>
                <Box sx={{
                    padding: {xs: 0, sm: '3em 0'},
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Paper 
                        sx={{
                            width: '100%',
                        }}
                        elevation={matches ? 1 : 0}
                    >
                        <Box sx={{
                            padding: { xs: 3, sm: 5 },
                        }}>
                            <Typography variant="h5" sx={{marginBottom: 2}}>Sign In</Typography>
                            <FormGroup>
                                <InputBase error={loginError ? true : false} endAdornment={
                                    <IconButton onClick={handleClear}>
                                        <CancelIcon sx={styles.icon} />
                                    </IconButton>
                                } type="email" sx={styles.text} placeholder="Login" value={login} onChange={handleLogin} />
                                <Typography color="error" variant="caption" sx={{marginBottom: 2}}>
                                { loginError }
                                </Typography>
                                <InputBase error={passwordError ? true : false} endAdornment={
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
                                { passwordError }
                                </Typography>
                                <FormControlLabel value={isRemember} onChange={e => setIsRemember(e.target.checked)} sx={{marginBottom: 3}} control={<Checkbox />} label="Remember Me" />
                                <Button onClick={handleSignIn} sx={styles.button} variant="contained">Sign In</Button>
                                <Button>Forgot Password?</Button>
                            </FormGroup>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
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