task :default => ["site:preview"]

namespace :site do
  desc "Only run Gulp previews."
  task :gulp_preview do
    system "gulp"
  end

  desc "Build the site, copy it to the local server, and watch for changes."
  task :serve do
    system "jekyll build --watch -d /var/www/html"
  end

  desc "Clean up the build products and the server directory."
  task :clean do
    system "jekyll clean"
    system "./cleanup.sh"
  end

  desc "Run Gulp and serve the site concurrently."
  multitask :preview => [:gulp_preview, :serve]

  desc "Build the site and its assets."
  task :build do
    system "gulp jekyll"
  end

  desc "Deploy the site to the production server."
  task :deploy => [:build] do
    system "./deploy.sh"
  end
end

namespace :deps do
  desc "Update build dependencies."
  task :update do
    system "bundle update"
    system "yarn upgrade"
  end

  desc "Install build dependencies.  Install Bundle (Ruby) and Yarn (NPM) first."
  task :init do
    system "bundle install"
    system "yarn install"
  end
end

