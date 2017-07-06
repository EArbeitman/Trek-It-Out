[![Build Status](https://travis-ci.org/EArbeitman/Trek-It-Out.svg?branch=master)](https://travis-ci.org/EArbeitman/Trek-It-Out)

[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)]
# Trek->It->Out

	Trek->It->Out is a platform where people can check out personalized tours (Treks)
	submitted by people from a given area.

	The ambition behind Trek->It->Out is to encourage people to explore new places in an
	area they are familiar with and also aid people in planning trips to places they've never visited before.

	Trek->It->Out also helps tourists by showing them fun and exciting things to do that
	are not expensive tourists traps (i.e exploreing the tallest building in the city....)

## User Stories

	1. Users navigates to Trek->It->Out and searches for Treks by city or postal code
	2. Users can register with Trek->It->Out and save Treks of interest to their profile 
	for later viewing
	2a. Registered users can also submit Treks based on their experiences and share them with other
	Trekkers (not you, spock).

## Application Flow

![Application Flow Diagram]()

## Built with

* [Mongo](https://docs.mongodb.com/manual/)
* [Express](https://expressjs.com/en/4x/api.html)
* [React](https://facebook.github.io/react/)
* [Node](https://nodejs.org/en/docs/)

* [Webpack](https://webpack.github.io/)

## Continuous Integration & Continuous Deployment

	Utulized Travis CI along with Mocha test framework to acheive continuous integration
	In addition, a pipeline is setup between github and heroku such that once
	a pull request build is marked as successful, the changes will be deployed to
	heroku once the feature branch is merged into master

## New Technologies:
	* Travis CI
	* Bcrypt JS - Password Hashing
	* ReactStrap
	* Passport JS - Authentication

## Useful resources: 

* [Mongodb error index](https://stackoverflow.com/questions/24430220/*e11000-duplicate-key-error-index-in-mongodb-mongoose)
* [mLab](http://docs.mlab.com/migrating/)
* [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis)
* [Passport](http://passportjs.org/docs/username-password)
* [Axios GET Request](https://stackoverflow.com/questions/44888996/request-parameters-showing-as-undefined/44889353#44889353)

## Authors

	Evan Arbeitman
	Juan Ossa
	Noel Simonson
	Kathy Pile

