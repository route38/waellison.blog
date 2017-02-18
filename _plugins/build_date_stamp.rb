# BuildDater: print the build date in your Jekyll site.
# By W. Anthony Ellison, wae@rt38.net, Knoxville, TN, USA.
#
# Licensed under CC0.  Do as you see fit.

require "git"

module Jekyll
  class BuildDateTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end
    
    def render(context)
      working_dir = Dir.getwd
      git_repos = Git.open(working_dir)
      git_hash = git_repos.object("HEAD^").sha[0..6]
      Time.now.strftime("#{git_hash} (%Y-%b-%d/%H:%M)")
    end
  end
end

Liquid::Template.register_tag("build_timestamp", Jekyll::BuildDateTag)
