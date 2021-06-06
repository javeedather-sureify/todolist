import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button onClick={() => onRouteChange('signout')}>Sign Out</button>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button onClick={() => onRouteChange('signin')} style={{marginRight:20}}>Sign In</button>
          <button onClick={() => onRouteChange('register')}>Register</button>
        </nav>
      );
    }
}

export default Navigation;