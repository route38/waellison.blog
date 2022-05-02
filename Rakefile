task :default => ["site:serve"]

namespace :site do
  desc "Clean up the build products and the server directory."
  task :clean do
    site_clean
  end

  desc "Build the site and watch for changes."
  task :serve => [:clean] do
    system "jekyll serve --future --watch"
  end

  desc "Build the site and its assets."
  task :build => [:clean] do
    system "jekyll build"
  end

  desc "Deploy the site to the production server."
  task :deploy => [:clean, :build] do
    system "bash deploy.sh"
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
  end

  desc "Install build dependencies."
  task :init do
    system "bundle install"
  end
end

