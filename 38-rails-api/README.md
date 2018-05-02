## Setting Up A Rails API for the First Time

Remember that when you create a new Rails application with `rails new <your_app>`, by default Rails will provide you with a ton of stuff we will not need to build an API. Think of the entire ActionView library (all the view helper methods like `form_for`), ERB, the way sessions and cookies are handled, etc.

[Rails provides a way](http://edgeguides.rubyonrails.org/api_app.html) to set up a project that will not have all that by default and will also include some of the common tools needed for APIs. What you'll type is `rails new <your_app> --api`

### Instructions

* In your terminal enter the following command:

```
rails new <my_app_name> --database=postgresql --api
```

_(Replace `<my_app_name>` with the actual name of your project)_

* This will generate a new rails project using postgres as the database. **Make sure you are running postgres on your computer**. Look for the elephant icon at the top of your screen. We'll want to use postgres in case you want to push this application to production on heroku.

* We specify the `--api` flag so rails knows to set this up as an API.

* `cd` into the new project folder you just created

* Navigate to your gemfile and uncomment `gem 'rack-cors'` This will allow us to setup Cross Origin Resource Sharing (CORS) in our API. You can read more about CORS [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

  * Basically, CORS is a security feature that prevents API calls from unknown origins. For example, if someone tried to use some malicious JavaScript to steal your bank information and your bank allowed API calls from anywhere, this could be a bad news bears situation.

- Make sure you add the `gem 'active_model_serializers'` to your gemfile. Read [this](https://en.wikipedia.org/wiki/Serialization) if you're curious about serialization. Essentially, we need to convert our data into a format that can be easily transferred across a network and reconstructed later. Remember, our frontend and backend live in different repositories and therefore have to make requests across the _interwebs_.

- Run `bundle install` or just `bundle` if you feel fancy and like shortcuts

- Inside of `config/initializers/cors.rb` uncomment the following code:

  ```
  Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'

      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  ```

  (This snippet is from the [documentation for the rack-cors gem](https://github.com/cyu/rack-cors))

  Inside the `allow` block, `origins '*'` means we are allowing requests from **all** origins and are allowing `[:get, :post, :patch, :delete]` requests to the API. Read [this](https://www.w3schools.com/tags/ref_httpmethods.asp) if you need a refresher on HTTP methods.

  This may come as a shock but `config.api_only = true` tells our app that it is going to be an **API only**. In other words, our API **will not generate any HTML** and instead will return JSON. The frontend is responsible for taking that JSON, formatting the data, and generating HTML to show to the user. Read [this](https://www.w3schools.com/js/js_json_intro.asp) if you want to review what JSON is and why we use it.

  For now, we will leave the origins open. Later on, we can change this to only allow requests from the address of the frontend repo––`http://my-frontend.com` for example.

### Routes & Controller

Imagine we are building out a note sharing application like Evernote.

Since, eventually, our frontend application might be hosted on a specific domain i.e. `http://alwaysnote.com`, we will want all of our backend routes to be _namespaced_ to indicate they are routes associated with the API.

An example route might look like `http://<your-domain>.com/api/v1/notes`

### Example Controller

We'll have a `NotesController` with normal CRUD functionality. But remember we need namespaced routes, and in Rails the file structure and file names of the application are very closely tied to the implementation. You may remember [nested resources in rails](http://guides.rubyonrails.org/routing.html#nested-resources) from Module 2.

Run:

```
rails g controller api/v1/Notes
```

Notice that the controller file this created lives in `/app/controllers/api/v1/notes_controller.rb` and the actual class name of the controller is namespaced like `Api::V1::NotesController` as well.

**Note on API Versioning:**
_This is the first version of our API. Therefore, the controller should go inside api/v1. If anyone is relying on our API and we update the code in a way that would break other people's projects, it's good practice to make that update its own version of the API. Read [this](https://chriskottom.com/blog/2017/04/versioning-a-rails-api/) if you're curious about API versioning._

We'll only be dealing with the index and update actions for this example `/app/controllers/api/v1/notes_controller`:

```ruby
class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  def update
    @note = Note.find(params[:id])

    @note.update(note_params)
    if @note.save
      render json: @note
    else
      render json: {errors: @note.errors.full_messages}, status: 422
    end
  end

  private
  def note_params
    params.permit(:title, :content)
  end

end
```

A few things are happening in the above methods:

1.  We're rendering all notes in the form of JSON
2.  We're creating a new note based on whatever note*params we get from our \_frontend*
3.  We're setting out `note_params` to permit a parameter named `title` and a parameter named `content`. _These must be included in the body of the POST or PATCH requests we will be making with JS `fetch`_

### Example Routes

The routes we define in `config/routes.rb` need to correspond to the namespaced controller we created. They should be defined as follows:

```ruby
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :notes, only: [:index, :update]
    end
  end
end
```

### Test Out your Application

Your API now has two working _endpoints_, or routes that it exposes to the public. To see all the notes, for example, we could navigate to `http://localhost:3000/api/v1/notes`

At this point it is probably a good idea to add some seed data and make sure everything is properly wired up.

**Major 🔑 alert:** Having the [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US) Chrome extension installed. This will make JSON data _much_ easier to read.
