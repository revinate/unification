---
layout: post
title: "Translations"
date: 2016-10-20 00:00:00
desc: "
- As a rule of thumb, any content that is 'dynamic' or user-determined (IE: survey names, etc.) should be excluded from translation. Please refer to the Smartling Glossary to determine what other terms should never be translated.

- Smartling uses no-translate class of `.smartling-notranslate`. 

- On R&S, you can use the global PHP functions `nt_html_class()` (output:`smartling-notranslate`) or `nt_qh_span('string')` (output:`<span class='smartling-notranslate'>string</span>` 

- apply either to the parent div or to a span element immediately wrapping the test you would like to ignore from translation.
"
---
<div>
    <p><span class="smartling-notranslate">This text will not be translated</span> but this text will.</p>
</div>