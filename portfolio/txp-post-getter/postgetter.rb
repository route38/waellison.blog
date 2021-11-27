class String
  def sanitize
    shit = self.split /(?<=.)\.(?=[^.])(?!.*\.[^.])/m
    shit.map! { |turd| turd.gsub(/[^a-z0-9\.\-]+/i, '').downcase }
    shit.join("-")
  end
end

class Post
  attr_accessor :date
  attr_accessor :name
  attr_accessor :slug
  attr_accessor :content

  def ext
    "textile"
  end
  
  def filename
    "#{@date}-#{@slug}.#{self.ext}"
  end
  
  def to_s
    @content
  end
  
  def slugify the_name
    parts = the_name.split(" ")
    parts.each { |part| part.downcase! }
    parts.join("-").sanitize
  end
  
  def write_to_file
    @slug = slugify name
    preamble = <<-eos
---
title: "#{@name}"
layout: post
description:
---
    eos

    File::open(self.filename, "w") do |f|
      f << preamble
      f << self.to_s
    end
  end
  
  def initialize
    @name = gets.chomp
    @date = gets.chomp.split(" ")[0]
    @content = ""
    crap = ""
    
    while(crap = gets and crap.chomp != "<<end>>")
      @content += crap
    end
  end
end

posts = Array.new

while not STDIN.eof?
  posts << Post.new
end

posts.each { |post| post.write_to_file }

puts "Processed #{posts.length} posts."