# Get a word count across the whole blog.

words = 0

files = Dir.glob("*/*.md") + Dir.glob("*/*.textile")

files.each do |file|
  re = Regexp.try_convert(/(---.*---)(.*)/m)
  parts = re.match(File.read(file))
  if not parts.nil? then
    length = parts[2].split.length
    words += length
  end
end

puts words

