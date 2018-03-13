require 'rest-client'
require 'pry'
require 'json'

url = 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

def get_books(url)
  response = RestClient.get(url)
  hash = JSON.parse(response)
  hash['items']
end

def print_books(url)
  #  take an array and calls method(s) for each element of it
  books = get_books(url)
  books.each do |book|
    puts '********************'
    puts get_title(book)
    puts get_authors(book)
  end
end

def get_authors(book)
  # takes a book hash and returns author
  "#{book['volumeInfo']['authors'].join(' & ')}"
  # author and author and author
end

def get_description(book)
  # takes a book hash and return description
end

def get_title(book)
  # takes a book hash and return title
  "\"#{book['volumeInfo']['title']}\""
end

print_books(url)
