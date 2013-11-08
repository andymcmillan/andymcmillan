# Guide

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