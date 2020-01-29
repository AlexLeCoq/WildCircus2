import Link from "next/link";
import { withRouter } from "next/router";

const NavButton = props => (
  <Link href={props.path}>
    <div
      className={`NavButton ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <div className="Label">{props.label}</div>
    <style jsx>{`
      .NavButton {
        color: white;
        display: inline-block;
        justify-content: space-around;
        align-items: right;
      }
    
    `}
    </style>
    </div>
  </Link>
);

export default withRouter(NavButton);