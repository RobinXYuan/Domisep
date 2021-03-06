/**
 * Created by Robbin_2 on 2017/1/5.
 */
$(function () {
    //        $(document).ready( function() {
//
////            var chart = {
////                 margin: {
////                    marginTop: '10px'
////                },
////
////                backgroundColor: {
////                    backgroundColor: 'rgba(17, 26, 41, 0.8);'
////                 },
////
////                plotBorderColor: {
////
////                }
////            };
//
//            var title = {
//                text: null
//            };
//
//            var xAxis = {
//                categories: ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']
//            };
//
//            var yAxis = {
//                plotLines: [{
//                    value: 0,
//                    width: 3,
//                    color: '#0f0f0f'
//                }]
//            };
//
//            var tooltip = {
//                valueSuffix: '°C'
//            };
//            var  legend = {
//                layout: 'vertical',
//                align: 'right',
//                verticalAlign: 'middle',
//                borderWidth: 0
//            };
//
//            var series = [{
//                data: [26.1, 27.8, 28.6, 28.1, 26.3, 25.6, 23.7, 22.5, 21.7]
//            }];
//
//            var credits = {
//                enabled: false
//            };
//
//            var json = {};
//
//            json.title = title;
//            json.subtitle = subtitle;
//            json.xAxis = xAxis;
//            json.yAxis = yAxis;
//            json.tooltip = tooltip;
//            json.legend = legend;
//            json.series = series;
//
//            $('#sensor1_container').Highcharts(json);
//
//        });
    Highcharts.chart('sensor2_container2', {
        chart: {

            type: 'bar',

            margin: {
                marginTop: '10px'
            },

            backgroundColor: {
                backgroundColor: 'rgba(17, 26, 41, 0.8);'
            },

            zoomType: 'x'
        },

        style: {
            color: '#ffffff',
            fontFamily: 'Frutiger'
        },

        title: {
            text: null
        },

        xAxis: {
            title: {
                text: 'Time (h)',
                style: {
                    color: '#ffffff'
                }
            },
            categories: ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'],

            labels: {
                step: 2,
                style: {
                    color: '#ffffff'
                }
            },
            Tick: {
                enabled: false
            },

            tickWidth: '3px',

            gridLineDashStyle: 'Dot',
            gridLineWidth: '1px',
            gridLineColor: '#ffffff'
        },

        yAxis: {
            title: {
                text: null
            },

            labels: {
                style: {
                    color: '#ffffff'
                }
            },

            tickInterval: 8,

            gridLineWidth: '0.5px',
            gridLineDashStyle: 'ShortDot',
            gridLineColor: '#ffffff',

            plotLines: [{
                value: 0,
                width: 3,
                color: '#0f0f0f'
            }]
        },

        tooltip: {
            valueSuffix: '%'
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Humidity',
            color: '#1e96ed',
            data: [30, 28, 25, 29, 31, 35, 38, 42, 45]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });
});