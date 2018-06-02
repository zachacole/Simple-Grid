# My Simple Grid [![Build Status](https://travis-ci.org/alegorico/my-simplegrid.svg?branch=master)](https://travis-ci.org/alegorico/my-simplegrid) [![](https://data.jsdelivr.com/v1/package/npm/my-simplegrid/badge)](https://www.jsdelivr.com/package/npm/my-simplegrid)
A lightweight, responsive CSS grid  

Based by [Zach Cole](http://simplegrid.io) development

## bower, yarn, npm
```shell
    bower install my-simplegrid
```    

```shell
    yarn add my-simplegrid
    # or
    # npm i my-simplegrid
```

## My Simple Grid and Simple Code

My Simple Grid is a mobile-first 12-column CSS grid system to make developing responsive websites easy and fast.

All the code you need is simple and familiar. A parent container class contains the grid. Within the container are rows. Row classes denote rows of content, which can be filled with up to 12 columns. Columns must be nested within a row. 

To define your column width, declare how many columns you want your content to take up on desktop and large screens. For example, if your content should take up 6 out of 12 columns (or half the container), your class name will be .col-6.

If you don’t want columns to expand on mobile devices and small screens, simply add -sm to the end of your column class name. For example, if you want to have two blocks of content floating side-by-side on small screens, each would be given the class name .col-6-sm.

```html

<!-- example -->
<link rel="stylesheet" href="dist/my-simple-grid.min.css" />

    <!-- code example -->
    <div class="container">
      <div class="row">
        <div class="col-3">
          <!-- This content will take up 3/12 (or 1/4) of the container -->
        </div>
        <div class="col-3">
          <!-- This content will take up 3/12 (or 1/4) of the container -->
        </div>
        <div class="col-6">
          <!-- This content will take up 6/12 (or 1/2) of the container -->
        </div>
      </div>
    </div>

```

## License

    Open source under the MIT License.
