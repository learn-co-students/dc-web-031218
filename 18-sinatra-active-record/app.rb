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

  # create - create an attempt
  post '/attempts' do
    puts params
    @result = Quiz.new(params).correct?
    attempt = Attempt.create(submission: params.to_s, status: @result)
    redirect to "/attempts/#{attempt.id}"
    # erb 'attempts/show'.to_sym
  end

  # Routes - some resource
  # Attempts
  #   a set of answers to a question
  # show - get a single attempt by id
  get '/attempts/:id' do
    @attempt = Attempt.find(params[:id])
    erb 'attempts/show'.to_sym
  end
end
