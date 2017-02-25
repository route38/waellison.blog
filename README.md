# very special developments _!!_

Who's the best blogger?

<small>guess what it's you</small>

(With apologies to SB Nation's Jon Bois, truly one of the luminaries of this generation.)

vsdev.org is the finest in nerd entertainment since 2016.  PHP fucking blows, and Bootstrap -- at least for my purposes -- is a monument to bloat.

Based in approximately 99% large part on my very closely related project, [tnwae.us](//github.com/tnwae/tnwae.us).  Created by a soundtrack consisting primarily of old Paul Simon albums and Thinkpad fan noise.

Made with pride and more than a little technical bigotry on Slackware Linux.

Problems?  Tough shit.  In all seriousness, email <mail@tnwae.us> or start an issue on this project if something looks funny.  If you want for some reason to guest post, do it as a pull request.

## Come with me if you want to build!

Much to my chagrin, I've tested these instructions on Ubuntu 16.04 LTS, and much more happily, I've also tested them on Slackware 14.2, both amd64.  Other Linuxes probably work, too, but I'm in the process of exorcising my home of all systemd-based Linuxes and so I don't know or care if it works on, say, Fedora or Debian.  I also don't know or care if this will work on macOS, Windows, Cygwin, Haiku, or the OS/2 box you dredged up from your employer's back room.  Ubuntu on Windows 10 *probably* works, but I've not tested it.

The remainder of these instructions is almost verbatim from tnwae.us.  To use the included code and build system here:

0.  Fork and clone this repository to your computer.

1.  Remove my content and add your own.

2.  Bend what remains to your will (bring out yer Sass/Coffee/whatever).

3.  Hack the deployment script so it pushes to your web host and directory (or whatever).

4.  To build the site, you will need to install the gems in the Gemfile (either set $GEM_HOME and $GEM_DIR, or use RVM/`rbenv`, then just run `gem install bundler && bundle install` from the project root) and the NPM packages referenced in the Gulpfile.  (Sorry, I haven't started using a Node analog to Bundler yet, tho' Yarn looks promising.)  In particular:

  * gulp
  * gulp-cli
  * gulp-util
  * gulp-ruby-sass
  * gulp-ruby-haml
  * gulp-coffee
  * gulp-sourcemaps
  * gulp-coffee-lint
  * gulp-sass-lint
  * gulp-uglify
  * gulp-clean-css
  * child_process
  * browser_sync

5. Providing that your $PATH is enriched accordingly, you should be able to run `jekyll` and `gulp` from the command line.  In separate shells, run `jekyll serve --watch` and `gulp` to build assets and the site itself as things change.  Browser-sync is included in the Gulp file, but I don't remember why I disabled it.

6. To deploy the site, just run `./deploy.sh` from the root of the repository.  This does require `rsync` and as such, you must use an OS that supports `rsync` or find your own means of synchronizing the site state on your computer with that on your server.  If you use anything more exotic than a standard Web hosting account (such as the VPS I use at Linode), you'll need to do your own deployment method.

## A wee note to fellow Slackers

I couldn't make RVM work on my Slackware installation, so instead I just used the bundled Ruby (2.2.5p319) and installed the binary package for the LTS version of Node (6.9.5) off `/opt/local/node`, modifying my path accordingly.  So I could install packages in my home directory, I set $GEM_HOME and $GEM_PATH both to `"$HOME/.gem"`, allowing me to run Gem programs from the command line.

If you find a way to make RVM work on Slackware, that's nice.  Go blog about it or something, because I don't really care.

## License for this shit

For the code (in ./COPYING), WTFPL.  Choose freedom, do what the fuck you want to.

CC BY-SA 4.0 for the content.

CC BY-NC-ND 4.0 for the photos.
