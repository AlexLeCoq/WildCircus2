import NavButton from './NavButton';

const NavBar = props => (
    <div className="navbar-container">
      <div className="logo-container">
        <img className="logo" src="https://via.placeholder.com/150"/>
      </div>
        {props.navLinks.map(button => (
          <NavButton
            key={button.path}
            path={button.path}
            label={button.label}
          />
        ))}
    <style jsx>{`
      .navbar-container {
        background-color: black;
        display: flex;
        align-items: center;

      }

      .logo-container {
        
      }

      .logo {
        width: 100%;
      }
    `}
    </style>
    </div>
  );

export default NavBar;