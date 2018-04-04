class Application < Sinatra::Base
  get '/' do
    "Hello World"
  end

  get '/sample' do
    erb :sample
  end

  post '/params' do
    puts params
    erb :sample
  end

  get '/hello/:name' do
    @name = params[:name]
    erb :sample
  end
end
