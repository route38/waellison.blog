task :gulp_preview do
  system "gulp"
end

task :serve do
  system "jekyll serve --watch"
end

multitask :preview => [:gulp_preview, :serve]
task :default => [:preview]

task :gulp_deploy do
  system "gulp jekyll"
end

task :deploy => [:gulp_deploy] do
  system "./deploy.sh"
end

