import Home from '../pages/home'
import SignIn from '../pages/login'

const routes = {
  '/': props => <Home {...props} />,
  '/login': props => <SignIn {...props} />,
}

export default routes