import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M16.37 3.1a1.5 1.5 0 0 1 2.12 2.12l-9.9 9.9a1.5 1.5 0 0 0 0 2.12l5.66 5.66a1.5 1.5 0 0 1-2.12 2.12l-5.66-5.66a4.5 4.5 0 0 1 0-6.36l9.9-9.9z" />
    <path d="M20.49 10.99a1.5 1.5 0 0 1 0 3H9.51a1.5 1.5 0 0 1 0-3h10.98z" />
  </svg>
);

const HackerRankIcon = () => (
  <svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor">
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4zm3 28h-6V16h6v16z" />
  </svg>
);

const socialIcons = [
  { icon: <FontAwesomeIcon icon={faLinkedin} />, link: "https://www.linkedin.com/in/sarvesh-kshatriya/", label: "LinkedIn" },
  { icon: <FontAwesomeIcon icon={faGithub} />, link: "https://github.com/sarvesh-ksh", label: "GitHub" },
  { icon: <FontAwesomeIcon icon={faTwitter} />, link: "https://x.com/Kshatriya545", label: "Twitter" },
  { icon: <FontAwesomeIcon icon={faInstagram} />, link: "https://www.instagram.com/sarvesh_k_2005/", label: "Instagram" },
  { icon: <LeetCodeIcon />, link: "https://leetcode.com/u/sarvesh_2005/", label: "LeetCode" },
  { icon: <HackerRankIcon />, link: "https://www.hackerrank.com/profile/sarveshkshatriy1", label: "HackerRank" },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="group w-10 h-10 flex items-center justify-center rounded-xl
            bg-white/5 border border-white/10
            text-text-secondary transition-all duration-300
            hover:bg-accent/20 hover:border-accent/40 hover:text-accent
            hover:shadow-lg hover:shadow-accent/20 hover:scale-110"
          key={index}
        >
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
