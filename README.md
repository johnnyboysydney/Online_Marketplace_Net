# Online Marketplace Net

[contributors-shield]: https://img.shields.io/github/contributors/johnnyboysydney/Online_Marketplace_Net.svg?style=flat-square
[contributors-url]: https://github.com/johnnyboysydney/Online_Marketplace_Net/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/johnnyboysydney/Online_Marketplace_Net.svg?style=flat-square
[forks-url]: https://github.com/johnnyboysydney/Online_Marketplace_Net/network
[stars-shield]: https://img.shields.io/github/stars/johnnyboysydney/Online_Marketplace_Net.svg?style=flat-square
[stars-url]: https://github.com/johnnyboysydney/Online_Marketplace_Net/stargazers
[issues-shield]: https://img.shields.io/github/issues/johnnyboysydney/Online_Marketplace_Net.svg?style=flat-square
[issues-url]: https://github.com/johnnyboysydney/Online_Marketplace_Net/issues
[build-style-shield]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[build-style-url]: https://github.com/feross/standard
[license-shield]: https://img.shields.io/github/license/johnnyboysydney/Online_Marketplace_Net.svg?style=flat-square
[license-url]: http://choosealicense.com/licenses/mit/
[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![JS Standard][build-style-shield]][build-style-url] [![MIT License][license-shield]][license-url]
[![Build Status](https://travis-ci.com/johnnyboysydney/Online_Marketplace_Net.svg?branch=master)](https://travis-ci.com/johnnyboysydney/Online_Marketplace_Net)

## Table of Content

- [Link to the running application](#link-to-the-running-application)
- [Description](#description)
- [Development](#development)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Demo](#demo)
- [Tests](#tests)
- [Built With](#built-with)
- [Questions](#questions)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [CopyRight](#copyright)

## Link to the running application

https://online-marketplace-net.herokuapp.com/

## Description

The Online Marketplace Net is a place where you can catch bargains from your favourite store online!

## Development

Started by creating the app folder structure that I would be using in this project. Then started by creating the back-end, once this was working added webpack and hot loaders to be able to work on the code and see the instant changes in it, and be able to troubleshoot as the issues appeared.  Once up made the template html and started creating the front end folder structure and adding the initial files that I knew I would be using. I went back and started creating the controllers and the routes and the models files.  
Started working on the user folder to have the login capability working as an important part of the app. Had issues with the JWT as it was new for me and had to watch dozen of videos and read documentation and many many examples. Went back to my early notes as not to lose track of the flow of the app.  
On the aucthentication feature and the auth folder and the user folder had to work on the files and functions and troubleshoot the most, or so I thought so. I started working on having the layout in react as it looked good, and following several tutorials on-line. Purchased severval MERN Full Stack projects and followed these to assist me in my troubleshoot any of the issues, I encountered. I spent lots of hours to go through the flow and to ensure, I did not miss anything important during the coding process.  
Once I had the front-end working with a sign up and sign in features fully funcitonal, I continued with the creation of the shops and products. this took sometime as there
many elements that required its own files. When these were done, I created the Cart funcitonality and implemented the stipe API, although I removed it, as it was not working due to some errors on my end as not having the proper client key, as the tutorils I was foillowing missed these important steps completly. After a few hours of reading the documentation and watching another video, I was able to resolve the strip development mode.  
I proceded to add an auction feature which was ver similar as the cart, just adding a timer and bidding funcitonality. This took some research and testing to get it working, some of these tutorials are not very precise or are very old using dependices that have vulvnerabiutlities and did not work on my local. Once resolved these issues I was able to fully use the auction feature.

## Installation

To use this application locally:

- Clone the GitHub repository at:
- You will to install all the dependencies, see [Dependencies](#dependencies) for the complete list
- Using ```npm install```, install all the dependencies
- Enter in the terminal ```npm run start``` and this will start the development local environment.
- To deploy to production, run ```npm run build``` and this will trigger the build and then you can publich on GitHub, Heorku, Netfily or others.

### All Dependencies

#### Dependencies  
``` xml
    "@hot-loader/react-dom": "16.13.0",
    "@material-ui/core": "4.9.8",
    "@material-ui/icons": "4.9.1",
    "compression": "1.7.4",
    "cookie-parser": "1.4.5",
    "cors": "2.8.5",
    "dotenv": "^8.2.0",
    "express": "4.17.1",
    "express-jwt": "5.3.1",
    "formidable": "1.2.2",
    "helmet": "3.22.0",
    "jsonwebtoken": "8.5.1",
    "lodash": "4.17.15",
    "mongoose": "5.9.7",
    "query-string": "6.11.1",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-hot-loader": "4.12.20",
    "react-router": "5.1.2",
    "react-router-dom": "5.1.2",
    "react-stripe-elements": "6.1.1",
    "request": "2.88.2",
    "socket.io": "2.3.0",
    "socket.io-client": "2.3.0",
    "stripe": "8.38.0"
```

#### Dev Dependencies  

``` xml
   "@babel/core": "7.9.0",
    "@babel/preset-env": "7.9.0",
    "@babel/preset-react": "7.9.4",
    "babel-loader": "8.1.0",
    "chai": "^4.2.0",
    "file-loader": "6.0.0",
    "mocha": "^8.0.1",
    "nodemon": "2.0.2",
    "webpack": "4.42.1",
    "webpack-cli": "3.3.11",
    "webpack-dev-middleware": "3.7.2",
    "webpack-hot-middleware": "2.25.0",
    "webpack-node-externals": "1.7.2"
```

## Demo

![demo](https://user-images.githubusercontent.com/54227198/88880106-417aef80-d26f-11ea-9253-f3d50784591c.gif)

### Screenshots

![onlinemarketplacenet](https://user-images.githubusercontent.com/54227198/88878271-e21ae080-d26a-11ea-9e83-fbf11d437478.JPG)

## Tests

Added Canary test, and more to come

### Built with

VScode - The editor of choice  
Notepad++ - My second editor  
Gitbash - What would we do without our bash?  

### Questions

1. How can I run the application?  
You just need to follow the instructions on the [installation](#installation) section, where it is explained

2. What if I get an error?  
Ensure that you have install all the dependencies required for this to work. See [Dependencies](#dependencies) section

3. Can I refractor the code in the any of the files file?
Yes, you can modify and refractor the code

## License

[MIT License](./LICENSE)

## Acknowledgments

- John "To my sons and daughters, who give me the power I need to keep going,  
And to the Love of my life who has endured the struggle, the journey, every step of the way, every day."

### Author

- **John Merchan**

### CopyRight

Copyright 2020 &copy; John Merchan

:australia:

[Table of Content](#Table-of-Content) --- [Back to Top](#Online-Marketplace-Net) --- [Installation](#Installation)

===========================================================================
