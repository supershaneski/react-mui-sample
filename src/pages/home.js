import React from 'react'
import withLayout from '../layout/withLayout'

function Page() {
    return (
        <div>
            <span>Home page</span>
            <a href="/">Home</a> | <a href="/login">Login</a>
        </div>
    )
}

export default withLayout(Page)