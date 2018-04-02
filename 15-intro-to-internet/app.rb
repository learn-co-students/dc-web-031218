require 'pry'

class App

  # To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
  # The HTTP response code
  # A Hash of headers
  # The response body, which must respond to each

  def call(env)
    req = Rack::Request.new(env)
    resp = Rack::Response.new

    # conditionally render different response based on the path
    if req.path == "/instructors"
      resp.write('All our instructors are cool')
    elsif req.path.match("/instructors")
      instructor = req.path.split('/instructors/')[1]
      resp.write("#{instructor} loves ruby")
    end

    # returns a Rack response object which has a status, headers and a body for Rack to serve
    resp.finish
  end

end
