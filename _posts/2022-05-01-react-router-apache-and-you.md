---
layout: post
title: "React Router, Apache, and You"
category: React
---

My web presence is equal parts old and new: sure, I use React, but the
resulting site is hosted on Apache.  Here's a brief post on how to use
React Router and Apache without losing your mind.

## Client-Side Routing and You

When you use React Router to create a single-page application, all the
routing within the app is done through the HTML file you generate when
you build and deploy the project.  Hence, when you write your routing
table at the entry point of your project (`index.tsx` in my case, since
I prefer to use TypeScript React), all those routes are determined at
runtime when the user loads your SPA in her browser:

```jsx
/* imagine the usual preamble here */
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </React.StrictMode>
);
```

In the above code, `/`, `/resume` and `/portfolio` refer respectively to
the frontpage, resume, and portfolio components, which themselves render
entire parts of pages (absent the navbar and footer, which as you can
see are rendered with all components) and represent the various parts of
my resume/portfolio site.  You can then use `Link` components and so
forth as you'd expect from the React Router project, as shown in (part
of) the nav bar component:

```jsx
<menu id="topLevelNavMenu">
  <li>
    <a className="navLink" href="//waellison.blog">
      Blog
    </a>
  </li>
  <li>
      <Link className="navLink" to="/resume">Résumé</Link>
  </li>
  <li>
      <Link className="navLink" to="/portfolio">Portfolio</Link>
  </li>
</menu>
```

Easy peasy, lemon squeezy, right?  If you're running a development
server locally, that may very well be the case, and there are ways of
getting around this that are cleverer than what I've done.  Those ways,
however, require me to do things like "not running an Apache server,"
which for reasons of expediency is a non-runner right now.  Hence, we
can do an end run around this by implementing a quick, easy rewrite
engine in Apache to trick the server into doing all routing through
`index.html` at the site's root.

If you're a backend-leaning full-stack guy like me, that has to sound
pretty bizarre to your ears, since it still does to mine.  Still, I
forged ahead, figuring out the relevant rewrite rules to use to make
Apache execute such unusual behavior.

What tripped me up was that <https://waellison.io>, like all my
websites, uses HTTPS.  Apache, for those who don't know, uses separate
configuration files for HTTPS (port 443) and for HTTP, and when I
configured Let's Encrypt on my web server, it helpfully created a
`-le-ssl` version of each of the six site configurations currently
living on this server.  Within the `VirtualHost` block of _both_ config
files, I made sure the `Directory` block looked like this:

```apache
<Directory /srv/waellison.io/ >
  Options Indexes FollowSymLinks MultiViews
  AllowOverride All
  Reqiure all granted
</Directory>
```

The `AllowOverride` directive is the most important, because it allows
you to use a `.htaccess` file to override the server's behavior for a
given site.  I enable this on a per-site basis and only as needed, since
this puts an unusual amount of power at your fingertips.  Anyhow, I then
added the following lines to the `.htaccess` file at the root of
`/srv/waellison.io`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f # (1)
  RewriteCond %{REQUEST_FILENAME} !-d # (2)
  RewriteCond %{REQUEST_FILENAME} !-l # (3)
  RewriteRule . /index.html [L]
</IfModule>
```

This .htaccess file has the effect of rewriting all requests for bare
paths -- i.e., not files (1), directories (2), or symlinks (3) -- into
`/index.html`, which then takes over the routing from within React
Router, effectively handling the path of the request without the Web
server being any the wiser.  Providing that the user has JavaScript
enabled, everything works just fine.  This is, as it happens, a
continued pain point for me in React: the fact that there is no graceful
fallback for non-JS users.

In any case, this is the best way (if you're still an Apache user, as I
am) to get your React apps, complete with client-side routing, working
on the Web.

