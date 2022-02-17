import React from 'react'
import { getLoginCredentials } from '../lib/utils'
import LayoutWithMenu from '../layout/layoutwithmenu'
import withLayout from '../layout/withLayout'
import AboutUs from '../components/aboutus'

function Page() {

    const [loaded, setLoaded] = React.useState(false)
    const [openDrawer, setOpenDrawer] = React.useState(false)
    
    React.useEffect(() => {

        const login = getLoginCredentials()

        if(!login) {

            gotoLoginPage()
            return;

        }

        setLoaded(true)

    }, [])

    const gotoLoginPage = () => {

        window.location.href = "/login"

    }

    const handleDrawer = (flag) => {

        setOpenDrawer(flag)

    }

    if(!loaded) {

        return <div></div>

    }

    return (
        <>
            <LayoutWithMenu 
                isDrawerOpen={openDrawer}
                onDrawerClose={() => handleDrawer(false)}
            >
                <AboutUs onMenuOpen={() => handleDrawer(true)} />
            </LayoutWithMenu>
        </>
    )
}

export default withLayout(Page)