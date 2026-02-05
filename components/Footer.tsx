// 如果還沒裝：npm install react-icons
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-auto border-t">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://www.instagram.com/shine_518/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/zhang.fu.xiang.637637"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/fuhsiangchang/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ChangFuHsiang"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
      </div>
      &copy; {new Date().getFullYear()} FU HSIANG, CHANG. All rights reserved.
    </footer>
  );
}
