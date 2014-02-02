# Guide

## Installation

A few things are required to develop the site:

1. Node.js (and NPM)
2. Grunt CLI (command line interface), as a Node.js module
3. Sass and Jekyll, as Ruby Gems.
4. All the Grunt plugins listed on `package.json`.

However, this project is set up so you only have to install Node.js + NPM, and when installing the dependencies listed on `package.json`, the rest will be installed for you.

First, install [Homebrew](http://brew.sh).
```
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Then, install Node.js via Homebrew. NPM, Node’s package mananger, will also be installed.
```
brew install node
```

Finally, install all the project dependencies.
```
npm install
```

This last command will install everything for you, including Grunt’s CLI, Sass and Jekyll.

## Building and Previewing

To build the site, just run `grunt`.

To preview the site locally:

1. Point your local MAMP installation at the `_site` directory.
2. Open the browser at MAMP’s URL, usually `http://localhost:8888`.

To avoid having to constantly do `grunt`, you can make Grunt automatically rebuild the site when changes are made.
```
grunt watch
```

_(Note: Rebuilding the site isn’t immediate, as Jekyll takes some time. It’ll be done Grunt outputs `Done, without errors.` in the terminal.)_

## Templating

New pages and posts need to specify the `layout` they use in the file's [front-matter](http://jekyllrb.com/docs/frontmatter/). Other properties may be defined, like `title`, used in the page's `<title>`:

    ---
    layout: default
    title: Hello World
    ---

## Accent Colors

To use custom colors on a page, it needs to specify an `accent` class on the front-matter:

    ---
    accent: xoxo
    layout: default
    title: Hello World
    ---

These are defined in a Sass file, `assets/styleshets/scss/_screen.scss`, as such:

    $accent-colors: ((default, #114A80), (jam, #76cc1e));

Here's how it looks after adding `xoxo` as a new accent color (_note the commas and spaces_):

    $accent-colors: ((default, #114A80), (jam, #76cc1e), (xoxo, #D0599F));

Finally, the Sass code must be compiled. For that, run the `update-sass` bash script on the project's root folder:

    ./update-sass

Then push, and that's it.