//***********************************************************
//
//
//***********************************************************
function showBarsDouble(chartName, forecast)
{
	var tmp_min_max = new Array();
	var tmp = new Array();
	var categories = new Array();

	for(var i = 0; i <  forecast.length; i ++){
		categories.push(forecast[i]['dt'] * 1000 + time_zone);

		tmp.push( 
			Math.round( (forecast[i]['main']['temp']-273.15) * 100) / 100 
		);

		tmp_min_max.push( 
			[
			Math.round( (forecast[i]['main']['temp_min']-273.15) * 100) / 100,
			Math.round( (forecast[i]['main']['temp_max']-273.15) * 100) / 100 
			]
		);


	}

	window.chart = new Highcharts.Chart({
	
	    chart: {
	        renderTo: chartName,
	        type: 'columnrange',
	        //inverted: true
	    },
	    
	    title: {
	        text:  null
	    },	
	    xAxis: {
	        type: 'datetime',
	        categories:  categories,
		tickInterval: 24,
		labels: {
			formatter: function() {
				return Highcharts.dateFormat('%e %b', this.value);
			}
		}

	    },
	    yAxis: {
	        title: {
	           // text: 'Temperature ( °C )'
			text: null
	        }
	    },
	    tooltip: {
	        valueSuffix: '°C'
	    },
	    
	    legend: {
	        enabled: false
	    },
	
	    series: [{
	        data:  tmp_min_max,
	    },{
	        data:  tmp,
		type: 'spline'

	    }]
	
	});
    	$.mobile.hidePageLoadingMsg();

}

function showPolarSpeed(chartName, forecast)
{
var n = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW']; 


var tmp = [
{name:"&gt; 10 m/s", data:[]},
{name:"8-10 m/s",data:[]}, 
{name:"6-8 m/s", data:[]}, 
{name:"4-6 m/s", data:[]}, 
{name:"2-4 m/s", data:[]},
{name:"0.5-2 m/s", data:[]},
{name:"&lt; 0.5 m/s", data:[]}
];

//	console.log(tmp);	

	for(var i in n)	for(var g = 0; g <  7; g ++) tmp[g]['data'][i] = 0;
	
//	console.log(tmp);		

	for(var i = 0; i <  forecast.length; i ++){
		var deg = forecast[i]['wind']['deg'] 
		var s = forecast[i]['wind']['speed'];

		var step = 24;


		for(var l = 0; l <  16; l ++) 
			if( deg >= l*step && deg < (l+1)*step)	
				break;
		

		if( s >= 0 && s < 0.5)	tmp[6]['data'][l] ++
		if( s >= 0.5 && s < 2)	tmp[5]['data'][l] ++
		if( s >= 2 && s < 4)	tmp[4]['data'][l] ++
		if( s >= 4 && s < 6)	tmp[3]['data'][l] ++
		if( s >= 6 && s < 8)	tmp[2]['data'][l] ++
		if( s >= 8 && s < 10)	tmp[1]['data'][l] ++
		if( s >= 10 )		tmp[0]['data'][l] ++
	}
	var fl= forecast.length;
	for(var i in n) 
		for(var g = 0; g <  7; g ++)
			tmp[g]['data'][i] = Math.round(100 * tmp[g]['data'][i] / fl);

//	console.log(tmp);	

var options = {
xAxis:{
	categories:["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"], 
	type:(void 0)}, 
series: tmp
};

    		// Create the chart
    		window.chart = new Highcharts.Chart(Highcharts.merge(options, {
		        
			    chart: {
			        renderTo: chartName,
			        polar: true,
			        type: 'column'
			    },
			    
			    title: {
			        text: 'Wind rose'
			    },

			    pane: {
			    	size: '85%'
			    },
			    
			    legend: {
			        enabled: false
			    },
			    
			    xAxis: {
			    	tickmarkPlacement: 'on'
			    },
			        
			    yAxis: {
			        min: 0,
			        endOnTick: false,
			        showLastLabel: true,
			        title: {
				        enabled: false
			        },
			        labels: {
			        	formatter: function () {
			        		return this.value + '%';
			        	}
			        }
			    },
			    
			    tooltip: {
			    	valueSuffix: '%'
			    },
			        
			    plotOptions: {
			        series: {
			        	stacking: 'normal',
			        	shadow: false,
			        	groupPadding: 0,
			        	pointPlacement: 'on'
			        }
			    }
			}));

    	$.mobile.hidePageLoadingMsg();
}

function chartDoublePress(chartName, forecast)
{
   var press = forecast[ forecast.length -1 ]['main']['pressure'];
    var chart = new Highcharts.Chart({
	
	    chart: {
	        renderTo: chartName,
	        type: 'gauge',
	        alignTicks: false,
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	
	    title: {
	        text: 'Pressure'
	    },
	    
	    pane: {
	        startAngle: -150,
	        endAngle: 150
	    },	        
	
	    yAxis: [{
	        min: 980,
	        max: 1050,
	        lineColor: '#339',
	        tickColor: '#339',
	        minorTickColor: '#339',
	        offset: -25,
	        lineWidth: 2,
	        labels: {
	            distance: -20,
	            rotation: 'auto'
	        },
	        tickLength: 5,
	        minorTickLength: 5,
	        endOnTick: false
	    }, {
	        min: 735,
	        max: 787,
	        tickPosition: 'outside',
	        lineColor: '#933',
	        lineWidth: 2,
	        minorTickPosition: 'outside',
	        tickColor: '#933',
	        minorTickColor: '#933',
	        tickLength: 5,
	        minorTickLength: 5,
	        labels: {
	            distance: 12,
	            rotation: 'auto'
	        },
	        offset: -20,
	        endOnTick: false
	    }],	
	    series: [{
	        name: 'Pressure',
	        data: [press],
	        dataLabels: {
	            formatter: function () {
	                var pa = this.y,
	                    mm = Math.round(pa / 1.3333);
	                    inh = Math.round(pa / 33.8653);
	                return '<span style="color:#339">'+ pa + ' hPa</span><br>' +
	                    '<span style="color:#933">' + mm + ' mmHg</span>'; 
	            },
	            backgroundColor: {
	                linearGradient: {
	                    x1: 0,
	                    y1: 0,
	                    x2: 0,
	                    y2: 1
	                },
	                stops: [
	                    [0, '#DDD'],
	                    [1, '#FFF']
	                ]
	            }
	        }
	    }]
	
	}
	);
    	$.mobile.hidePageLoadingMsg();
}


