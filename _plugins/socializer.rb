# Socializer: A Jekyll plugin for social network links.
#
# Define social network sites in your _config.yml.
# Example yaml follows:
#
# social:
#   twitter: tnwae
#   github: tnwae
#   google-plus: 105978793783771118968
#
# Valid choices are:
# * facebook
# * twitter
# * instagram
# * google-plus (you want the big-ass number from https://plus.google.com/u/0/<BIGASS_NUMBER>/posts)
# * linkedin
# * pinterest
# * github
# * Fork me and add more
#
# Licensed under CC0.  Do as you see fit.

# For Facebook, LinkedIn:
# http://r38.co/1cH6uK7
$all_networks = {
  # TRADITIONAL SOCIAL NETWORKS, AMERICAN
  :twitter     => "http://www.twitter.com/%s",
  :gplus       => "http://plus.google.com/%s",
  :pinterest   => "http://pinterest.com/%s",
  :foursquare  => "http://foursquare.com/%s",
  :adn         => "http://app.net/%s",
  
  # OF INTEREST TO PROFESSIONALS
  :linkedin    => "http://linkedin.com/in/%s",
  :trello      => "http://trello.com/%s",
  :dribbble    => "http://dribbble.com/%s",

  # OF INTEREST TO SOFTWARE DEVELOPERS
  :github      => "http://github.com/%s",
  :bitbucket   => "http://bitbucket.org/%s",

  # BLOGGING SITES
  :rss         => "%s",
  :medium      => "http://medium.com/@%s",

  # SITES FOR PHOTOGRAPHERS AND DESIGNERS
  :flickr      => "http://flickr.com/%s",
  :behance     => "http://behance.com/%s",

  # CRAP
  :facebook    => "http://www.facebook.com/%s",
  :reddit      => "http://reddit.com/u/%s",
  :subreddit   => "http://reddit.com/r/%s",
  :tumblr      => "http://%s.tumblr.com",
  :instagram   => "http://www.instagram.com/%s",
  :deviantart  => "http://%s.deviantart.com",

  # VOICE AND EMAIL
  :phone       => "tel:%s",
  :email       => "mailto:%s",
  :skype       => "skype:%s?call",
}

module Jekyll
  class SocialNetworkTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end
    
    def render(context)
      networks = context.registers[:site].config["social"]["networks"]
      options = context.registers[:site].config["social"]["options"]
      retval = ""
      
      networks.each do |network, user|
        name = network.to_sym
        
        unless $all_networks.has_key? name then
          raise "Invalid social network #{network} in config."
        end
        
        if user.nil? then
          raise "No user defined for network #{network} in config."
        end
        
        href  = $all_networks[name] % user

        network_sanitized = network.gsub(/_/, '-')

        icon_name = case
          when options.has_key?(network)
            options[network]
          when network == "email"
            "envelope"
          else
            network_sanitized
        end

        klass = "network icon-#{network_sanitized} fa fa-#{icon_name}"
        
        retval += "    <a href='#{href}' class='#{klass}'></a>\n"
      end
      
      return "#{retval}"
    end
  end
end

Liquid::Template.register_tag("social_networks", Jekyll::SocialNetworkTag)

