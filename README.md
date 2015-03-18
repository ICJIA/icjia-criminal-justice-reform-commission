Illinois Criminal Justice Reform Commission Template
====================================================

Basic static site template using [grunt](http://gruntjs.com/) and [assemble](http://assemble.io/).

# Installation

- Download zip or clone into working directory
- Open terminal window and type:

```bash

cd (working directory)
npm install
bower install
grunt fonts (to install local versions of google fonts)
```

# Development

To run project with the built-in dev server and watch task:
```bash
grunt
```

Front page should display automatically. If not, browse to: http://127.0.0.1:9000

Source code changes are automatically detected and browser page is refreshed via LiveReload.

All edits must be made in /src/ directory. The /out/ directory is deleted before each deployment and re-built from /src/.

# Deployment


To deploy project (optimize images, minify and concatenate html, js, and css):
```bash
grunt deploy
```

Ready-to-deploy project is in /out/ directory.

# Acknowledgements


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
