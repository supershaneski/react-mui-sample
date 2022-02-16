import React from 'react'
import { useRouter } from './router/useRouter'
import Routes from './router/routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import { CustomTheme } from './lib/custom-theme'
import { initCustomTheme, setCustomTheme } from './lib/utils'

function App() {

  const Page = useRouter(Routes)

  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [displayMode, setDisplayMode] = React.useState("light")
  const [displayCustom, setDisplayCustom] = React.useState(initCustomTheme())
  
  React.useEffect(() => {

    if(displayCustom === 1) {

      setDisplayMode("light")

    } else if(displayCustom === 2) {

      setDisplayMode("dark")

    } else {

      setDisplayMode(isDarkMode ? "dark" : "light")

    }

  }, [isDarkMode, displayCustom])
  
  const handleDisplayCustom = (mode) => {

    //console.log("mode", mode)

    setCustomTheme(mode)
    setDisplayCustom(mode)
  }

  const theme = createTheme({
    palette: {
      mode: displayMode,
    }
  })

  return (
    <>
      <CustomTheme.Provider value={[displayCustom, handleDisplayCustom]}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Page />
        </ThemeProvider>
      </CustomTheme.Provider>
    </>
  )
}

export default App