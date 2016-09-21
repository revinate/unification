---
layout: post
title: "Breadcrumbs"
date: 2016-09-02 00:00:01
desc: "
- Every page should have a page header that includes a page title. You can also add breadcrumbs where needed, and acall to action button to the right (Zone 1).

- All other header tags can go directly into `.l-main-content`

- In M&amp;E right now, breadcrumbs are anchor tags inside of `ol.breadcrumb li`. We should stick to the bootstrap markup for consistency. For backwards compatibility, both markups work.
"
---

<header class="page-header">
  <ol class="breadcrumb">
    <li>
      <a href="#">Page 1</a>
    </li>
    <li>
      <a href="#">Page 2</a>
    </li>
    <li class="active">Current Page</li>
  </ol>
</header>  