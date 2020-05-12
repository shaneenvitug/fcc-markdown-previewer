import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div>
          <a href="https://www.linkedin.com/in/shaneen-vitug/" target="_blank"
            ><img src="linkedin.png" alt="linkedin icon"
          /></a>
        </div>
        <div>
          <a href="https://twitter.com/shaneenvitug" target="_blank"
            ><img src="twitter.png" alt="twitter icon"
          /></a>
        </div>
        <div>
          <a href="https://github.com/shaneenvitug" target="_blank"
            ><img src="github.png" alt="github icon"
          /></a>
        </div>
      </div>
      <hr />
      <div id="info">
        <p>
          website cleverly crafted by &nbsp;
          <a href="https://shaneenvitug.com/" target="_blank">shaneen vitug</a> © 2020
        </p>
        <p>a <a href="https://www.freecodecamp.org/">freeCodeCamp</a> project</p>
      </div>
    </footer>
  );
}

export default Footer;