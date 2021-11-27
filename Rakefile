task :default => ["site:preview"]

namespace :site do
  desc "Only run Gulp previews."
  task :gulp_preview do
    system "gulp"
  end

  desc "Build the site and watch for changes."
  task :serve do
    system "gulp"
  end

  desc "Clean up the build products and the server directory."
  task :clean do
    site_clean
  end

  desc "Build the site and its assets."
  task :build => [:clean] do
    system "gulp jekyll"
  end

  desc "Deploy the site to the production server."
  task :deploy => [:clean, :build] do
    system "./deploy.sh"
  end

  task :default => [:clean, :build]
end

def site_clean
  system "jekyll clean"
end

namespace :deps do
  desc "Update build dependencies."
  task :update do
    system "bundle update"
    system "npm update"
  end

  desc "Install build dependencies."
  task :init do
    system "bundle install"
    system "npm install"
  end
end

