---
layout: default
title: Byword MultiMarkdown Guide  
accent: jam
---
  
# Byword MultiMarkdown Guide

## Introduction

Markdown is a text formatting syntax inspired on plain text email. It is extremely simple, memorizable and visually lightweight on artifacts so as not to hinder reading -- characteristics that go hand in hand with the essence of **Byword**.

In the words of its creator, [John Gruber][link-gruber]:
> The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.

[link-gruber]: http://daringfireball.net/

In the next sections you'll be guided through some of the features that will make **Byword** your new favorite Markdown editor. 

---

## Syntax Reference

If you're unfamiliar with Markdown's syntax, please spare a couple of minutes going through the [syntax guide][link-syntax]. Otherwise, just go ahead and skip to the next section.

1. Thing
2. Another Thing
    * Subthing
    * Subthing long
    * Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, non, quam similique quae veritatis accusamus eligendi laudantium dicta dignissimos delectus sint asperiores unde numquam excepturi illo saepe eius reiciendis. Nihil.
    * Other
3. Thing

[link-syntax]: syntax.html "Markdown syntax guide"

--- 

## Editing Markdown documents

This section is dedicated to introduce you to the differences between editing plain/rich text documents and Markdown documents.

### Creating new documents

To create a Markdown document, head to the File menu and select "New Markdown document" or simply press the shortcut â‡§âŒ˜N.

> **NOTE**  
> You can convert a plain text document to a Markdown document by going to the "Format" menu and pressing âŒ¥ to reveal Markdown conversion option or pressing the combination
>
> To confirm that you're editing in Markdown mode, look at the counters at the bottom of your screen. If the counters are not visible, you can enable them by using the shortcut

### Opening documents

Markdown documents are opened like any other document, but **Byword** will only recognize and activate Markdown features if the file is bearing a well-known extension.

The recognized extensions are `.md`, `.markdown`, `.mdown` and `.markdn`.

If the document does not have one of these well-known extensions, you can always enable Markdown features by converting the file (âŒ¥â‡§âŒ˜T).

> **NOTE**  
> While Markdown does not have an official extension we recommend the usage of `.md`, as it's the most widely adopted one.

### Handy shortcuts

Even though Markdown's formatting syntax is light, there are a couple of commonly used style artifacts that force your hands out of their natural stance when typing -- **bold** and *italic*.

**Byword** preserves the hotkeys widely used for these effects. If you're about to write a word in bold or italic, just type âŒ˜B or âŒ˜I and it will place the corresponding formatting elements in place and advance the cursor. You can also select a word and apply the style or, conversely, select a word wrapped by these styles and **Byword** will remove them for you.

### Images

If you drag images into the text, they will automatically be replaced by a Markdown reference to the file.

Due to **Byword**'s MultiMarkdown support you can even add custom attributes to your images, altering the way they're displayed. Please refer to [Custom attributes][section-mmd-attributes] section on the MultiMarkdown highlights chapter for more details.

> **NOTE**  
> Keep in mind that when dragging images to the text, **Byword** will introduce a reference to that file's location on your disk (noticeable by the `file:` prefix).
> When publishing online, make sure you update this reference, otherwise you'll run into broken links.

---

## Exporting documents

In the vast majority of times, you will be using Markdown for its *raison d'Ãªtre* -- as a source format to generate HTML. **Byword** let's you export the HTML output in two ways:

![Alt text](http://farm8.staticflickr.com/7141/6796099195_c8152901b4_b.jpg "Optional title")

* Copy the HTML output directly to your clipboard -- so you can conveniently paste it into your favorite HTML editor[^fn-export];
* Export to a file.

[^fn-export]: When copying to clipboard, **Byword** will only place the equivalent of the `body` tag contents. On the other hand, when exporting to a file, a complete HTML file will be generated.

We know how much you love **Byword**'s aesthetics so we even added a little bonus to the option of exporting to a file.

![Alt text](http://farm8.staticflickr.com/7141/6796099195_c8152901b4_b.jpg "Optional title")

Including **Byword**'s theme in the exported file will give you an exact copy of what you see in the preview mode. With this option enabled, font type, size and text width will be preserved when the output file is generated.

---

[link-source]: guide.md "User guide MultiMarkdown source"

If you have any doubts don't hesitate to contact us via email at **byword@metaclassy.com** or via Twitter at [@bywordapp][link-twitter_bywordapp] or [@metaclassy][link-twitter_metaclassy].

[link-twitter_bywordapp]: http://twitter.com/bywordapp "Byword on Twitter"
[link-twitter_metaclassy]: http://twitter.com/metaclassy "Metaclassy on Twitter"

Enjoy,  
The Byword team.