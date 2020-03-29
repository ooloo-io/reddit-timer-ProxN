import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" style={{ height: '36px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <g fill="none">
        <path
          fill="#1E2537"
          d="M15.418 0c8.504 0 15.459 6.914 15.459 15.418 0 3.497-1.193 6.716-3.14 9.3l6.716 6.715c.993.993.993 2.583 0 3.576-.477.517-1.152.755-1.788.755-.636 0-1.312-.278-1.788-.755l-6.756-6.755-.08-.08c-2.463 1.67-5.444 2.663-8.623 2.663C6.914 30.837 0 23.922 0 15.418 0 6.914 6.914 0 15.418 0zm-.006.992C7.43.992.96 7.446.96 15.407c0 7.962 6.47 14.416 14.452 14.416s14.452-6.454 14.452-14.416c0-7.961-6.47-14.415-14.452-14.415z"
        />
        <g>
          <path
            fill="#FFF"
            d="M15.125 15.875c-.864.864-2.257 1.03-3.426 1.03-1.168 0-2.561-.166-3.424-1.03m9.494-13.673l-4.378-1.03-1.7 5.188 1.7-5.189m7.89 1.385c0 .953-.773 1.726-1.726 1.726s-1.726-.773-1.726-1.726c.021-.938.788-1.688 1.726-1.688s1.705.75 1.726 1.688zM1.867 11.89c-.796-.35-1.31-1.136-1.309-2.005 0-.92.574-1.742 1.439-2.058.865-.315 1.834-.055 2.426.65m14.518.044c.58-.727 1.556-1.009 2.434-.702.878.307 1.466 1.136 1.467 2.066 0 .903-.555 1.714-1.397 2.041"
            transform="translate(3.663 5.604)"
          />
          <path
            fill="#1E2537"
            d="M11.652 19.8c-5.705 0-10.347-3.097-10.347-6.904 0-.263.022-.523.066-.779C.597 11.64.125 10.795.125 9.885.127 8.438 1.3 7.265 2.747 7.263c.645 0 1.26.237 1.737.659 1.794-1.152 4.208-1.877 6.871-1.927L13.104.659l.381.09.01.003 4.074.959c.34-.796 1.12-1.312 1.986-1.313 1.192.001 2.157.967 2.158 2.158-.001 1.192-.967 2.157-2.158 2.159-1.19-.002-2.156-.966-2.158-2.156l-3.718-.875-1.416 4.32c2.566.1 4.884.827 6.614 1.954.483-.447 1.118-.695 1.777-.694 1.447.002 2.62 1.174 2.621 2.621.004.947-.506 1.822-1.332 2.284.038.24.057.481.057.727 0 3.807-4.643 6.904-10.348 6.904zm-9.395-7.722c-.058.269-.087.543-.087.818 0 3.33 4.254 6.039 9.482 6.039s9.482-2.71 9.482-6.039c0-.265-.027-.525-.08-.781-.028-.06-.042-.123-.042-.189-.29-1.136-1.079-2.167-2.22-2.999-.072-.026-.136-.071-.185-.131-1.733-1.192-4.209-1.939-6.955-1.939-2.718 0-5.173.733-6.904 1.904-.047.054-.107.095-.173.12-1.165.832-1.975 1.87-2.275 3.017-.001.057-.014.114-.037.166-.002.005-.003.01-.006.014zM19.6 8.48c1.003.802 1.739 1.757 2.115 2.806.44-.331.697-.85.694-1.401 0-.97-.787-1.756-1.756-1.756-.38-.001-.75.122-1.053.35zM2.747 8.129c-.97 0-1.756.786-1.756 1.756 0 .525.233 1.012.62 1.34.39-1.04 1.133-1.987 2.14-2.782-.295-.205-.645-.314-1.004-.314zm16.808-6.867c-.713 0-1.294.58-1.294 1.294 0 .713.58 1.293 1.294 1.293.712 0 1.293-.58 1.293-1.293s-.58-1.294-1.293-1.294zm-7.856 16.076c-1.732 0-2.953-.379-3.73-1.157-.17-.17-.17-.443 0-.612.169-.169.442-.169.611 0 .608.608 1.628.904 3.12.904 1.49 0 2.51-.296 3.12-.904.109-.11.268-.152.417-.112.15.04.266.157.306.306.04.15-.003.309-.112.418-.78.778-2 1.157-3.732 1.157z"
            transform="translate(3.663 5.604)"
          />
          <path
            fill="#FF4500"
            d="M15.206 10.019c-.881 0-1.621.738-1.621 1.62 0 .88.74 1.595 1.621 1.595.882 0 1.596-.714 1.596-1.595 0-.882-.714-1.62-1.596-1.62zm-6.988 0c-.88 0-1.62.74-1.62 1.62 0 .88.739 1.595 1.62 1.595.88 0 1.595-.715 1.595-1.595s-.715-1.62-1.595-1.62z"
            transform="translate(3.663 5.604)"
          />
        </g>
      </g>
    </svg>
  </Link>
);

export default Logo;
