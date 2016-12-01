// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   ['libs/vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
      sparkline:      ['libs/vendor/jquery/charts/sparkline/jquery.sparkline.min.js'],
      plot:           ['libs/vendor/jquery/charts/flot/jquery.flot.min.js',
                          'libs/vendor/jquery/charts/flot/jquery.flot.resize.js',
                          'libs/vendor/jquery/charts/flot/jquery.flot.tooltip.min.js',
                          'libs/vendor/jquery/charts/flot/jquery.flot.spline.js',
                          'libs/vendor/jquery/charts/flot/jquery.flot.orderBars.js',
                          'libs/vendor/jquery/charts/flot/jquery.flot.pie.min.js'],
      slimScroll:     ['libs/vendor/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       ['libs/vendor/jquery/sortable/jquery.sortable.js'],
      nestable:       ['libs/vendor/jquery/nestable/jquery.nestable.js',
                          'libs/vendor/jquery/nestable/nestable.css'],
      filestyle:      ['libs/vendor/jquery/file/bootstrap-filestyle.min.js'],
      slider:         ['libs/vendor/jquery/slider/bootstrap-slider.js',
                          'libs/vendor/jquery/slider/slider.css'],
      chosen:         ['libs/vendor/jquery/chosen/chosen.jquery.min.js',
                          'libs/vendor/jquery/chosen/chosen.css'],
      TouchSpin:      ['libs/vendor/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                          'libs/vendor/jquery/spinner/jquery.bootstrap-touchspin.css'],
      wysiwyg:        ['libs/vendor/jquery/wysiwyg/bootstrap-wysiwyg.js',
                          'libs/vendor/jquery/wysiwyg/jquery.hotkeys.js'],
      dataTable:      ['libs/vendor/jquery/datatables/jquery.dataTables.min.js',
                          'libs/vendor/jquery/datatables/dataTables.bootstrap.js',
                          'libs/vendor/jquery/datatables/dataTables.bootstrap.css'],
      vectorMap:      ['libs/vendor/jquery/jvectormap/jquery-jvectormap.min.js',
                          'libs/vendor/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
                          'libs/vendor/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
                          'libs/vendor/jquery/jvectormap/jquery-jvectormap.css'],
      footable:       ['libs/vendor/jquery/footable/footable.all.min.js',
                          'libs/vendor/jquery/footable/footable.core.css']
      }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  false,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      'libs/vendor/modules/ng-grid/ng-grid.min.js',
                      'libs/vendor/modules/ng-grid/ng-grid.min.css',
                      'libs/vendor/modules/ng-grid/theme.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      'libs/vendor/modules/angular-ui-select/select.min.js',
                      'libs/vendor/modules/angular-ui-select/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    'libs/vendor/modules/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['libs/vendor/modules/angular-ui-calendar/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      'libs/vendor/modules/ngImgCrop/ng-img-crop.js',
                      'libs/vendor/modules/ngImgCrop/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      'libs/vendor/modules/angular-bootstrap-nav-tree/abn_tree_directive.js',
                      'libs/vendor/modules/angular-bootstrap-nav-tree/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      'libs/vendor/modules/angularjs-toaster/toaster.js',
                      'libs/vendor/modules/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      'libs/vendor/modules/textAngular/textAngular-sanitize.min.js',
                      'libs/vendor/modules/textAngular/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      'libs/vendor/modules/angular-slider/angular-slider.min.js',
                      'libs/vendor/modules/angular-slider/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      'libs/vendor/modules/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      'libs/vendor/modules/videogular/plugins/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      'libs/vendor/modules/videogular/plugins/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      'libs/vendor/modules/videogular/plugins/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      'libs/vendor/modules/videogular/plugins/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      'libs/vendor/modules/videogular/plugins/ima-ads.min.js'
                  ]
              }
          ]
      });
  }])
;