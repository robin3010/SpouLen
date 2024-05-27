<img src="./src/shared/assets/logo_readme.svg" width=100% style="max-height: 108px; background-color: rgb(219 210 210 / 85%); border-radius: 8em; padding: 1.25rem 1.25rem">

## About

The main idea of the application is to check the “compatibility” of the faucet and the sink. “Compatibility” means the relationship between the shape of the spout and the location of the drain valve, in which water at full pressure does not fall on the walls of the sink, but on the drain valve

## Features

- compatibility cheking form
- localStorage sync of form inputs
- display results
- display recomended values

Powered by FSD ([Feature-Sliced Design](https://feature-sliced.design/)) architectural methodology.

## Technology stack:

[![Feature-Sliced Design][shields-fsd-logo]](https://feature-sliced.design/)  
[![Vite][shields-vite-logo]](https://vitejs.dev/)  
[![React][shields-react-logo]](https://react.dev/)  
[![TypeScript][shields-typescript-logo]](https://www.typescriptlang.org/)  
[![MobX][shields-mobx-logo]](https://mobx.js.org/)  
[![MobX-State-Tree][shields-mst-logo]](https://mobx-state-tree.js.org/)  
[![React Router][shields-reactrouter-logo]](https://reactrouter.com/)  
[![React Bootstrap][shields-react-bootstrap-logo]](https://react-bootstrap.github.io/)  
[![Bootstrap][shields-bootstrap-logo]](https://getbootstrap.com/)  
[![Sass][shields-sass-logo]](https://sass-lang.com/)  
[![Reactotron][shields-reactotron-logo]](https://docs.infinite.red/reactotron/)

[shields-fsd-logo]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&color=F2F2F2&labelColor=262224&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dKxCQAgDETR0w2cws0cys2cwhEUBbsggikCuVekDHwSQFlYo7Q+8KnmtHdFWMdk2cl5wSsbxGSZw8dm8pX9ZHUTMBUgGU2F718AAAAASUVORK5CYII=
[shields-vite-logo]: https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white
[shields-react-logo]: https://img.shields.io/badge/React-%23555?style=for-the-badge&logo=react&logoColor=%2361DAFB
[shields-typescript-logo]: https://img.shields.io/badge/TypeScript-%233178C6?style=for-the-badge&logo=typescript&logoColor=%23FAF9F8
[shields-mobx-logo]: https://img.shields.io/badge/MobX-%23f9f8fa?style=for-the-badge&logo=mobx
[shields-mst-logo]: https://img.shields.io/badge/MobX--State--Tree-%23FF7102?style=for-the-badge&logo=mobxstatetree&logoColor=white
[shields-reactrouter-logo]: https://img.shields.io/badge/React_Router-%23000?style=for-the-badge&logo=reactrouter&logoColor=white
[shields-react-bootstrap-logo]: https://img.shields.io/badge/React_Bootstrap-%23712CF9?style=for-the-badge&logo=reactbootstrap&logoColor=%2341E0FD
[shields-bootstrap-logo]: https://img.shields.io/badge/Bootstrap-%23712CF9?style=for-the-badge&logo=bootstrap&logoColor=white
[shields-sass-logo]: https://img.shields.io/badge/Sass-%23CC6699?style=for-the-badge&logo=sass&logoColor=white
[shields-reactotron-logo]: https://img.shields.io/badge/Reactotron-%23f2283b?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZiIgd2lkdGg9IjE2OCIgaGVpZ2h0PSIxNjkuMzMzIiB2aWV3Qm94PSIwIDAgMTI2IDEyNyI%2BCiAgPHBhdGggZD0iTTQ3IDEuNkMyNS42IDcuMiA2LjkgMjYgMS41IDQ3LjVjLTEuOSA3LjYtMS45IDIzLjQgMCAzMSAyLjIgOC42IDguNiAyMS4xIDE0IDI3LjIgOS4yIDEwLjUgMjMuOSAxOC4xIDM5LjMgMjAuMyAxOS44IDIuOSA0Mi42LTUuNCA1NS43LTIwLjMgNS40LTYuMSAxMS44LTE4LjYgMTQtMjcuMiAxLjktNy42IDEuOS0yMy40IDAtMzEtNS41LTIxLjctMjQuMy00MC41LTQ2LTQ2QzcxLS40IDU0LjQtLjQgNDcgMS42bTI4LjIgNC41YzMwLjUgNi40IDUxLjEgMzguMSA0NC40IDY4LjItNC43IDIwLjktMTkuMSAzNi45LTM4LjkgNDMuMi0xMC45IDMuNS0yNC41IDMuNS0zNS40IDAtMzYuNS0xMS42LTUxLjYtNTUtMzAuMi04NyA4LTExLjkgMjAuNi0yMC44IDM0LjQtMjQuMSA2LjQtMS42IDE4LjktMS43IDI1LjctLjMiLz4KICA8cGF0aCBkPSJNMzYuMiAyNC4zYy0yLjkgMy0yLjkgMTAuMy0uMiAxOC4yIDIuNCA2LjkgMi40IDcuNS42IDcuNS0uOCAwLTQuMy45LTcuOSAyLTExLjMgMy41LTE2IDEwLjYtMTAuNCAxNS44IDIuNyAyLjYgOS45IDUuOCAxNSA2LjcgMiAuNCA0IDEuMSA0LjMgMS42cy0uNCAzLjQtMS42IDYuNWMtMi42IDctMi44IDE0LjUtLjYgMTcuOSAxLjMgMS45IDIuNSAyLjUgNS41IDIuNSA0LjUgMCA5LjMtMi45IDE2LjgtMTAuM2w1LjItNSA2LjQgNS45YzkuNyA5LjIgMTYuNSAxMS42IDIwLjcgNy40IDIuNi0yLjYgMi42LTEwLjUgMC0xOC0xLjEtMy0xLjktNi0yLTYuNSAwLS42IDIuNi0xLjYgNS44LTIuMyAxNS4yLTMuMiAyMC44LTEyLjQgMTEuNC0xOC43LTIuMS0xLjQtNi45LTMuMy0xMC43LTQuM2wtNy0xLjcgMi4yLTZjMy04LjQgMy0xNi41IDAtMTkuMy00LjQtNC4xLTEwLjEtMi4xLTIwLjQgNy4zTDYzIDM3LjJsLTYuMi01LjdjLTEwLjQtOS40LTE2LjUtMTEuNi0yMC42LTcuMm0zNS40IDI1LjljLjYuNyAyLjggMy44IDQuNyA2LjlsMy42IDUuNi00LjcgNy4yLTQuNiA3LjFINTUuNGwtNC42LTcuMS00LjctNy4yIDIuNi00LjFjNC44LTcuNyA2LjMtOS41IDguNi0xMCAzLjgtLjggMTIuOS4yIDE0LjMgMS42Ii8%2BCiAgPHBhdGggZD0iTTYwLjUgNTVjLTIuNyAxLTQuMiAyLjktNSA2LjItLjYgMi4yLS4xIDMuMyAyLjMgNS44IDEuNyAxLjYgNCAzIDUuMiAzczMuNS0xLjQgNS4yLTNjMi40LTIuNSAyLjktMy42IDIuMy01LjgtMS4yLTQuOS01LjktNy45LTEwLTYuMiIvPgo8L3N2Zz4K

## Getting started

This project was bootstrapped with [Create Vite](https://vitejs.dev/guide/#getting-started)

#### To get the frontend running locally:

- Clone this repo
- `npm install` to install all the dependencies defined in a `package.json` file.
- `npm run dev` to start Vite dev server.
