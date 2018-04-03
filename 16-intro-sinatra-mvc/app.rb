class Application < Sinatra::Base
  # def call(env)
  #   req = Rack::Request.new(env)
  #   resp = Rack::Response.new
  #   resp.write("Hello World")
  #   resp.finish
  # end

  get '/' do
    "Hello Earth"
  end

  get '/sample' do
    erb :sample
  end

  get '/hello/:name' do
    # matches "GET /hello/foo" and "GET /hello/bar"
    # params['name'] is 'foo' or 'bar'
    @name = params[:name]
    erb :sample
  end
end
