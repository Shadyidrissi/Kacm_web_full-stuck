import React from "react";
import "../app/globals.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-div">
      <div id="logo-footer">
        <img
          src="https://upload.wikimedia.org/wikipedia/ar/9/9e/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%86%D8%A7%D8%AF%D9%8A_%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B4%D9%8A.png"
          alt="logo"
        />
      </div>
      <div id="paragraph-footer">
        <p>
          Kawkab Marrakech Club is a Moroccan sports club from the city of
          Marrakech. It was founded in 1947 by the actual founder Hajj Idriss
          Talbi. Its official color is red, in honor of the city's nickname,
          which is called Red Marrakech. Surprisingly, Kawkab Marrakech was
          reborn in a hurry. In a few years, the team became a major club, by
          establishing precise and successful management traditions. It was able
          to occupy a strategic position financially.
        </p>
      </div>
      <div id="socila-footer">
        <ul>
          <Link href=''>
            <svg
              width="512"
              height="512"
              style={{ color: "#E54390" }}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              class="h-full w-full"
            >
              <rect
                width="512"
                height="512"
                x="0"
                y="0"
                rx="30"
                fill="transparent"
                stroke="transparent"
                stroke-width="0"
                stroke-opacity="100%"
                paint-order="stroke"
              ></rect>
              <svg
                width="256px"
                height="256px"
                viewBox="0 0 24 24"
                fill="#E8403E"
                x="128"
                y="128"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#E8403E">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
            </svg>
          </Link>
          <Link href=''>
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              class="h-full w-full"
            >
              <rect
                width="512"
                height="512"
                x="0"
                y="0"
                rx="30"
                fill="transparent"
                stroke="transparent"
                stroke-width="0"
                stroke-opacity="100%"
                paint-order="stroke"
              ></rect>
              <svg
                width="256px"
                height="256px"
                viewBox="0 0 256 180"
                fill="#3A76F5"
                x="128"
                y="128"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#3A76F5">
                  <path
                    fill="red"
                    d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                  />
                  <path
                    fill="#FFF"
                    d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                  />
                </g>
              </svg>
            </svg>
          </Link>
          <Link href=''>
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              style={{ color: "#3A76F5" }}
              xmlns="http://www.w3.org/2000/svg"
              class="h-full w-full"
            >
              <rect
                width="512"
                height="512"
                x="0"
                y="0"
                rx="30"
                fill="transparent"
                stroke="transparent"
                stroke-width="0"
                stroke-opacity="100%"
                paint-order="stroke"
              ></rect>
              <svg
                width="256px"
                height="256px"
                viewBox="0 0 24 24"
                fill="#3A76F5"
                x="128"
                y="128"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#3A76F5">
                  <g fill="none">
                    <g clip-path="url(#akarIconsFacebookFill0)">
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
                        clip-rule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="akarIconsFacebookFill0">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </g>
              </svg>
            </svg>
          </Link>
          <Link href=''>
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              class="h-full w-full"
            >
              <rect
                width="512"
                height="512"
                x="0"
                y="0"
                rx="30"
                fill="transparent"
                stroke="transparent"
                stroke-width="0"
                stroke-opacity="100%"
                paint-order="stroke"
              ></rect>
              <svg
                width="256px"
                height="256px"
                viewBox="0 0 24 24"
                fill="#1C2033"
                x="128"
                y="128"
                role="img"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#1C2033">
                  <path
                    fill="currentColor"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
                  />
                </g>
              </svg>
            </svg>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
