var React = require("react");

function Footer() {
  const curryear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {curryear} </p>
    </footer>
  );
}

export default Footer;
