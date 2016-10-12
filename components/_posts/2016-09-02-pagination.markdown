---
layout: post
title: "Pagination"
date: 2016-09-08 00:00:02
desc: "
- We are mimicking StackOverflow navigation [http://salman-w.blogspot.com/2014/04/stackoverflow-like-pagination.html](http://salman-w.blogspot.com/2014/04/stackoverflow-like-pagination.html)

- Class `.active` is applied to li elements

- 10 items displayed per page (reviews, table items, etc.

- show maximum of 5 integers in pagination list

- if greater than 5 pages, ellipsis appears to display the next 3 pages available

- ellipsis to go backward appears on page 4 of results

- first/last page number always displayed

- right/left carets advance to next page, and are always visible if more than one page of results, unless first or last page are selected, in which case that respective caret is not displayed
"
---

<nav>
  <ul class="pagination unified">
    <li class="active">
      <a href="#">1</a>
    </li>
    <li>
      <a href="#">2</a>
    </li>
    <li>
      <a href="#">3</a>
    </li>
    <li>
      <a href="#">4</a>
    </li>
    <li>
      <a href="#">5</a>
    </li>
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
      </a>
    </li>
  </ul>
</nav>

<nav>
  <ul class="pagination unified">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
      </a>
    </li>
    <li>
      <a href="#">1</a>
    </li>
    <li class="active">
    <a href="#">2</a>
    </li>
    <li>
      <a href="#">3</a>
    </li>
    <li>
      <a href="#">4</a>
    </li>
    <li>
    <a href="#">&hellip;</a>
    </li>
        <li>
          <a href="#">11</a>
        </li>
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
      </a>
    </li>
  </ul>
</nav>


<nav>
  <ul class="pagination unified">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
      </a>
    </li>
    <li>
      <a href="#">1</a>
    </li>
    <li>
    <a href="#">&hellip;</a>
    </li>
    <li>
      <a href="#">3</a>
    </li>
    <li class="active">
      <a href="#">4</a>
    </li>
    <li>
      <a href="#">5</a>
    </li>
    <li>
    <a href="#">&hellip;</a>
    </li>
        <li>
          <a href="#">11</a>
        </li>
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
      </a>
    </li>
  </ul>
</nav>


<nav>
  <ul class="pagination unified">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
      </a>
    </li>
    <li>
      <a href="#">1</a>
    </li>
    <li>
    <a href="#">&hellip;</a>
    </li>
    <li>
      <a href="#">8</a>
    </li>
    <li>
      <a href="#">9</a>
    </li>
    <li class="active">
    <a href="#">10</a>
    </li>
        <li>
          <a href="#">11</a>
        </li>
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
      </a>
    </li>
  </ul>
</nav>

<nav>
  <ul class="pagination unified">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
      </a>
    </li>
    <li>
      <a href="#">1</a>
    </li>
    <li>
    <a href="#">&hellip;</a>
    </li>
    <li>
      <a href="#">8</a>
    </li>
    <li>
      <a href="#">9</a>
    </li>
    <li>
    <a href="#">10</a>
    </li>
        <li class="active">
          <a href="#">11</a>
        </li>
  </ul>
</nav>