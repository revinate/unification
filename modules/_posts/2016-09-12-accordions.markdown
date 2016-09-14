---
layout: post
title: "Collapse/Accordion"
date: 2016-09-12 00:00:00
---

<div class="panel-group sg" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="panel panel-default sg">
                    <div class="panel-heading sg" role="tab" id="headingOne">
                      <h4 class="panel-title sg">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="sg collapsed">
                          Collapsible Group Item #1
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse sg collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style="height: 0px;">
                      <div class="panel-body sg">
                        Content goes here
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default sg">
                    <div class="panel-heading sg" role="tab" id="headingTwo">
                      <h4 class="panel-title sg">
                        <a class="sg collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Collapsible Group Item #2
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse sg collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false" style="height: 0px;">
                      <div class="panel-body sg">
                        Content goes here
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default sg">
                    <div class="panel-heading sg" role="tab" id="headingThree">
                      <h4 class="panel-title sg">
                        <a class="sg collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Collapsible Group Item #3
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse sg collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false" style="height: 0px;">
                      <div class="panel-body sg">
                        Content goes here
                      </div>
                    </div>
                  </div>
                </div>