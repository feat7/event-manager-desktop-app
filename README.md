# Event Manager Cross Platform Desktop Application

Built with electron, react, mobx

# Server Repo

[Server Repo Link](https://github.com/feat7/event-manager-server)

# Installation

1.  Clone repository
    `git clone https://github.com/feat7/event-manager-desktop-app.git`

2.  Install dependencies
    `yarn`
    or `npm install`

3.  Change `API_SERVER` in `app/config.js` if you want to use your own server. Installation procedure for server are available at [Server Repo](https://github.com/feat7/event-manager-server)

4.  To build app

* For all platfroms (Linux, Windows, MacOS) run `yarn run package-all`
* For linux: `yarn run package-linux`
* For windows: `yarn run package-win`

# Features

* Cross Platform Desktop Application
* Server End built with [Surface framework](https://github.com/feat7/Surface)
* User Registration / Login
* User Panel + Admin Panel
* Users Can create events
* Search all events with instant full text search (event name, location and type)
* Register for events
* Register Confirmation Screen
* State management with MobX
* Upload ID Card with jpeg, gif, png, jpg format

# Known issues

Since loaders aren't implemented yet, on many screens you'll feel as if you pressed the button but nothing happened.
Register screen uploads id card which takes time.

# Database

Login to phpmyadmin with following details.
`const DB_NAME = 'sql12244965'; const DB_USER = 'sql12244965'; const DB_PASS = 'P2DgnuI8Kd'; const DB_HOST = 'sql12.freemysqlhosting.net';`
can be edited in `env.config.php` to use locally.
