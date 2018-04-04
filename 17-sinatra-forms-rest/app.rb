class Application < Sinatra::Base
  get '/' do
    "Hello World"
  end

  get '/sample' do
    erb :sample
  end

  get '/hello/:name' do
    name = params[:name]
    "Hello, #{name}!"
  end
end
