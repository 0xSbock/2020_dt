# 2020 Dark Templar Theme for [Zola](https://www.getzola.org/)
A dark theme for personal blogging with a visual preview for each article.

__CURRENTLY UNDER WORK!__

## Directory Structure
This theme has two main objectives:
1. blogging
2. providing a contact page

All blog posts are stored in `content/blog/`.
Each blog post has a subfolder to store the cover image (visible in the index) and additional images of the post.
The folder `content/contact/` stores data to create the page reachable under `${BASE_URL}/contact`.
Most information, like github link and mail address are stored in the [frontmatter](https://www.getzola.org/documentation/content/page) of `content/contact/index.md`.

```
.
├── config.toml
├── content
│   ├── blog
│   │   ├── _index.md
│   │   └── example_post
│   │       ├── images
│   │       │   ├── cover.jpg
│   │       │   └── example_image.jpg
│   │       └── index.md
│   ├── contact
│   │   ├── icons
│   │   │   ├── brand_icon.svg
│   │   ├── images
│   │   │   └── portrait.jpg
│   │   └── index.md
└── └── _index.md
```

## Shortcodes
You can use the `responsive_figure` shortcode to embed an image relative to your posts path (e.g. put your images for a post in `content/blog/your_post/images/image1.jpg`).
In my opinion, this allows a better encapsulation of a post and its content.
Additionally, the shortcode uses a macro to resize the image for responsive image loading using the [srcset tag](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

```
{% responsive_figure(path="images/my_image.jpg", alt="vinyl player") %}
put your optional caption for the image here
{% end %}
```

# TODOs
* [ ] redesign contact page
* [ ] test different frontmatters for overview rendering