# tnwae.us _!!_

Hey, look, a blog!  The finest in nerd entertainment since 2016.  Sorta.

100% Bootstrap-free, built with Jekyll but with an external asset pipeline through Gulp.  The assets are built in full compliance with modern development standards and tools and are written as follows:

* Transformation engine: Jekyll
* Asset pipeline: Gulp
* Templates: Haml/Liquid
* Pages: Mostly Markdown, but a few plain HTML pages backported from other projects of mine
* Stylesheets: Sass (whitespace-significant syntax, which I prefer)
* Scripts: CoffeeScript

Problems? Email <mail@tnwae.us> or start an issue on this project.

## How to build

The provided instructions have been tesed to work on Slackware 14.2 and probably work on other modern Linux distros and other Unix-like OSes such as the various BSDs.  They may work, with some slight changes, on macOS, but I do not use, condone the use of, or own a modern Macintosh to test it on.  I neither know nor care if these instructions will work on Windows, though you can use Ubuntu on Windows 10 (high likelihood of working) or perhaps Cygwin (untested and probably unlikely to work).

To use the included code and build system here:

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
  * gulp-coffeelint
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

WTFPL for the code etc.

CC BY-SA 4.0 for the content.

CC BY-NC-ND 4.0 for the photos.
