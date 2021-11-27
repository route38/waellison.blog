# Get a word count across the whole blog.
ARGV.each do |file|
  re = Regexp.try_convert(/(---.*---)(.*)/m)
  parts = re.match(File.read(file))
  if not parts.nil? then
    puts parts[2]
  end
end

