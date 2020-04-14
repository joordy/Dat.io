# Dat.io

**[Dat.io](https://bt-datingapp.herokuapp.com/)** is a dating application made with Node.js, Express and EJS which provides the main function of our application such as register, filter, like and match!

(image's, of 3/4/5 screens in a row?)

This is a datingapp made together with [@RowanHorn](https://github.com/rowanhorn1412), [@VeerlePrins](https://github.com/veerleprins) and [@Joordy](https://github.com/joordy). With the application Dat.io makes it possible to register, logging in, filter the users, liking a user and ofcourse match with the users you like, when the interest is mutual. To read the process of creating the complete application, you can have a look in [our Wiki](https://github.com/joordy/BT-datingapp/wiki). Visit our application **[here](https://bt-datingapp.herokuapp.com/)**.

## Table of content

1. Job Stories
2. Setup
3. Usage
4. Database
5. License
6. Resources

## Job Stories

#### Register/login:

> When a user is going to create a profile on the application for the first time, the user wants to be given various options to fill in his profile as independently as possible, so that other users who find his profile know exactly what kind of person the user is. The user also wants to be sure that his account is safe.

#### Filter:

> When I sit on the couch at home with my phone in my hands, I want to be able to filter on the movie preferences of my possible matches, so that I don't have a fight in the future about which movie genre we're going to watch (for example on Netflix).

#### Liking/matching:

> When the user is looking for a date, he wants to find one with mutual connections, so he can like them, and when the interest is mutual, they will be connected.

## Setup

When you already have a connection with [Git](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html), and installed [NodeJs](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm) on your computer you can easilly download my project. If you haven't already installed these programs, I recommend to do that first.

### 1. Clone folder

You can clone our repository by typing the following command in your command-line:

`git clone https://github.com/joordy/BT-datingapp.git`

### 2. Install NPM Packages

Now you can navigate to the app, with `cd BT-datingapp`. The package.json file contains all the required modules. You can install all the necessary modules (stored in the dependencies) with the following command:

`npm install`

### 3. Run the code!

Go to the repository in the terminal and add the following line of code below:

`npm run start`

## Usage

You can visit [localhost:8000](http://localhost:8000/) to view the application. Or open the app with [Heroku](https://bt-datingapp.herokuapp.com/), to try the deployed version.

## Database

For the Datio dating application, we used a new database collection with all our users' data stored inside. This data consists of the following components:

![Database structure](https://user-images.githubusercontent.com/35265583/79114896-c3104580-7d84-11ea-8581-dd5cd8118323.png)

When you have liked persons, the database will look like this.
![Liked after](https://user-images.githubusercontent.com/35265583/79119645-1f796200-7d91-11ea-9f70-e754d5a6c96e.png)

## License

> You can see the license [here](https://github.com/joordy/BT-datingapp/blob/master/LICENSE).

This project is licensed under the terms of the MIT license.

## Resources

- NodeJS. (n.d.). — Download. Retrieved 2020, February 1, from https://nodejs.org/en/download/
