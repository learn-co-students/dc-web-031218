# Intro to Sinatra - MVC

Let's start by defining MVC,
Then see how to set up Sinatra
And explore some of its features
All the while, looking for M and V and C

## MVC?

Model View Controller
Logic of a web app

'Separation of concerns'
Like having helper methods
Certain things do smaller tasks
Prevents you from shoving everything into one file

Handle different areas of responsibility

Common pattern, recognizable to developers that have built similar applications

### Models

Classes

inherited from ActiveRecord::Base
Represented Nouns in your domain

Where data is manipulated and / or saved

Database interaction // CRUD

### View

What they see
Templates / 'view methods'
Sinatra - erb templates

### Controller

How you communicate _between_ the view and the models
What you can do in your application

## Configuring Sinatra

What do we need?

need the library
configuration
controller - ruby file (class Application)
erb files - views

Embedded Ruby Templates

## Sinatra Features
