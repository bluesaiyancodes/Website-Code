import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/bluesaiyancodes"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Bishal Swain
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>

        Derrived <i className="fas fa-code" />  from{" "}
        <a
          className="badge"
          rel="noopener"
          target=" _blank"
          style={{color:"black"}}
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib. 
        </a>{" "} Thanks

      </Container>
    </footer>
  );
};

export default Footer;
