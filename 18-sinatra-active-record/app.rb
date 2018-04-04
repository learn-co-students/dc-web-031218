class Application < Sinatra::Base

  get '/' do
    erb :index, layout: :home_layout
  end

  get '/sample' do
    @name = "Lancelot"
    erb :sample
  end

  get '/hello/:name' do
    @name = params[:name]
    erb :hello
  end

  get '/quiz' do
    erb :quiz
  end

  post '/submit' do
    puts params
    @success = Quiz.new(params).correct?
    erb :quiz
  end
end
