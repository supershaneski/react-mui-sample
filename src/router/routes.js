import Home from '../pages/home'
import SignIn from '../pages/login'
import Products from '../pages/products'
import About from '../pages/about'

const routes = {
  '/': props => <Home {...props} />,
  '/login': props => <SignIn {...props} />,
  '/products': props => <Products {...props} />,
  '/about': props => <About {...props} />,
}

export default routes