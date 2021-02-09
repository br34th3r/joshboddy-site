---
title: Why use Netlify CMS?
date: 2021-02-09T04:18:32.038Z
slug: /blog/why-use-netlify-cms
---
I recently started to play around with netlify as a CMS and I have to say that for content, it's absolutely fantastic. I'm going to try and outline why in this post and I hope to encourage any other developers to play around with it and see what they can come up with.

So the system is based around collections that you can specify in a `config.yml` file. I currently just use this for blog posts, but would like to expand it to some other collections in the future.

Once you set up a collection, you just have to define some locations for media assets as well as the data types for the fields you want to fill in to generate data.

In this case, I can convert the data to a markdown file with a frontmatter section that allows me to write blog posts, export them to `.md` and have them published on the site with minimal hassle.

Due to the CMS being accessible on the site url I assume this works well on mobile (however I have yet to try this). Because of this system, I am able to specify my own fields to fill in as well as how I want to structure my data. It also makes adding fields in future a lot easier as all I have to do is add a new field in that config file whenever I want.

The speed of data retrieval is also nothing to snark at, by converting them to files available on the repo and running a new build, it generates static assets that the site does not have to run fetch requests for as they are located locally. This puts it ahead of services like Contentful or WordPress.

Overall, I have had a great experience setting up Netlify CMS and cannot recommend it to those who are interested enough.

That's all,

Signing off,

~ Josh