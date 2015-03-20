Illinois CJ Reform Commission
=============================

A website constructed with [assemble.io](http://assemble.io/), a static site generator. The site has no database. All pages are assembled by [grunt](http://gruntjs.com/)  and [assemble](http://assemble.io/) during development and deployment. For more information and full documentation on Assemble, see: [http://assemble.io/](http://assemble.io/). This site is built with Assemble .0.4.42.


The working development directory is **/src/**. All edits and updates should be made in this directory. A small development server is included (http://localhost:9000) as part of the installation and has LiveReload enabled by default. This enables grunt to detect development changes and automatically refresh your browser. If your javascript is edited or updated, you'll need to stop the grunt server task and re-run it (CTRL-C on the command line to terminate grunt). CSS and HTML changes, however, are reflected automatically.

The deployed project is located in the **/out/** directory. During the deployment task, grunt assembles the project, minifies and concatenates the css and js, and removes all the whitespace and comments from the HTML. Images are also optimized.

Once the deployment task is complete, you'll manually FTP the project from the **/out/** directory to the server. For more information on the specific development and deployment tasks, see below.




## Pre-installation

Make sure [node](http://www.nodejs.org) and [bower](http://bower.io/) are installed. For more information or questions about installation, please contact me.

Once node and bower installed, you'll want to make sure that Grunt's command line interface (CLI) is installed globally:

```bash
npm install -g grunt-cli
```

For more information on grunt, see [gruntjs](http://gruntjs.com/).

## Project installation

- Download zip or clone into working directory
- Open terminal window and type:

```bash

cd (working directory)
npm install
bower install

```

## Development

Change the domain and root in /src/_data/site.yml. If you're working from a local machine, you'll want to make sure the domain and root are set for the development environment and that the deployment targets are commented out:

```bash
#root: '/icjiadev/'
#domain: 'http://www.icjia.org'

root: '/'
domain: '127.0.0.1:9000'
```

To run project with the built-in dev server and watch task:
```bash
grunt
```

Front page should display automatically. If not, browse to: http://127.0.0.1:9000

Source code changes are automatically detected and browser page is refreshed via LiveReload.

All edits must be made in /src/ directory. The /out/ directory is deleted before each deployment and re-built from /src/.




## Deployment

Change the domain and root in /src/_data/site.yml for your deployment target and make sure the development domain and root are commented out:

```bash
root: '/icjiadev/'
domain: 'http://www.icjia.org'

# root: '/'
# domain: '127.0.0.1:9000'
```

To deploy project (optimize images, minify and concatenate html, js, and css):
```bash
grunt deploy
```

Ready-to-deploy project is in /out/ directory.

## Acknowledgements


Special thanks to:
- https://github.com/Hypercubed/assemble-bootstrap-template
- https://www.themarshallproject.org/
- https://css-tricks.com/reading-position-indicator/

Stock photography from:
- https://stocksnap.io/
- https://unsplash.com/
- http://www.istockphoto.com

[Google Fonts](http://fonts.google.com):
- [Gentium Book Basic](http://www.google.com/fonts/specimen/Gentium+Book+Basic)
- [Oswald](https://www.google.com/fonts/specimen/Oswald)
- [PT Mono](http://www.google.com/fonts/specimen/PT+Mono)
