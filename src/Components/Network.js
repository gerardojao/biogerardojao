import React from 'react'
import CV from "../assets/CV.pdf"

const Network = () => {
  return (
  
    <footer className="footer">
    <a className="button-download" href={CV} target="_blank"><i className="hiddenIcon fas fa-download"></i><span className="hiddenDownload">Download </span> CV</a>
    <br />
    <br />
  	<div className="rrss">
		<a title="LinkedIn" href="https://linkedin.com/in/gerardojao" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
		<a title="GitHub" href="https://github.com/gerardojao" target="_blank" rel="noreferrer"><i className="fab fa-github-alt" aria-hidden="true"></i></a>
		<a title="Twitter" href="https://twitter.com/gerardojao" target="_blank" rel="noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a>

        </div>
</footer>

  )
}

export default Network