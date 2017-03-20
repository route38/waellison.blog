# very special developments _!!_

Version 3.0 "Fifty Ways to Peeve Your Blogger"

vsdev.org is the finest in nerd entertainment since 2016.  PHP fucking
blows, and Bootstrap -- at least for my purposes -- is a monument to
bloat.

Based in approximately 99% large part on my very closely related
project, [tnwae.us](//github.com/tnwae/tnwae.us).  Created with a
soundtrack consisting primarily of old Paul Simon albums.

Proudly made on a Chromebook Pixel since 2017.  Shit's awesome, you
should try it.

Problems?  Tough shit.  In all seriousness, email <mail@tnwae.us> or
start an issue on this project if something looks funny.  If you want
for some reason to guest post, do it as a pull request.

## Come with me if you want to build!

I've moved almost everything to Rake.  To use the included code and
build system here:

0.  Fork and clone this repository to your computer.

1.  Remove my content and add your own.

2.  Bend what remains to your will (bring out yer Sass/Coffee/whatever).

3.  Hack the deployment script so it pushes to your web host and
    directory (or whatever).

4.  Install Ruby and Node via your preferred methods, and install
    Bundler (`gem install bundler`), Rake (`gem install rake`), and Yarn
    (`npm install -g yarn` as the superuser).  Then run `rake init` to
    install Jekyll, Gulp, and their dependencies.

5.  Providing that you can run Jekyll and Gulp from the command line,
    run `rake preview` to preview the site.

6.  When you're ready to deploy the website, run `rake deploy` to do so.
    This will execute the contents of `deploy.sh` in the site root.

## A wee note to fellow Slackers

I couldn't make RVM work on my Slackware installation, so instead I just
used the bundled Ruby (2.2.5p319) and installed the binary package for
the LTS version of Node (6.9.5) off `/opt/local/node`, modifying my path
accordingly.  So I could install packages in my home directory, I set
$GEM_HOME and $GEM_PATH both to `"$HOME/.gem"`, allowing me to run Gem
programs from the command line.

If you find a way to make RVM work on Slackware, that's nice.  Go blog
about it or something, because I don't really care.

## License for this shit

For the code (in ./COPYING), WTFPL.  Choose freedom, do what the fuck
you want to.

CC BY-SA 4.0 for the content.

CC BY-NC-ND 4.0 for the photos.

