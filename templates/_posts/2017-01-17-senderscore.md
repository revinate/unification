---
layout: post
title: "Sender Score"
date: 2016-12-19 00:00:01
desc: "
- POC for frontend of email deliverability report
"
---

<div class="senderscore">
<header class="page-header">
    <h1>Sender Score for ((Account Name))</h1>
</header>
  <div class="row">
  <div class="col-xs-12">
      <p>Your current Sender score is 68. Your score may be low for several factors, please see the table below to resolve recent issues and increase your score</p>
    </div>
      <div class="col-md-6">
        <div class="dashboard-widget">
                <h4 class="dashboard-widget-title">
                    Current Score
                </h4>
          <p class="dashboard-widget-metrics">
              <div id="overallscore" style="width: 153px; margin: 0 auto;"></div>
          </p>
          <div class="table-responsive">
            <table class="dashboard-widget-table table table-striped">
              <tbody>
                 <tr>
                  <td>
                      Source 1
                  </td>
                  <td>
                      $50
                  </td>
                </tr>
                <tr>
                  <td>
                      Source 2
                  </td>
                  <td>
                      $150
                  </td>
                </tr>
                <tr>
                  <td>
                      Source 3
                  </td>
                  <td>
                      $150
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    <div class="col-md-6">
      <div class="dashboard-widget">
        <h4 class="dashboard-widget-title">
            Last 7 Days
        </h4>
              <div id="senderscore1"></div>
        <div class="table-responsive">
          <table class="dashboard-widget-table table table-striped">
            <tbody>
               <tr>
                <td>
                    Sunday
                </td>
                <td>
                    $50
                </td>
              </tr>
              <tr>
                <td>
                    Monday
                </td>
                <td>
                    $150
                </td>
              </tr>
              <tr>
                <td>
                    Tuesday
                </td>
                <td>
                    $150
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-xs-12">
    <div class="panel panel-default">
    <header class="panel-heading">
    <h3 class="panel-title">Recent Issues <small>These may adversely affect your Sender score. Follow the links on the right to correct these errors</small></h3>
    </header>
    <div class="panel-body panel-body-table">
    <table class="table table-striped">
    <thead>
    <th>Source</th>
    <th>Error</th>
    <th>Description</th>
    <th>Action</th>
    </thead>
    <tbody>
    <tr>
    <td>Site</td>
    <td>Unknown Recipient</td>
    <td>Lorem Ipsum</td>
    <td><a href="#">link to fix</a></td>
    </tr>
    <tr>
    <td>Site</td>
    <td>Unknown Recipient</td>
    <td>Lorem Ipsum</td>
    <td><a href="#">link to fix</a></td>
    </tr>
    <tr>
    <td>Site</td>
    <td>Unknown Recipient</td>
    <td>Lorem Ipsum</td>
    <td><a href="#">link to fix</a></td>
    </tr>
    <tr>
    <td>Site</td>
    <td>Unknown Recipient</td>
    <td>Lorem Ipsum</td>
    <td><a href="#">link to fix</a></td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>

  </div>
</div>




<script type="text/javascript">
  google.charts.load('current', {
    packages: ['corechart', 'gauge']
  });
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Score', 68]
    ]);
    // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Month');
    data2.addColumn({type: 'string', role: 'tooltip', 'p': {'html': true}} );
    data2.addColumn('number', 'Score');
    
    data2.addRows([
      ['Sun', '<p align="left" style="padding: 5px;"><strong>Sun</strong><br /> Score: <span>99</span> <br /> Event: Promo&nbsp;1</p>', 50 ],
      ['Mon', '<p align="left" style="padding: 5px;"><strong>Mon</strong><br /> Score: <span>99</span> <br /> Event: Promo&nbsp;2</p>', 60 ],
      ['Tues', '<p align="left" style="padding: 5px;"><strong>Tues</strong><br /> Score: <span>99</span> <br /> Event: Promo&nbsp;3</p>', 57 ],
      ['Wed', '<p align="left" style="padding: 5px;"><strong>Wed</strong><br /> Score: <span>99</span> <br /> Event: Promo&nbsp;4</p>', 85 ],
      ['Thurs', '<p align="left" style="padding: 5px;"><strong>Thurs</strong><br /> Score: <span>99</span> <br /> Event: Promo&nbsp;5</p>', 99 ],
      ['Fri', '<p align="left" style="padding: 5px;"><strong>Fri</strong><br /> Score: <span>99</span> <br /> Event: Promo&nbsp;6</p>', 80 ],
      ['Sat', '<p align="left" style="padding: 5px;"><strong>Sat</strong><br /> Score: <span>99</span> <br /> Event: Promo&nbsp;7</p>', 62 ],
    ]);
   
    // Set chart options
    var defaultColors = ['#8F7EC2', '#2598B8', '#5FC782', '#ECDE31', '#F55949', '#AE85D4', '#5FC2C2', '#9ACC54',
      '#F5A61D', '#B6744A'
    ];
    var comboColors = ['#ECDE31', '#8F7EC2', '#2598B8', '#5FC782', '#F55949', '#AE85D4', '#5FC2C2', '#9ACC54',
      '#F5A61D', '#B6744A'
    ];
    var bookingsColors = ['#ECDE31', '#2598B8', '#EEEEEE'];
    var defaultOptions = {
      colors: defaultColors,
      backgroundColor: 'transparent',
      height: 160,
      //is3D: true,
      fontName: 'Lato',
      fontSize: 13,
      pointSize: '5',
      pointShape: {
        //type: 'circle'
      },
      titleTextStyle: {
        fontName: 'LatoBold',
        fontSize: 14
      },
      tooltip: {
        isHtml: true
      },
      legend: {
        position: 'none'
      },
      vAxis: {
        gridlines: {
          count: 0
        },
        titleTextStyle: {
          fontSize: 10,
          color: '#AAAAAA',
          fontName: 'LatoBold',
          italic: false
        }
      },
      hAxis: {
        titleTextStyle: {
          fontSize: 10,
          color: '#AAAAAA',
          fontName: 'LatoBold',
          italic: false
        },
        slantedText: true
      }
    };
            var options = {
              width: 153, 
              height: 153,
              redFrom: 0, 
              redTo: 60,
              yellowFrom:60, 
              yellowTo: 80,
              greenFrom:80, 
              greenTo: 100,
              minorTicks: 5,
              animation: {
                duration: 10000,
                easing: 'out'
                }
            };

    var options3 = {
      //title: 'Sales vs Expenditures',
      
      vAxis: {
        //title: 'AMOUNT OF DOLLARS (USD)'
      },
      hAxis: {
        //title: 'YEAR'
      },
      focusTarget: 'category'
    };


    // Instantiate and draw our charts, passing in some options. Add reSize function to make charts responsive
    function reSize() {
    var overallscore = new google.visualization.Gauge(document.getElementById('overallscore'));
    overallscore.draw(data, options);
      var senderscore1 = new google.visualization.LineChart(document.getElementById('senderscore1'));
      senderscore1.draw(data2, $.extend(true, {}, defaultOptions, options3));
      var senderscore2 = new google.visualization.LineChart(document.getElementById('senderscore2'));
            senderscore2.draw(data2, $.extend(true, {}, defaultOptions, options3));
      var senderscore3 = new google.visualization.LineChart(document.getElementById('senderscore3'));
            senderscore1.draw(data2, $.extend(true, {}, defaultOptions, options3));
    }
    window.onload = reSize();
    window.onresize = reSize;
  }
</script>