require 'OS'

task :default => ["site:serve"]

def browser_open url
    case
    when OS.mac?
        command = "open #{url}"
    when OS.windows?
        command = "start #{url}"
    when OS.linux?
        command = "xdg-open #{url}"
    else
        raise StandardError.new "bad platform"
    end

    system command
end

def site_clean
    system "jekyll clean"
end  

namespace :site do
  desc "Clean up the build products and the server directory."
  task :clean do
    site_clean
  end

  desc "Build the site and watch for changes."
  task :serve, [:port] => [:clean] do |t, args|
    port = args[:port]

    unless port.nil? then
      command = "jekyll serve --future --port #{port} --watch"
      url = "http://localhost:#{port}"
    else
      command = "jekyll serve --future --watch"
      url = "http://localhost:4000"
    end

    begin
        browser_open url
    rescue StandardError => ex
        STDERR.puts "cannot open browser; continuing with Jekyll"
        STDERR.puts "visit `#{url}` in your web browser to view the site"
    end

    system command
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
