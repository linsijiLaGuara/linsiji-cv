import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

export function Footercom() {
  return (
    <footer className="footer">
      <p>Copyright © linsiji.com</p>
      <div className="footer-icons">
        <a href="https://github.com/linsijiLaGuara" className="footer-icon">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yoselin-silva/"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com/c/linsijiSilva"
          className="footer-icon"
        >
          <FaYoutube />
        </a>
        <a href="#" className="footer-icon">
          <AiOutlineMail />
        </a>

        <a href="https://www.youtube.com/@DataLink418" className="footer-icon">
          <FaYoutube />
        </a>
        <a href="https://twitter.com/Linsiji" className="footer-icon">
          <AiOutlineTwitter />
        </a>
      </div>
    </footer>
  );
}
