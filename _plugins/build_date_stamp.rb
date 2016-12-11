# BuildDater: print the build date in your Jekyll site.
# By W. Anthony Ellison, wae@rt38.net, Knoxville, TN, USA.
#
# Licensed under CC0.  Do as you see fit.

module Jekyll
  class BuildDateTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end
    
    def render(context)
      Time.now.strftime("Built on %Y %b %d at %H:%M:%S.")
    end
  end
end

Liquid::Template.register_tag("build_date", Jekyll::BuildDateTag);
