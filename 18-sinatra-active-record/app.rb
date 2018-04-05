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

  # Quiz Resource
  # show
  # index - list all of the quizzes
  # delete

  # show a form for creating a quiz
  # GET /quizzes/new
  get '/quizzes/new' do
    erb 'quizzes/new'.to_sym
  end

  # show - show one quiz
  get '/quizzes/:id' do
    @quiz = Quiz.find(params[:id])
    erb '/quizzes/show'.to_sym
  end

  # index - show a list of quizzes
  get '/quizzes' do
    @quizzes = Quiz.all
    erb 'quizzes/index'.to_sym
  end

  # create a new quiz
  post '/quizzes' do
    puts params
    quiz = Quiz.create(params)
    redirect to "/quizzes/#{quiz.id}"
  end

  # edit
  get '/quizzes/:id/edit' do
    @quiz = Quiz.find(params[:id])
    erb 'quizzes/edit'.to_sym
  end

  # update
  patch '/quizzes/:id' do
    @quiz = Quiz.find(params[:id])
    @quiz.update(params)
    "Successfully Updated!"
  end

  # delete
  delete '/quizzes/:id' do
    @quiz = Quiz.find(params[:id])
    @quiz.destroy
    "Successfully deleted!"
  end
end
