import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  padding-top: 183px;
  padding-bottom: 183px;
  min-width: ${(props) => props.theme.pageWidth};
  background-color: ${(props) => props.theme.colorBackgroundBlue};
  background-image: url("data:image/svg+xml,%3Csvg width='446' height='447' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='223' cy='223.5' rx='223' ry='223.5' fill='%23C4E2FF'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 446px;
  background-position: top 50% right 90px;
  align-items: center;
  z-index: 1;

  &::after {
    position: absolute;
    right: 177px;
    bottom: 0px;
    width: 273px;
    height: 544px;
    display: block;
    content: "";
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("data:image/svg+xml,%3Csvg width='273' height='544' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M185.1 35.72c-2.2-3.85-7.6-4.78-10.14-8.4-2.95-4.18-1.2-10.53-4.48-14.45a11.55 11.55 0 0 0-8.1-3.35c-3 0-6-.33-8.93-.98-5.18-1.6-8.93-6.6-14.22-7.76A12 12 0 0 0 125.8 9c-.3 1.03-.47 2.1-.48 3.18a9.75 9.75 0 0 0-7.2 3.19c-1.92 2.15-2.8 5.06-4.79 7.16-1.99 2.1-5.08 3.4-6.74 5.9-.86 1.4-1.4 2.98-1.6 4.62-.89 5.35-.38 11.24 2.97 15.5 3.35 4.28 10.06 6.1 14.35 2.86 0 0 30.3 14.33 36.5 18.15a18 18 0 0 0 20.3-1.27 5.57 5.57 0 0 0 2.38-3.73c-.16-1.5-.61-2.94-1.33-4.27-1.42-4.1.9-8.47 2.98-12.3 2.07-3.84 4.11-8.48 1.96-12.27Z' fill='%23333'/%3E%3Cpath d='M112.4 38.78c2.32-14.62 16.9-39.1 42.82-24.03 8.16 4.77 11.64 13.37 13.28 22.3 1.16 6.25-1.05 64.24-1.05 64.24-1.82 22.77-37.4 26.21-39.7-.16l.7-16.39c-18.78-5.97-18.66-29.53-16.06-45.96Z' fill='%23F9C4B4'/%3E%3Cpath d='M128.45 84.79s10.6 3.53 30.61-8.89a65.47 65.47 0 0 1-31.22 22.89l.6-14Z' fill='%23333'/%3E%3Cpath d='M181.94 46.52a10.4 10.4 0 0 0-11.48-9.02 10.2 10.2 0 0 0-9.1 11.25 10.37 10.37 0 0 0 11.48 9 10.18 10.18 0 0 0 9.1-11.23Z' fill='%23F9C4B4'/%3E%3Cpath d='M173.5 43.2a10.37 10.37 0 0 0-5.17 3.87 10.9 10.9 0 0 0-1.07 2.08 3.6 3.6 0 0 1-.16-2.62 5.22 5.22 0 0 1 3.78-3.6 3.7 3.7 0 0 1 2.61.28Z' fill='%23251B2D'/%3E%3Cpath d='M142.37 34.57c0 .91-1.42 1.6-3.05 1.45-1.62-.14-2.9-.95-2.84-1.86.07-.9 1.44-1.6 3.06-1.45 1.63.14 2.9.96 2.83 1.86ZM123.58 34c-.08.9-1.45 1.6-3.07 1.37-1.63-.22-2.86-1.05-2.78-1.96.08-.9 1.45-1.6 3.06-1.37 1.61.23 2.88 1 2.8 1.96Z' fill='%23371C09'/%3E%3Cpath d='M149.29 69.77a10.79 10.79 0 1 0 .01-21.58 10.79 10.79 0 0 0-.01 21.58Z' fill='%23333' style='mix-blend-mode:soft-light' opacity='.46'/%3E%3Cpath d='M120.01 42.8c0 1.12.4 2.06 1.04 2.11.64.05 1.24-.83 1.3-1.96.07-1.13-.38-2.05-1.03-2.1-.65-.05-1.23.83-1.3 1.96ZM136.66 43.38c0 1.12.38 2.06 1.04 2.1.65.05 1.24-.82 1.3-1.96.07-1.13-.38-2.05-1.03-2.1-.66-.05-1.25.83-1.31 1.96Z' fill='%23333' stroke='%23333' stroke-width='.49' stroke-miterlimit='10'/%3E%3Cpath d='M111.56 45.39a63.09 63.09 0 0 0 1.15 21.5 10.8 10.8 0 0 0 6.27-18.54 10.8 10.8 0 0 0-7.42-2.96Z' fill='%23333' style='mix-blend-mode:soft-light' opacity='.46'/%3E%3Cpath d='M134.5 58c-.3 1-.88 1.9-1.67 2.6a4.66 4.66 0 0 1-3.1 1.29 4.56 4.56 0 0 1-3.2-1.34 4.78 4.78 0 0 1-1.46-2.74c.9.54 1.6 1.05 2.42 1.42.67.34 1.41.53 2.17.56.77-.03 1.53-.21 2.23-.55.86-.33 1.64-.82 2.62-1.24Z' fill='%23333'/%3E%3Cpath d='M128.29 37.47c.13 2.4.06 4.82-.2 7.22-.14 1.18-.26 2.37-.45 3.55-.2 1.18-.4 2.36-.64 3.53l-.56-.8a38.4 38.4 0 0 1 5.18 1.8c-1.83 0-3.66-.14-5.47-.4h-.62v-.72a68.4 68.4 0 0 1 .9-7.1c.42-2.41 1.04-4.78 1.86-7.08Z' fill='%23251B2D'/%3E%3Cpath d='M134.5 58c-.3 1-.88 1.9-1.67 2.6a4.66 4.66 0 0 1-3.1 1.29 4.56 4.56 0 0 1-3.2-1.34 4.78 4.78 0 0 1-1.46-2.74c.9.54 1.6 1.05 2.42 1.42.67.34 1.41.53 2.17.56.77-.03 1.53-.21 2.23-.55.86-.33 1.64-.82 2.62-1.24ZM170.9 28.92a30.68 30.68 0 0 0-6-9.55 35.08 35.08 0 0 0-6.64-4.78 48 48 0 0 0-5.24-2.88 33.83 33.83 0 0 0-6.38-2.01 29.2 29.2 0 0 0-10.62-.85c-3.09.4-5.96 1.81-8.18 4a31.44 31.44 0 0 0-8.43 9.02 698.17 698.17 0 0 0-4.24 6.06c.9-.2 1.77-.5 2.6-.92a17.82 17.82 0 0 0 3.34-2.56 23.55 23.55 0 0 0 6.54-8.7 10.42 10.42 0 0 0 4.78 5.6c2.85 1.4 6.03 2.01 9.19 1.76 2.63-.11 5.37-.56 7.84.4a10.15 10.15 0 0 1 5.38 5.71 32.2 32.2 0 0 1 1.83 7.85 5.52 5.52 0 0 0 1.21 3.27c.56.5 1.25.82 2 .92 3.18.56 6.13-1.29 8.6-3.33a7.82 7.82 0 0 0 3.35-5 8.18 8.18 0 0 0-.94-4Z' fill='%23333'/%3E%3Cpath d='M48.89 170.28c18.63-26.47 66.72-65.04 66.72-65.04l12.31 10.14-35.49 75.14s-23.68 45.12-40 46.26c-25.23 1.79-27.76-32.15-3.54-66.5Z' fill='%23F9C4B4'/%3E%3Cpath d='m115.02 142-22.2-17.59-32.74 32.28 30.8 35.04L115.02 142Z' fill='%23333' style='mix-blend-mode:soft-light' opacity='.46'/%3E%3Cpath d='m99.92 175.3-38.57-30.95s44.8-53.62 74.94-42.2l-11.56 21.04-24.8 52.1Z' fill='%23BAD2C8'/%3E%3Cpath d='m42.54 143.75-3.7 1.59c-8.26 3.44-16.53 6.81-24.82 10.11 4.56 27.57 12.64 59.88 20.87 71.67 10.3 14.76 37.82.52 36.53-13.75-.39-5.47-19.5-48.7-28.88-69.62Z' fill='%23F9C4B4'/%3E%3Cpath d='M48.53 153.24A138.32 138.32 0 0 1 38.3 131.9c.43-1.15 3.19-13.92 1.82-17.3-2-5.25-11.44 5.94-11.48 8.83-.3-2.7-2.76-24.8-6.81-24.44-2.44.23-1.28 15.15-1.28 15.15s-6.82-19.25-8.83-18.49C9.7 96.41 15 115.11 15 115.11s-6.96-13.95-9.2-12.93c-1.91.86 3.32 15.83 3.32 15.83s-7-7.85-8.85-6.88c-1.85.97 5.07 13.38 6.08 17.12.68 2.55 3.97 28.19 8.32 42.1.54-.26 24.7-12.13 33.86-17.11Z' fill='%23FC9B27'/%3E%3Cpath d='M48.53 153.24s1.73 1.06 1.2 1.8c-.53.73-33.66 18.14-34.6 16.6l-.96-1.6 34.36-16.8Z' fill='%23FCB970'/%3E%3Cpath d='m52.66 165.7 8.52 18.3' stroke='%23333' stroke-width='1.1' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M161.7 227.83c-6.58-18.02-53.85-6.68-53.85-6.68s-22.32 80.31-28.03 163.28c-6.56 96.42 19.13 204.12 19.13 204.12 15.36 3.27 43.18 2.01 43.18 2.01V438.95c-.11-.34 4.96-97.77 12.16-126.55 9.84-39.22 7.4-84.57 7.4-84.57Z' fill='%233F5B99'/%3E%3Cpath d='M202.78 228.9c-6.57-18.04-59.55-7.09-59.55-7.09s-7.42 23.9-8.77 69.31c-.5 16.36 5.64 79.78 4.93 90.3-6.56 96.43 17.76 206.91 17.76 206.91 15.35 3.19 43.18 2 43.18 2V438.7c-.12-.34 4.94-97.77 12.14-126.55 9.92-39.27-9.69-83.26-9.69-83.26Z' fill='%23435CA1'/%3E%3Cpath d='M182.72 259.65c-18.9-1.78-38.26.56-56.8 4.51a342.6 342.6 0 0 0-21.95 5.51c.96 2.84 2.6 5.4 4.79 7.45 7.97 7.3 20.42 4.78 31.23 5.3 24.17 1.31 45.04 20.58 69.25 20.1a30.3 30.3 0 0 0 5.23-.55 123.77 123.77 0 0 0-1.04-35.53 158.25 158.25 0 0 0-30.7-6.79Z' fill='%23333' style='mix-blend-mode:soft-light' opacity='.46'/%3E%3Cpath d='M185.53 280.17s-11.16 49.67 8.53 52.87' stroke='%236693B9' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M198.35 279.64c-4.21 55.31-4 54.44-7.48 82.15-3.19 25.6-6.94 118.95 1.07 194.16M103.29 273.76s-.56 50.1-16.9 53.1M135.22 269.1s-5.3 180.56 7.56 226.05' stroke='%236693B9' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M146.72 271.17s3.5 61.71-11.06 55.74' stroke='%236693B9' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M166.73 98.21 128 99.81l-7.97.63c-12.21 5.96-13.95 15.77-18.24 28.38-10.27 30.26-8.32 72.21-5.25 100.2 0 0-10.38 34.65-3.42 41.88 8.48 8.82 34.88-4.11 47.06-1.8 11.8 2.24 28.9 9.46 49.8 10 53 1.4 23.02-27.3 22.83-38.33 10.46-19.45 5.05-68.25-9.33-106.36-5.24-13.9-13.06-27.53-25.94-34.54-2.71-1.5-8.58-1.66-10.8-1.66Z' fill='%23BAD2C8'/%3E%3Cpath d='M120.27 100.44s-17.84 125.72-12.95 173.6c.24 2.35 9.3-1.87 9.3-1.87-2.6-38.44 10.15-172.27 10.15-172.27l-6.5.54ZM175.87 98.8s14.35 132.68 9.47 180.6c-.24 2.34-9.3-1.86-9.3-1.86 2.6-38.45-6.68-179.25-6.68-179.25l6.5.51Z' fill='%232D458B'/%3E%3Cpath d='M231.13 194.74c-7.3-31.52-37.34-85.33-37.34-85.33l-15.23 4.78 4.6 82.97s4.95 50.68 19.62 57.9c22.72 11.1 37.85-19.39 28.35-60.32Z' fill='%23F9C4B4'/%3E%3Cpath d='m180.5 143.7 27.18-7.96 18.17 42.22-41.72 20.87-3.64-55.13Z' fill='%23333' style='mix-blend-mode:soft-light' opacity='.46'/%3E%3Cpath d='m181.96 180.22 47.38-14.18s-21.31-66.52-53.52-67.24l2.74 23.9 3.4 57.52Z' fill='%23BAD2C8'/%3E%3Cpath d='M83.87 181.25c-.26-.78-10.32-14.57-10.32-14.57s.67-11.45 12.14-11.72c11.46-.27 110.71-2.6 85.2 23.42-25.5 26.03-87.02 2.87-87.02 2.87Z' fill='%233F1F1F'/%3E%3Cpath d='M168.75 172.06c-.36-6.46 1.76-12.74 4.15-18.8 8.53-21.55 21.41-42.11 40.53-55.24a114.62 114.62 0 0 0-37.75 77.63' fill='%23698937'/%3E%3Cpath d='M172 172.87c8.77-25.74 26.01-47.75 48.93-62.43l-9.94 10.91c-12.3 13.53-25.32 28.67-25.92 46.95' fill='%23698937'/%3E%3Cpath d='M107.6 203.36a30.2 30.2 0 0 1-20.68-33.24 30.17 30.17 0 0 1 29.55-25.69c4.1 0 8.25.8 12.28 0 6.04-1.13 11.85-5.72 17.72-3.87 2.08.65 3.85 2.07 5.9 2.85 5.11 1.96 11-.38 16.26 1.12 5.26 1.5 8.88 6.6 11.37 11.6a44.57 44.57 0 0 1 4.68 14.34c2.22 18.17-12.75 35.24-30.48 40.23-17.73 4.98-39.06-1.05-53.91-10.69' fill='%23FC9A54'/%3E%3Cpath d='M131.03 149.2a120.81 120.81 0 0 0-9.12-14.04 4.87 4.87 0 0 1 2.47-7.63c.4-.11.8-.15 1.21-.1 2 .15 3.29 2.13 4.15 3.94a48.2 48.2 0 0 1 4.53 18.28' fill='%2358302F'/%3E%3Cg style='mix-blend-mode:overlay' opacity='.34'%3E%3Cpath d='M117.46 201.3c-.44.24-2.7-2.64-4.64-8.15a48.3 48.3 0 0 1 1.36-34.74c.77-1.77 1.8-3.43 3.06-4.9a17.42 17.42 0 0 1 3.86-3.19c2-1.22 4.19-2.12 6.47-2.66 1.6-.35 2.52-.35 2.62-.1.1.26-.67.8-2.01 1.6a39.08 39.08 0 0 0-5.36 3.57 16.05 16.05 0 0 0-5.1 7.26 55.84 55.84 0 0 0-2.86 11.26 61 61 0 0 0 .8 21.18c1.1 5.32 2.4 8.58 1.8 8.87ZM148.57 198.67c-.53.13-1.77-2.83-2.44-7.96-.33-2.5-.54-5.5-.7-8.76-.16-3.26-.32-6.8-.8-10.4-.4-3.35-1.2-6.64-2.4-9.8a27.78 27.78 0 0 0-4.14-7.01c-1.48-1.92-2.77-3.53-3.52-4.78-.75-1.26-1-2-.78-2.17.22-.17.9.24 2 1.1a58.74 58.74 0 0 1 4.5 3.84 25.22 25.22 0 0 1 5.44 7.45 35.74 35.74 0 0 1 3.03 10.78c.44 3.62.6 7.26.51 10.9 0 3.18-.14 6.13-.2 8.64-.07 5 .12 8.05-.5 8.17Z' fill='%23333' style='mix-blend-mode:overlay' opacity='.34'/%3E%3Cpath d='M174.29 202.6c-.58 0-1.44-4.47-2.38-11.8-.46-3.66-.95-7.96-1.42-12.88a68.39 68.39 0 0 0-2.5-15.1c-.78-2.32-2-4.49-3.59-6.36a17.09 17.09 0 0 0-5.4-4.13 30.2 30.2 0 0 0-11.8-2.84c-3.57-.19-6.55 0-8.63-.09-2.07-.1-3.19-.13-3.27-.41-.08-.3 1.07-.7 3.1-1.2 2.9-.67 5.84-1.08 8.81-1.22 4.6-.3 9.2.49 13.43 2.29 2.6 1.13 4.92 2.8 6.82 4.89 2 2.26 3.52 4.9 4.47 7.77a60.43 60.43 0 0 1 2.39 16.16c.25 4.88.45 9.26.53 12.95.19 7.4.01 11.93-.56 11.98ZM129.44 146.74c0 .64-4 .37-9.94 1.72a39.3 39.3 0 0 0-9.85 3.7 22.61 22.61 0 0 0-9.14 8.12c-2.1 3.7-2.7 8.13-3.19 12.2-.49 4.06-.94 7.8-1.3 10.92-.7 6.24-1.36 10.13-1.93 10.1-.58-.03-.97-3.94-1-10.27 0-3.19.07-6.95.42-11.15a33.4 33.4 0 0 1 3.45-13.87 20.71 20.71 0 0 1 5.08-5.82 30.62 30.62 0 0 1 5.92-3.64 34.73 34.73 0 0 1 11.16-3.19c6.5-.68 10.44.7 10.32 1.18Z' fill='%23333' style='mix-blend-mode:overlay' opacity='.34'/%3E%3C/g%3E%3Cpath d='M75.23 133.06a35.95 35.95 0 0 1 1.59-40.13 84.8 84.8 0 0 1 .46 41.67' fill='%23446815'/%3E%3Cpath d='M72.77 137.17a45.77 45.77 0 0 1-21.03-41.9A126.44 126.44 0 0 1 75 133.22' fill='%23698937'/%3E%3Cpath d='M70.68 134.59a23.33 23.33 0 0 1-20.6-14.77 43.3 43.3 0 0 1 27.1 12.9' fill='%23446815'/%3E%3Cpath d='M74.83 136.23a36.87 36.87 0 0 1-9.87-32.55A41.64 41.64 0 0 1 77.16 132' fill='%2388AA4D'/%3E%3Cpath d='M74.67 133.1c-3.99-1.6-8.3 2.64-8.6 6.89-.28 4.25 2.06 8.22 4.39 11.8 10.49 16.18 22.13 31.6 33.75 47 1.95-.7 1.84-3.46 1.33-5.47A347.78 347.78 0 0 0 85.84 136a10.5 10.5 0 0 0-3.31-4.78 3.68 3.68 0 0 0-5.15.75' fill='%23F78131'/%3E%3Cg opacity='.36'%3E%3Cpath d='M76.55 144.76c.53 1.03-.8 2.75-3.05 3.67-2.24.92-4.4.62-4.78-.46-.38-1.09 1.08-2.54 3.19-3.4 2.1-.86 4.11-.82 4.64.2ZM84.4 152.1c-.12-1.14 1.25-2.2 2.96-2.75 1.7-.54 3.44-.43 4.02.6.57 1.01-.6 2.7-2.78 3.37-2.18.67-4.11-.08-4.2-1.21ZM88.3 164.85c.51 1.03-.3 2.48-1.82 3.18-1.51.7-3.19.56-3.7-.46-.5-1.02.29-2.48 1.82-3.18 1.53-.7 3.17-.56 3.7.46ZM80 130.75c-.07 1.16-2.3 1.97-4.77 2.82-2.48.84-4.79 1.47-5.58.56-.36-.45-.16-1.26.59-2.17 1-1.1 2.27-1.9 3.7-2.34a8.17 8.17 0 0 1 4.38-.27c1 .29 1.69.83 1.69 1.4Z' fill='%23333' style='mix-blend-mode:overlay' opacity='.36'/%3E%3C/g%3E%3Cpath d='M80 130.75c-.07 1.16-2.3 1.97-4.77 2.82-2.48.84-4.79 1.47-5.58.56-.36-.45-.16-1.26.59-2.17 1-1.1 2.27-1.9 3.7-2.34a8.17 8.17 0 0 1 4.38-.27c1 .29 1.69.83 1.69 1.4Z' fill='%23333'/%3E%3Cpath d='M84.8 213a188.56 188.56 0 0 0 66.39 7.78c11.76-.75 24.95-3.49 31.26-13.71 3.59-5.8 4.21-12.97 4.79-19.83l1.1-14.33c.14-1.95 0-4.45-1.82-5.1a4.57 4.57 0 0 0-3.53.81c-18.99 10.18-41.61 9.02-63 7.62-15.94-1.07-31.47-3.7-46.45-9.56.1 0-4.09 41.39 11.25 46.31Z' fill='%2358302F'/%3E%3Cpath d='M156.02 181.73c2.21-7.18 5.1-14.33 10.12-19.96 5.02-5.62 12.5-9.44 19.98-8.48 7.97 1.02 14.24 7.02 18.96 13.44A78.27 78.27 0 0 1 219.62 203c.47 2.55.39 5.17-.26 7.69a7.13 7.13 0 0 1-5.37 5.06c-4.03.56-7.13-3.36-9.3-6.8l-11.48-18.17a54.52 54.52 0 0 0-9.02-11.8 18.47 18.47 0 0 0-13.49-5.3c-4.96.4-9.79 4.09-10.41 9.01' fill='%23446815'/%3E%3Cg style='mix-blend-mode:overlay'%3E%3Cpath d='M211.93 197.26c-.22.14-2.68-3.41-6.49-9.26-1.91-2.96-4.14-6.37-6.61-10.3-2.5-4.2-5.8-7.9-9.68-10.86a15.74 15.74 0 0 0-13.47-2.72 24.25 24.25 0 0 0-9.8 6.46c-4.78 4.89-6.84 8.8-7.12 8.63.22-1 .64-1.96 1.24-2.8a37.26 37.26 0 0 1 4.91-6.75 24.55 24.55 0 0 1 10.25-7.2 15 15 0 0 1 7.6-.4c2.66.56 5.19 1.64 7.43 3.19 4.1 3.1 7.52 7 10.06 11.46 2.44 3.95 4.52 7.53 6.37 10.54 3.48 6 5.54 9.88 5.31 10Z' fill='%23333' style='mix-blend-mode:overlay'/%3E%3Cpath d='M190.57 182.11c-.24-.14.2-1.23.38-3 .2-2.34-.12-4.7-.94-6.89a43.6 43.6 0 0 0-3.19-6.37c-.96-1.6-1.48-2.72-1.26-2.88.22-.16 1.1.64 2.34 2.12 1.68 1.94 3.01 4.16 3.94 6.56.96 2.48 1.13 5.19.5 7.77-.64 1.85-1.58 2.77-1.77 2.7ZM199.78 192.73c-.52 0-.6-3.66-.62-8.07-.01-4.41 0-7.96.6-8.06.58-.1 1.28 3.55 1.28 8.06 0 4.5-.75 8.12-1.26 8.07Z' fill='%23333' style='mix-blend-mode:overlay'/%3E%3Cpath d='M199.69 163.41c0 .53-2.92.91-6.5 1.04-3.56.13-6.5 0-6.54-.57-.05-.58 2.85-1.18 6.48-1.31 3.64-.13 6.57.34 6.56.84ZM208.3 177.33c0 .51-2.16.9-4.66.11-2.5-.78-4.06-2.32-3.76-2.73.3-.42 2.1.25 4.32.94 2.22.68 4.11 1.08 4.1 1.68Z' fill='%23333' style='mix-blend-mode:overlay'/%3E%3C/g%3E%3Cpath d='M153.69 176.66s12.47-1.59 16.17-2.75l-.85 11.96-16.57.78 1.25-9.99Z' fill='%2358302F'/%3E%3Cpath d='M221.18 219.07c-4.6-2.88-50.06-12.73-72.72-17.51a738.74 738.74 0 0 1-10.7 28.38c25.43 13 58.12 26.42 73.04 26.74 18.02.28 22.69-30.25 10.38-37.6Z' fill='%23F9C4B4'/%3E%3Cpath d='m184.11 209.44 20.66 3.97' stroke='%23333' stroke-width='1.1' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M158.52 202c-12.33-2.64-23.3-4.78-23.3-4.78-.55-1.1-7.41-14-10.76-15.35-5.2-2.12-3 10.77-.9 12.74-2.17-1.59-20.72-12.3-23.33-10.35-1.96 1.47 10.57 11.58 10.57 11.58s-18.75-8.1-19.58-6.12c-.83 2 16.52 10.83 16.52 10.83s-14.98-4.4-15.76-2.07c-.65 2 13.9 8.36 13.9 8.36s-10.55-.24-11.17 1.79c-.62 2.02 15.29 5.9 18.4 7.12 8.42 5.4 21.67 16.37 34.84 22.66.25-.56 7.94-26.36 10.57-36.4Z' fill='%23FC9B27'/%3E%3Cpath d='M158.52 202s1.96-.54 2.14.35c.17.9-9.57 36.97-11.39 36.63l-1.77-.36L158.52 202Z' fill='%23FCB970'/%3E%3C/svg%3E");
  }
`;

export const Wrapper = styled.div`
  width: 600px;
`;

export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 0px;
  width: 525px;
`;