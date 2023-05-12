### [birth-weather](https://incredible-cascaron-139c6d.netlify.app/), a website to check the weather data on your birth date

## Static website
Website developed with HTML, CSS, Javascript, React and Styled Components. Assets are bundled with Webpack. Application is run on Netlify.

![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-264DE4?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![React](https://img.shields.io/badge/react-18-149eca?style=for-the-badge&logo=react&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled_components-5-e59dd9?style=for-the-badge&logo=styled-components&logoColor=white)

## JS Packages (non exhaustive)

[![dayjs](https://img.shields.io/badge/dayjs-1.11.7-yellow.svg)](https://yarnpkg.com/package/dayjs)
[![animejs](https://img.shields.io/badge/animejs-3.2.1-yellow.svg)](https://yarnpkg.com/package/animejs)
[![@mui/x-date-pickers](https://img.shields.io/badge/@mui-6.2.0-yellow.svg)](https://yarnpkg.com/package/@mui/x-date-pickers)

## Run Locally

Clone the project

```bash
  git clone git@github.com:maricalmer/maricalmer.github.io.git my-project
```

Go to the project directory and remove git logs

```bash
  cd my-project
  rm -rf .git
```

Install dependencies

```bash
  bundle install
  yarn install
```

Make sure you have ./node_modules/.bin in your $PATH:

```bash
  echo $PATH
  # You should see `./node_modules/.bin` in the list
```

If it's not the case, add it:

```bash
  cd ~/code/dotfiles/<your_github_nickname>
  echo 'export PATH="./bin:./node_modules/.bin:${PATH}"' >> zshrc
  cd ~/code/<your_github_nickname>/my-project
  source ~/.zshrc
```

Start the server

```bash
  yarn start
```

## Visit the page!

[maricalmer.com](https://maricalmer.com)

## License


[birth-weather](https://incredible-cascaron-139c6d.netlify.app/)