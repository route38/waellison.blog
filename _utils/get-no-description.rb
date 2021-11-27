# Make a list of posts without descriptions.
words = 0

files = Dir.glob("_posts/*.md")

files.each do |file|
  frontmatter = /(---.*---)(.*)/m.match(File.read(file))[1]
  descriptionp = /^description:.*/.match(frontmatter)
  puts file if descriptionp == nil
end

