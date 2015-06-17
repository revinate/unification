# Styleguide options

### Head
    <link rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.css'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap.css" />
    <link rel="stylesheet" href="assets/css/app.css" />
    <style rel='stylesheet'>
      #styleguide .sg-canvas .container {width: 100% !important;}
      #styleguide .sg-canvas .l-app {background: #F3F3F4;}
    </style>

### Body
    div.l-app#styleguide
      header.l-header
        .l-header-top
        .l-header-bottom
      main.l-main
        .container
          .l-main-content.pd-xl.mg-t-xl
            div.styleguide
              div(sg-content)
      footer.l-footer.pd-md
        p.copyright &copy; Revinate Styleguide 2015. All Rights Reserved

    script(src="bower_components/jquery/dist/jquery.min.js")
    script(src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js")
    script(src='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js')