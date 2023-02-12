import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLinks,
} from './navigation.styles'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">SHOP</NavLinks>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLinks to="/auth">SIGN IN</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
