# List all posts older than one year.
require "date"

files = Dir.glob("_posts/*.md") + Dir.glob("_posts/*.textile")

files.sort!
now = DateTime.now

files.each do |file|
  parts = file.split(/_posts\/(\d{4})-(\d{2})-(\d{2})-([^\.]+)/)
  year = parts[1]
  month = parts[2]
  day = parts[3]
  name = parts[4]

  post = DateTime.new(year.to_i, month.to_i, day.to_i, 0, 0, 0)

  permalink = "/#{year}/#{month}/#{name}" 
  puts permalink if post < (now << 12)
end

