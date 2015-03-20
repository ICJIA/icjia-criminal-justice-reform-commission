Illinois CJ Reform Commission
=============================

Basic static site template using [grunt](http://gruntjs.com/) and [assemble](http://assemble.io/).

## Pre-installation

Make sure [node](http://www.nodejs.org) and [bower](http://bower.io/) are installed.

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

Stock photography from:
- https://stocksnap.io/
- https://unsplash.com/

[Google Fonts](http://fonts.google.com) used:
- [Gentium Book Basic](http://www.google.com/fonts/specimen/Gentium+Book+Basic)
- [Oswald](https://www.google.com/fonts/specimen/Oswald)
- [PT Mono](http://www.google.com/fonts/specimen/PT+Mono)
