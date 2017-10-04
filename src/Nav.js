import React from 'react'
import Link from 'react-router-dom/Link'
import NavLink from 'react-router-dom/NavLink'
import Drawer from 'material-ui/Drawer/Drawer'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import './Nav.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default () => (
  <Drawer open width={200}>
    <h3 className='title'>
      <Link to='/' className='base verticallyCenter'>Demos</Link>
    </h3>
    {[
      { route: '/example7', label: 'AddNew' },
      { route: '/example6', label: 'TodoList' },
      { route: '/example5', label: <span className='multiLine'>About This</span> }
    ].map(({ route, label }) => (
      <MenuItem
        key={route}
        style={{ whiteSpace: 'normal' }}
        innerDivStyle={{ padding: 0 }}
      >
        <NavLink to={route} className='base morePadding'>{label}</NavLink>
      </MenuItem>
    ))}
  </Drawer>
)
