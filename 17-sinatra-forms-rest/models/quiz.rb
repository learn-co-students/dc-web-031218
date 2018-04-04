class Quiz

  GRYFFINDOR_NAMES = ["Harry", "Ron", "Hermione", "Neville", "Ginny"]

  def initialize(params)
    @params = params
  end

  def correct?
    check_house && check_members
  end

  def check_house
    @params[:house].downcase == "gryffindor"
  end

  def check_members
    @params[:member].length == 3 &&
    @params[:member].all? { |member| GRYFFINDOR_NAMES.include?(member) }
  end
end
