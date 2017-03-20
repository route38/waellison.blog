task :gulp_preview do
  system "gulp"
end

task :serve do
  system "jekyll serve --watch --host 0.0.0.0"
end

multitask :preview => [:gulp_preview, :serve]
task :default => [:preview]

task :build do
  system "gulp jekyll"
end

task :deploy => [:build] do
  system "./deploy.sh"
end

task :update do
  system "bundle update"
  system "yarn upgrade"
end

task :init do
  system "bundle install"
  system "yarn install"
end

