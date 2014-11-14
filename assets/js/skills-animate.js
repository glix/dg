 /*Axis*/
 $(function ()  
        {
   var dataSource = [
    { year: "1750", africa: 106000000, asia: 502000000, europe: 163000000, latinamerica: 16000000, northamerica: 2000000, oceania: 2000000, total: 791000000 },
    { year: "1800", africa: 107000000, asia: 635000000, europe: 203000000, latinamerica: 24000000, northamerica: 7000000, oceania: 2000000, total: 978000000 },
    { year: "1850", africa: 111000000, asia: 809000000, europe: 276000000, latinamerica: 38000000, northamerica: 26000000, oceania: 2000000, total: 1262000000 },
    { year: "1900", africa: 133000000, asia: 947000000, europe: 408000000, latinamerica: 74000000, northamerica: 82000000, oceania: 6000000, total: 1650000000 },
    { year: "1950", africa: 229895000, asia: 1403388000, europe: 547287000, latinamerica: 167368000, northamerica: 171614000, oceania: 12675000, total: 2532227000 },
    { year: "2000", africa: 811101000, asia: 3719044000, europe: 726777000, latinamerica: 521419000, northamerica: 313289000, oceania: 31130000, total: 6122770000 },
    { year: "2050", africa: 2191599000, asia: 5142220000, europe: 719257000, latinamerica: 750956000, northamerica: 446862000, oceania: 55223000, total: 9306128000 }
];

$("#axis").dxChart({
    palette: "Soft Pastel",
    dataSource: dataSource,
    commonSeriesSettings:{
        argumentField: "year", 
    type: "fullstackedbar"
    },
    series: [{
            valueField: "africa",
            name: "Africa"
        }, {
            valueField: "asia",
            name: "Asia"
        }, {
            valueField: "europe",
            name: "Europe"
        }, {
            valueField: "latinamerica",
            name: "Latin Am. &<br/> Caribbean"
        }, {
            valueField: "northamerica",
            name: "Northern America"
        }, {
            valueField: "oceania",
            name: "Oceania"
        }, {
            axis: "total",
            type: "spline",
            valueField: "total",
            name: "Total",
            color: "#808080"
        }
    ],
    valueAxis: [{
        grid: {
            visible: true
        }
    }, {
        name: "total",
        position: "right",
        grid: {
            visible: true
        },
        title: {
            text: "Total Population, billions"
        },
        label: {
            format: "largeNumber"
        }
    }],
    tooltip: {
        enabled: true,
        format: "largeNumber",
        precision: 1,
        customizeText: function() {
            return this.percentText ? this.percentText + " - " + this.valueText : this.valueText;
        }
    },
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center"
    },
    title: {
        text: "Evolution of Population by Continent"
    }
});
}

      );

 /*Cross Hair*/
 $(function ()  
        {
   var dataSource = [
    { country: "USA", hydro: 59.8, oil: 937.6, gas: 582, coal: 564.3, nuclear: 187.9 },
    { country: "China", hydro: 74.2, oil: 308.6, gas: 35.1, coal: 956.9, nuclear: 11.3 },
    { country: "Russia", hydro: 40, oil: 128.5, gas: 361.8, coal: 105, nuclear: 32.4 },
    { country: "Japan", hydro: 22.6, oil: 241.5, gas: 64.9, coal: 120.8, nuclear: 64.8 },
    { country: "India", hydro: 19, oil: 119.3, gas: 28.9, coal: 204.8, nuclear: 3.8 },
    { country: "Germany", hydro: 6.1, oil: 123.6, gas: 77.3, coal: 85.7, nuclear: 37.8 }
];


$("#crosshair").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "country",
        type: "spline",
        point: {
            hoverMode: 'allArgumentPoints'
        }
    },
    crosshair: {
        enabled: true
    },
    series: [
        { valueField: "hydro", name: "Hydro-electric" },
        { valueField: "oil", name: "Oil" },
        { valueField: "gas", name: "Natural gas" },
        { valueField: "coal", name: "Coal" },
        { valueField: "nuclear", name: "Nuclear" }
    ],
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center",
        itemTextPosition: "bottom",
        equalColumnWidth:true
    },
    title: "Energy Consumption in 2004 (Millions of Tons, Oil Equivalent)",
    tooltip: {
        enabled: true,
        shared: true
    }
});
}

      );

 /*logarithmic*/
 $(function ()  
        {
    var dataSource = [
         { name: "Sun", mass: 332837, type: 'Star' },
         { name: "Jupiter", mass: 317.83, type: 'Planet' },
         { name: "Saturn", mass: 95.159, type: 'Planet' },
         { name: "Uranus", mass: 14.536, type: 'Planet' },
         { name: "Neptune", mass: 17.147, type: 'Planet' },
         { name: "Earth", mass: 1, type: 'Planet' },
         { name: "Venus", mass: 0.815, type: "Planet" },
         { name: "Mars", mass: 0.107, type: 'Planet' },
         { name: "Mercury", mass: 0.0553, type: 'Planet' },
         { name: "Moon", mass: 0.0123, type: 'Satellite' },
         { name: "Europa (Jupiter's Moon)", mass: 0.00803, type: 'Satellite' },
        ];

        $("#logarithmic").dxChart({
            dataSource: dataSource,
            commonPaneSettings: {
                border: {
                    visible: true
                }
            },
            commonAxisSettings: {
                grid: {
                    visible: true
                }
            },
            series: {
                type: 'scatter',
                valueField: "mass",
                argumentField: "name",
                tagField: 'type',
                point: {
                    size: 10
                }
            },
            customizePoint: function () {
                var color;
                switch (this.tag) {
                    case 'Star':
                        color = 'red';
                        break;
                    case 'Satellite':
                        color = 'gray';
                }
                return { color: color }
            },
            valueAxis: {
                type: 'logarithmic',
                title: 'Mass Relative to the Earth'
            },
            title: "Relative Masses of the Heaviest Solar System Objects",
            legend: {
                visible: false
            },
            tooltip: {
                enabled: true
            }
        });
}

      );

 /*Chart On Background*/
 			$(function ()  
				{
   $("#chartBackground").dxRangeSelector({
    margin: {
        top: 50
    },
    scale: {
        minorTickInterval: "day",
        majorTickInterval: {
            days: 7
        }
    },
    size: {
        height: 310
    },
    dataSource: [
        { t: new Date(2011, 11, 22), costs: 19, income: 18 },
        { t: new Date(2011, 11, 29), costs: 27, income: 12 },
        { t: new Date(2012, 0, 5), costs: 30, income: 5 },
        { t: new Date(2012, 0, 12), costs: 26, income: 6 },
        { t: new Date(2012, 0, 19), costs: 18, income: 10 },
        { t: new Date(2012, 0, 26), costs: 15, income: 15 },
        { t: new Date(2012, 1, 2), costs: 14, income: 21 },
        { t: new Date(2012, 1, 9), costs: 14, income: 25 }
    ],
    chart: {
        series: [
            { argumentField: "t", valueField: "costs" },
            { argumentField: "t", valueField: "income" }
        ],
        valueAxis: {
            min: 0
        }
    },
    selectedRange: {
        startValue: new Date(2011, 11, 25),
        endValue: new Date(2012, 0, 1)
    }
});

}

			);

 /*Pie*/
 $(function ()  
				{
   var dataSource = [
    { country: "Russia", area: 12 },
    { country: "Canada", area: 7 },
    { country: "USA", area: 7 },
    { country: "China", area: 7 },
    { country: "Brazil", area: 6 },
    { country: "Australia", area: 5 },
    { country: "India", area: 2 },
    { country: "Others", area: 55 }
];

$("#pie").dxPieChart({
    size:{ 
        width: 500
    },
    dataSource: dataSource,
    series: [
        {
            argumentField: "country",
            valueField: "area",
            label:{
                visible: true,
                connector:{
                    visible:true,           
                    width: 1
                }
            }
        }
    ],
    title: "Area of Countries"
});
}

			);

/*Scatter*/
$(function ()  
				{
   var dataSource = generateDataSource();

$("#scatter").dxChart({
    dataSource: dataSource,
	commonSeriesSettings: {
		type: "scatter"
	},
    series: [{ 
		argumentField: "x1",
		valueField: "y1"
	}, { 
		argumentField: "x2",
		valueField: "y2",
		point: {
			symbol: "triangle"
		}
	}],
    argumentAxis:{
        grid:{
            visible: true
        }
    },
    legend: {
        visible: false
    },
    commonPaneSettings: {
        border:{
            visible: true
        }       
    }
});

function generateDataSource() {
	var b1 = random(-100, 100) / 10,
		b2 = random(-100, 100) / 10,
		k1 = random(-100, 100) / 10,
		k2 = random(-100, 100) / 10,
		deviation1,
		deviation2,
		ds = [],
		i,
		x1,
		x2,
		y1,
		y2,
		isNegativeDelta,
		delta1,
		delta2;
		
    (k1 < 0.1 && k1 >= 0) && (k1 = 0.1);
    (k1 > -0.1 && k1 < 0) && (k1 = -0.1);
	(k2 < 0.1 && k2 >= 0) && (k2 = 0.1);
    (k2 > -0.1 && k2 < 0) && (k2 = -0.1);
    
    deviation1 = Math.abs(k1 * 8);
	deviation2 = Math.abs(k2 * 8);
    for (i = 0; i < 30; i++) {
		x1 = random(1, 20);
		x2 = random(1, 20);
        
		isNegativeDelta = random(0, 1) == 0;
        delta1 = deviation1 * Math.random();
		delta2 = deviation2 * Math.random();
        if (isNegativeDelta) {
            delta1 = -delta1;
			delta2 = -delta2;
		}
        y1 = k1 * x1 + b1 + delta1;
		y2 = k2 * x2 + b2 + delta2;
		
		ds.push({x1: x1, y1: y1, x2: x2, y2: y2});
    }
	return ds;
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

}

			);

 /*Bubble*/
 $(function ()  
				{
   var dataSource = [
{ total1: 9.5, total2: 168.8, total3: 127.2, older1: 2.4, older2: 8.8, older3: 40.0, perc1: 25.4, perc2: 5.3, perc3: 31.6, tag1: 'Sweden', tag2: 'Nigeria', tag3: 'Japan' },
{ total1: 82.8, total2: 91.7, total3: 90.8, older1: 21.9, older2: 4.6, older3: 8.0, perc1: 26.7, perc2: 5.4, perc3: 8.9, tag1: 'Germany', tag2: 'Ethiopia', tag3: 'Viet Nam' },
{ total1: 16.7, total2: 80.7, total3: 21.1, older1: 3.8, older2: 7.0, older3: 2.7, perc1: 22.8, perc2: 8.4, perc3: 12.9, tag1: 'Netherlands', tag2: 'Egypt', tag3: 'Sri Lanka' },
{ total1: 62.8, total2: 52.4, total3: 96.7, older1: 14.4, older2: 4.0, older3: 5.9, perc1: 23.0, perc2: 7.8, perc3: 6.1, tag1: 'United Kingdom', tag2: 'South Africa', tag3: 'Philippines' },
{ total1: 38.2, total2: 43.2, total3: 66.8, older1: 7.8, older2: 1.8, older3: 9.6, perc1: 20.4, perc2: 4.3, perc3: 13.7, tag1: 'Poland', tag2: 'Kenya', tag3: 'Thailand' },
{ total1: 45.5, total3: 154.7, total4: 34.8, older1: 9.5, older3: 10.3, older4: 7.2, perc1: 21.1, perc3: 6.8, perc4: 20.8, tag1: 'Ukraine', tag3: 'Bangladesh', tag4: 'Canada' },
{ total1: 143.2, total4: 120.8, older1: 26.5, older4: 11.0, perc1: 18.6, perc4: 9.5, tag1: 'Russian Federation', tag4: 'Mexico' }
];

$("#bubble").dxChart({
	dataSource: dataSource,
    commonSeriesSettings: {
        type: 'bubble'
    },
    title: 'Total Population',
    tooltip: {
        enabled: true,
        customizeText: function () { return this.point.tag + '<br/>Total Population: ' + this.argumentText + 'M <br/>Population Over 60: ' + this.valueText + 'M <br/>% of population over 60: ' + this.size; }
    },
    argumentAxis: {
        label: {
            customizeText: function () {
                return this.value + 'M';
            }
        },
        title: 'Total Population'
    },
    valueAxis: {
        label: {
            customizeText: function () {
                return this.value + 'M';
            }
        },
        title: 'Population Over 60'
    },
    legend: {
        position: 'inside',
        horizontalAlignment: 'left',
        border: {
            visible: true
        }
    },
    palette: ["#00ced1", "#008000", "#ffd700", "#ff7f50"],
    series: [{
        name: 'Europe',
        argumentField: 'total1',
        valueField: 'older1',
        sizeField: 'perc1',
        tagField:'tag1'
    }, {
        name: 'Africa',
        argumentField: 'total2',
        valueField: 'older2',
        sizeField: 'perc2',
        tagField: 'tag2'
    }, {
        name: 'Asia',
        argumentField: 'total3',
        valueField: 'older3',
        sizeField: 'perc3',
        tagField: 'tag3'
    }, {
        name: 'North America',
        argumentField: 'total4',
        valueField: 'older4',
        sizeField: 'perc4',
        tagField: 'tag4'
    }]
});
}

			);

 /*Side By Side Stacked*/
 $(function ()  
				{
   var dataSource = [
    { state: "USA", maleyoung: 29.956, malemiddle: 90.354, maleolder: 14.472, femaleyoung: 28.597, femalemiddle: 91.827, femaleolder: 20.362 },
    { state: "Brazil", maleyoung: 25.607, malemiddle: 55.793, maleolder: 3.727, femaleyoung: 24.67, femalemiddle: 57.598, femaleolder: 5.462 },
    { state: "Russia", maleyoung: 13.493, malemiddle: 48.983, maleolder: 5.802, femaleyoung: 12.971, femalemiddle: 52.14, femaleolder: 12.61 },
    { state: "Japan", maleyoung: 9.575, malemiddle: 43.363, maleolder: 9.024, femaleyoung: 9.105, femalemiddle: 42.98, femaleolder: 12.501 },
    { state: "Mexico", maleyoung: 17.306, malemiddle: 30.223, maleolder: 1.927, femaleyoung: 16.632, femalemiddle: 31.868, femaleolder: 2.391 },
    { state: "Germany", maleyoung: 6.679, malemiddle: 28.638, maleolder: 5.133, femaleyoung: 6.333, femalemiddle: 27.693, femaleolder: 8.318 },
    { state: "United Kindom", maleyoung: 5.816, malemiddle: 19.622, maleolder: 3.864, femaleyoung: 5.519, femalemiddle: 19.228, femaleolder: 5.459 }
];

$("#stacked").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "state",
        type: "stackedBar"
    },
    series: [
        { valueField: "maleyoung", name: "Male: 0-14", stack: "male" },
        { valueField: "malemiddle", name: "Male: 15-64", stack: "male" },
        { valueField: "maleolder", name: "Male: 65 and older", stack: "male" },
        { valueField: "femaleyoung", name: "Female: 0-14", stack: "female" },
        { valueField: "femalemiddle", name: "Female: 15-64", stack: "female" },
        { valueField: "femaleolder", name: "Female: 65 and older", stack: "female" }
    ],
    legend: {
        horizontalAlignment: "right",
        position: "inside",
        border: { visible: true }
    },
    valueAxis: {
        title: {
            text: "Populations, millions"
        }
    },
    title: "Population: Age Structure",
    tooltip: {
        enabled: true
    }
});
}

			);


 /*Point Aggregation*/
 $(function ()  
				{
   var model = {};

model.chartOptions = {
    title: 'Google Inc. Stock Prices',
    dataSource: getDataSource(),
    commonSeriesSettings: {
        type: 'candleStick'
    },
    valueAxis: {
        valueType: 'numeric'
    },
    argumentAxis: {
        grid: {
            visible: true
        },
        label: {
        	visible: false
        },
        argumentType: 'datetime'
    },
    tooltip: {
        enabled: true
    },
    legend: {
        visible: false
    },
    useAggregation: true,
    series: [{
        openValueField: 'Open',
        highValueField: 'High',
        lowValueField: 'Low',
        closeValueField: 'Close',
        argumentField: 'Date'
    }]
};

model.rangeOptions = {
    size: {
        height: 120
    },
    dataSource: getDataSource(),
    chart: {
        useAggregation: true,
        valueAxis: { valueType: 'numeric' },
        series: {
            type: 'line',
            valueField: 'Open',
            argumentField: 'Date'
        },
    },
    scale: {
        minorTickInterval: 'day',
        majorTickInterval: 'mounth',
        valueType: 'datetime',
        placeholderHeight: 20
    },
    behavior: {
        callSelectedRangeChanged: "onMoving",
        snapToTicks: false
    },
    selectedRangeChanged: function (e) {
        var zoomedChart = $("#point-aggregation #zoomedChart").dxChart("instance");
        zoomedChart.zoomArgument(new Date(e.startValue), new Date(e.endValue));
    }
};

var html = [
    '<div id="zoomedChart" data-bind="dxChart: chartOptions" style="height: 315px;margin: 0 0 15px"></div>',
    '<div data-bind="dxRangeSelector: rangeOptions" style="height: 60px"></div>'
].join('');

$("#point-aggregation").append(html);
ko.applyBindings(model, $("#point-aggregation")[0]);

function getDataSource() { return [{ "Date": "04/23/2013", "Open": "808.11", "High": "818.00", "Low": "808.00", "Close": "813.45", "Volume": "1829151", "name": "google" }, { "Date": "04/22/2013", "Open": "801.00", "High": "815.50", "Low": "800.36", "Close": "807.90", "Volume": "2299900", "name": "google" }, { "Date": "04/21/2013", "Open": "800.60", "High": "803.96", "Low": "775.00", "Close": "800.11", "Volume": "2883407", "name": "google" }, { "Date": "04/18/2013", "Open": "769.16", "High": "803.44", "Low": "766.26", "Close": "799.87", "Volume": "5804316", "name": "google" }, { "Date": "04/17/2013", "Open": "785.35", "High": "785.80", "Low": "761.26", "Close": "765.91", "Volume": "3328777", "name": "google" }, { "Date": "04/16/2013", "Open": "786.75", "High": "790.84", "Low": "778.10", "Close": "782.56", "Volume": "2037355", "name": "google" }, { "Date": "04/15/2013", "Open": "786.59", "High": "796.00", "Low": "783.92", "Close": "793.37", "Volume": "1742374", "name": "google" }, { "Date": "04/14/2013", "Open": "785.95", "High": "797.00", "Low": "777.02", "Close": "781.93", "Volume": "2454767", "name": "google" }, { "Date": "04/11/2013", "Open": "791.99", "High": "792.10", "Low": "782.93", "Close": "790.05", "Volume": "1636829", "name": "google" }, { "Date": "04/10/2013", "Open": "792.88", "High": "793.10", "Low": "784.06", "Close": "790.39", "Volume": "2028766", "name": "google" }, { "Date": "04/09/2013", "Open": "782.92", "High": "792.35", "Low": "776.00", "Close": "790.18", "Volume": "1978862", "name": "google" }, { "Date": "04/08/2013", "Open": "775.50", "High": "783.75", "Low": "773.11", "Close": "777.65", "Volume": "2157928", "name": "google" }, { "Date": "04/07/2013", "Open": "778.75", "High": "779.55", "Low": "768.40", "Close": "774.85", "Volume": "2832718", "name": "google" }, { "Date": "04/04/2013", "Open": "786.06", "High": "786.99", "Low": "776.40", "Close": "783.05", "Volume": "3433994", "name": "google" }, { "Date": "04/03/2013", "Open": "804.25", "High": "805.75", "Low": "791.30", "Close": "795.07", "Volume": "2448102", "name": "google" }, { "Date": "04/02/2013", "Open": "813.46", "High": "814.20", "Low": "800.67", "Close": "806.20", "Volume": "1738753", "name": "google" }, { "Date": "04/01/2013", "Open": "804.54", "High": "814.83", "Low": "804.00", "Close": "813.04", "Volume": "2041713", "name": "google" }, { "Date": "03/31/2013", "Open": "795.01", "High": "802.25", "Low": "793.25", "Close": "801.19", "Volume": "1807580", "name": "google" }, { "Date": "03/27/2013", "Open": "803.99", "High": "805.37", "Low": "793.30", "Close": "794.19", "Volume": "2287712", "name": "google" }, { "Date": "03/26/2013", "Open": "806.68", "High": "807.00", "Low": "801.33", "Close": "802.66", "Volume": "2163295", "name": "google" }, { "Date": "03/25/2013", "Open": "813.50", "High": "814.00", "Low": "807.79", "Close": "812.42", "Volume": "1191912", "name": "google" }, { "Date": "03/24/2013", "Open": "812.41", "High": "819.23", "Low": "806.82", "Close": "809.64", "Volume": "1712684", "name": "google" }, { "Date": "03/21/2013", "Open": "814.74", "High": "815.24", "Low": "809.64", "Close": "810.31", "Volume": "1491678", "name": "google" }, { "Date": "03/20/2013", "Open": "811.29", "High": "816.92", "Low": "809.85", "Close": "811.26", "Volume": "1477590", "name": "google" }, { "Date": "03/19/2013", "Open": "816.83", "High": "817.51", "Low": "811.44", "Close": "814.71", "Volume": "1464122", "name": "google" }, { "Date": "03/18/2013", "Open": "811.24", "High": "819.25", "Low": "806.45", "Close": "811.32", "Volume": "2098176", "name": "google" }, { "Date": "03/17/2013", "Open": "805.00", "High": "812.76", "Low": "801.47", "Close": "807.79", "Volume": "1838552", "name": "google" }, { "Date": "03/14/2013", "Open": "818.50", "High": "820.30", "Low": "813.34", "Close": "814.30", "Volume": "3099791", "name": "google" }, { "Date": "03/13/2013", "Open": "826.99", "High": "826.99", "Low": "817.39", "Close": "821.54", "Volume": "1651111", "name": "google" }, { "Date": "03/12/2013", "Open": "827.90", "High": "830.69", "Low": "822.31", "Close": "825.31", "Volume": "1641413", "name": "google" }, { "Date": "03/11/2013", "Open": "830.71", "High": "831.89", "Low": "823.67", "Close": "827.61", "Volume": "2008979", "name": "google" }, { "Date": "03/10/2013", "Open": "831.69", "High": "839.70", "Low": "831.50", "Close": "834.82", "Volume": "1595678", "name": "google" }, { "Date": "03/07/2013", "Open": "834.50", "High": "834.92", "Low": "825.05", "Close": "831.52", "Volume": "2912283", "name": "google" }, { "Date": "03/06/2013", "Open": "834.06", "High": "836.62", "Low": "829.58", "Close": "832.60", "Volume": "2054238", "name": "google" }, { "Date": "03/05/2013", "Open": "841.02", "High": "844.00", "Low": "828.81", "Close": "831.38", "Volume": "2873998", "name": "google" }, { "Date": "03/04/2013", "Open": "828.93", "High": "840.15", "Low": "828.90", "Close": "838.60", "Volume": "4045034", "name": "google" }, { "Date": "03/03/2013", "Open": "805.30", "High": "822.84", "Low": "805.00", "Close": "821.50", "Volume": "2776185", "name": "google" }, { "Date": "02/28/2013", "Open": "797.80", "High": "807.14", "Low": "796.15", "Close": "806.19", "Volume": "2175425", "name": "google" }, { "Date": "02/27/2013", "Open": "801.10", "High": "806.99", "Low": "801.03", "Close": "801.20", "Volume": "2265874", "name": "google" }, { "Date": "02/26/2013", "Open": "794.80", "High": "804.75", "Low": "791.11", "Close": "799.78", "Volume": "2028515", "name": "google" }, { "Date": "02/25/2013", "Open": "795.00", "High": "795.95", "Low": "784.40", "Close": "790.13", "Volume": "2205059", "name": "google" }, { "Date": "02/24/2013", "Open": "802.30", "High": "808.41", "Low": "790.49", "Close": "790.77", "Volume": "2307008", "name": "google" }, { "Date": "02/21/2013", "Open": "799.26", "High": "801.25", "Low": "793.80", "Close": "799.71", "Volume": "2054050", "name": "google" }, { "Date": "02/20/2013", "Open": "798.00", "High": "805.45", "Low": "791.22", "Close": "795.53", "Volume": "3511036", "name": "google" }, { "Date": "02/19/2013", "Open": "805.30", "High": "808.97", "Low": "791.79", "Close": "792.46", "Volume": "2765029", "name": "google" }, { "Date": "02/18/2013", "Open": "795.99", "High": "807.00", "Low": "795.28", "Close": "806.85", "Volume": "2932924", "name": "google" }, { "Date": "02/14/2013", "Open": "787.40", "High": "793.26", "Low": "787.07", "Close": "792.89", "Volume": "2729917", "name": "google" }, { "Date": "02/13/2013", "Open": "779.73", "High": "788.74", "Low": "777.77", "Close": "787.82", "Volume": "1735219", "name": "google" }, { "Date": "02/12/2013", "Open": "780.13", "High": "785.35", "Low": "779.97", "Close": "782.86", "Volume": "1198170", "name": "google" }, { "Date": "02/11/2013", "Open": "781.75", "High": "787.90", "Low": "779.37", "Close": "780.70", "Volume": "1858945", "name": "google" }, { "Date": "02/10/2013", "Open": "778.40", "High": "783.00", "Low": "773.75", "Close": "782.42", "Volume": "2167656", "name": "google" }, { "Date": "02/07/2013", "Open": "780.13", "High": "786.67", "Low": "779.56", "Close": "785.37", "Volume": "3024853", "name": "google" }, { "Date": "02/06/2013", "Open": "769.70", "High": "778.81", "Low": "765.50", "Close": "773.95", "Volume": "2840506", "name": "google" }, { "Date": "02/05/2013", "Open": "759.07", "High": "772.96", "Low": "758.50", "Close": "770.17", "Volume": "2079687", "name": "google" }, { "Date": "02/04/2013", "Open": "761.13", "High": "771.11", "Low": "759.46", "Close": "765.74", "Volume": "1870716", "name": "google" }, { "Date": "02/03/2013", "Open": "767.69", "High": "770.47", "Low": "758.27", "Close": "759.02", "Volume": "3041242", "name": "google" }, { "Date": "01/31/2013", "Open": "758.20", "High": "776.60", "Low": "758.10", "Close": "775.60", "Volume": "3746165", "name": "google" }, { "Date": "01/30/2013", "Open": "750.51", "High": "757.62", "Low": "750.25", "Close": "755.69", "Volume": "1634556", "name": "google" }, { "Date": "01/29/2013", "Open": "753.74", "High": "760.95", "Low": "752.91", "Close": "753.83", "Volume": "1732972", "name": "google" }, { "Date": "01/28/2013", "Open": "746.75", "High": "756.95", "Low": "746.54", "Close": "753.68", "Volume": "1747734", "name": "google" }, { "Date": "01/27/2013", "Open": "751.76", "High": "755.60", "Low": "747.89", "Close": "750.73", "Volume": "1627833", "name": "google" }, { "Date": "01/24/2013", "Open": "750.77", "High": "758.48", "Low": "750.25", "Close": "753.67", "Volume": "2225811", "name": "google" }, { "Date": "01/23/2013", "Open": "741.24", "High": "756.83", "Low": "740.51", "Close": "753.83", "Volume": "3383596", "name": "google" }, { "Date": "01/22/2013", "Open": "735.99", "High": "749.00", "Low": "735.79", "Close": "741.50", "Volume": "5911865", "name": "google" }, { "Date": "01/21/2013", "Open": "704.66", "High": "705.34", "Low": "695.52", "Close": "702.87", "Volume": "3792336", "name": "google" }, { "Date": "01/17/2013", "Open": "710.36", "High": "712.77", "Low": "701.33", "Close": "704.51", "Volume": "3226898", "name": "google" }, { "Date": "01/16/2013", "Open": "717.71", "High": "719.64", "Low": "711.02", "Close": "711.32", "Volume": "2212357", "name": "google" }, { "Date": "01/15/2013", "Open": "722.40", "High": "724.34", "Low": "713.67", "Close": "715.19", "Volume": "2024991", "name": "google" }, { "Date": "01/14/2013", "Open": "719.33", "High": "735.00", "Low": "712.10", "Close": "724.93", "Volume": "3927990", "name": "google" }, { "Date": "01/13/2013", "Open": "737.00", "High": "742.20", "Low": "722.35", "Close": "723.25", "Volume": "2864106", "name": "google" }, { "Date": "01/10/2013", "Open": "742.00", "High": "742.43", "Low": "736.30", "Close": "739.99", "Volume": "1285125", "name": "google" }, { "Date": "01/09/2013", "Open": "742.83", "High": "745.00", "Low": "733.50", "Close": "741.48", "Volume": "1835780", "name": "google" }, { "Date": "01/08/2013", "Open": "732.27", "High": "738.35", "Low": "728.60", "Close": "738.12", "Volume": "2025751", "name": "google" }, { "Date": "01/07/2013", "Open": "735.54", "High": "736.30", "Low": "724.43", "Close": "733.30", "Volume": "1676740", "name": "google" }, { "Date": "01/06/2013", "Open": "735.45", "High": "739.38", "Low": "730.58", "Close": "734.75", "Volume": "1655967", "name": "google" }, { "Date": "01/03/2013", "Open": "729.34", "High": "741.47", "Low": "727.68", "Close": "737.97", "Volume": "2763552", "name": "google" }, { "Date": "01/02/2013", "Open": "724.93", "High": "731.93", "Low": "720.72", "Close": "723.67", "Volume": "2318140", "name": "google" }, { "Date": "01/01/2013", "Open": "719.42", "High": "727.00", "Low": "716.55", "Close": "723.25", "Volume": "2542268", "name": "google" }, { "Date": "12/30/2012", "Open": "700.00", "High": "710.57", "Low": "696.00", "Close": "707.38", "Volume": "1997733", "name": "google" }, { "Date": "12/27/2012", "Open": "701.69", "High": "706.91", "Low": "700.01", "Close": "700.01", "Volume": "1403926", "name": "google" }, { "Date": "12/26/2012", "Open": "707.14", "High": "708.84", "Low": "698.61", "Close": "706.29", "Volume": "1647392", "name": "google" }, { "Date": "12/25/2012", "Open": "708.07", "High": "712.88", "Low": "702.41", "Close": "708.87", "Volume": "1182572", "name": "google" }, { "Date": "12/23/2012", "Open": "714.51", "High": "715.18", "Low": "707.47", "Close": "709.50", "Volume": "841931", "name": "google" }, { "Date": "12/20/2012", "Open": "713.97", "High": "718.82", "Low": "710.52", "Close": "715.63", "Volume": "3527849", "name": "google" }, { "Date": "12/19/2012", "Open": "723.26", "High": "724.65", "Low": "716.97", "Close": "722.36", "Volume": "1657153", "name": "google" }, { "Date": "12/18/2012", "Open": "720.71", "High": "723.00", "Low": "716.68", "Close": "720.11", "Volume": "1919799", "name": "google" }, { "Date": "12/17/2012", "Open": "716.60", "High": "729.10", "Low": "715.05", "Close": "721.07", "Volume": "3005138", "name": "google" }, { "Date": "12/16/2012", "Open": "705.50", "High": "738.28", "Low": "704.02", "Close": "720.78", "Volume": "3036763", "name": "google" }, { "Date": "12/13/2012", "Open": "699.17", "High": "707.82", "Low": "698.43", "Close": "701.96", "Volume": "2130595", "name": "google" }, { "Date": "12/12/2012", "Open": "715.92", "High": "716.48", "Low": "699.55", "Close": "702.70", "Volume": "3446306", "name": "google" }, { "Date": "12/11/2012", "Open": "699.23", "High": "703.51", "Low": "693.48", "Close": "697.56", "Volume": "2426299", "name": "google" }, { "Date": "12/10/2012", "Open": "690.00", "High": "701.92", "Low": "687.72", "Close": "696.88", "Volume": "2687956", "name": "google" }, { "Date": "12/09/2012", "Open": "685.39", "High": "691.65", "Low": "683.79", "Close": "685.42", "Volume": "1366866", "name": "google" }, { "Date": "12/06/2012", "Open": "695.00", "High": "696.88", "Low": "682.42", "Close": "684.21", "Volume": "1919476", "name": "google" }, { "Date": "12/05/2012", "Open": "687.59", "High": "695.61", "Low": "684.51", "Close": "691.13", "Volume": "1462216", "name": "google" }, { "Date": "12/04/2012", "Open": "692.15", "High": "694.50", "Low": "682.33", "Close": "687.82", "Volume": "1862735", "name": "google" }, { "Date": "12/03/2012", "Open": "695.00", "High": "695.51", "Low": "685.70", "Close": "691.03", "Volume": "1991605", "name": "google" }, { "Date": "12/02/2012", "Open": "702.24", "High": "705.89", "Low": "694.11", "Close": "695.25", "Volume": "2193948", "name": "google" }, { "Date": "11/29/2012", "Open": "691.31", "High": "699.22", "Low": "685.69", "Close": "698.37", "Volume": "3164441", "name": "google" }, { "Date": "11/28/2012", "Open": "687.78", "High": "693.90", "Low": "682.00", "Close": "691.89", "Volume": "2780544", "name": "google" }, { "Date": "11/27/2012", "Open": "668.01", "High": "684.91", "Low": "663.89", "Close": "683.67", "Volume": "3041940", "name": "google" }, { "Date": "11/26/2012", "Open": "660.17", "High": "675.00", "Low": "658.00", "Close": "670.71", "Volume": "2509598", "name": "google" }, { "Date": "11/25/2012", "Open": "666.44", "High": "667.00", "Low": "659.02", "Close": "661.15", "Volume": "2205527", "name": "google" }, { "Date": "11/22/2012", "Open": "669.97", "High": "670.00", "Low": "666.10", "Close": "667.97", "Volume": "922477", "name": "google" }, { "Date": "11/20/2012", "Open": "668.99", "High": "669.80", "Low": "660.40", "Close": "665.87", "Volume": "2113011", "name": "google" }, { "Date": "11/19/2012", "Open": "669.51", "High": "678.00", "Low": "664.57", "Close": "669.97", "Volume": "2089086", "name": "google" }, { "Date": "11/18/2012", "Open": "655.70", "High": "668.92", "Low": "655.53", "Close": "668.21", "Volume": "2369716", "name": "google" }, { "Date": "11/15/2012", "Open": "645.99", "High": "653.02", "Low": "636.00", "Close": "647.18", "Volume": "3438500", "name": "google" }, { "Date": "11/14/2012", "Open": "650.00", "High": "660.00", "Low": "643.90", "Close": "647.26", "Volume": "1848939", "name": "google" }, { "Date": "11/13/2012", "Open": "660.66", "High": "662.18", "Low": "650.50", "Close": "652.55", "Volume": "1668322", "name": "google" }, { "Date": "11/12/2012", "Open": "663.00", "High": "667.60", "Low": "658.23", "Close": "659.05", "Volume": "1594639", "name": "google" }, { "Date": "11/11/2012", "Open": "663.75", "High": "669.80", "Low": "660.87", "Close": "665.90", "Volume": "1405870", "name": "google" }, { "Date": "11/08/2012", "Open": "654.65", "High": "668.34", "Low": "650.30", "Close": "663.03", "Volume": "3114084", "name": "google" }, { "Date": "11/07/2012", "Open": "670.20", "High": "671.49", "Low": "651.23", "Close": "652.29", "Volume": "2598676", "name": "google" }, { "Date": "11/06/2012", "Open": "675.00", "High": "678.23", "Low": "666.49", "Close": "667.12", "Volume": "2232438", "name": "google" }, { "Date": "11/05/2012", "Open": "685.48", "High": "686.50", "Low": "677.55", "Close": "681.72", "Volume": "1582936", "name": "google" }, { "Date": "11/04/2012", "Open": "684.50", "High": "686.86", "Low": "675.56", "Close": "682.96", "Volume": "1635894", "name": "google" }, { "Date": "11/01/2012", "Open": "694.79", "High": "695.55", "Low": "687.37", "Close": "687.92", "Volume": "2324569", "name": "google" }, { "Date": "10/31/2012", "Open": "679.50", "High": "690.90", "Low": "678.72", "Close": "687.59", "Volume": "2050471", "name": "google" }, { "Date": "10/30/2012", "Open": "679.86", "High": "681.00", "Low": "675.00", "Close": "680.30", "Volume": "1537001", "name": "google" }, { "Date": "10/25/2012", "Open": "676.50", "High": "683.03", "Low": "671.20", "Close": "675.15", "Volume": "1950865", "name": "google" }, { "Date": "10/24/2012", "Open": "680.00", "High": "682.00", "Low": "673.51", "Close": "677.76", "Volume": "2403696", "name": "google" }, { "Date": "10/23/2012", "Open": "686.80", "High": "687.00", "Low": "675.27", "Close": "677.30", "Volume": "2496411", "name": "google" }, { "Date": "10/22/2012", "Open": "672.01", "High": "687.33", "Low": "672.00", "Close": "680.35", "Volume": "2916978", "name": "google" }, { "Date": "10/21/2012", "Open": "681.01", "High": "684.63", "Low": "669.70", "Close": "678.67", "Volume": "4057872", "name": "google" }, { "Date": "10/18/2012", "Open": "705.58", "High": "706.70", "Low": "672.00", "Close": "681.79", "Volume": "11483428", "name": "google" }, { "Date": "10/17/2012", "Open": "755.54", "High": "759.42", "Low": "676.00", "Close": "695.00", "Volume": "12442346", "name": "google" }, { "Date": "10/16/2012", "Open": "743.95", "High": "756.34", "Low": "740.26", "Close": "755.49", "Volume": "2292819", "name": "google" }, { "Date": "10/15/2012", "Open": "740.13", "High": "746.99", "Low": "736.46", "Close": "744.70", "Volume": "2058468", "name": "google" }, { "Date": "10/14/2012", "Open": "741.94", "High": "743.83", "Low": "730.70", "Close": "740.98", "Volume": "3020098", "name": "google" }, { "Date": "10/11/2012", "Open": "751.85", "High": "754.87", "Low": "744.10", "Close": "744.75", "Volume": "2406787", "name": "google" }, { "Date": "10/10/2012", "Open": "752.90", "High": "758.50", "Low": "750.29", "Close": "751.48", "Volume": "2383987", "name": "google" }, { "Date": "10/09/2012", "Open": "741.86", "High": "747.53", "Low": "738.29", "Close": "744.56", "Volume": "2041203", "name": "google" }, { "Date": "10/08/2012", "Open": "759.67", "High": "761.32", "Low": "742.53", "Close": "744.09", "Volume": "3003884", "name": "google" }, { "Date": "10/07/2012", "Open": "761.00", "High": "763.58", "Low": "754.15", "Close": "757.84", "Volume": "1958625", "name": "google" }, { "Date": "10/04/2012", "Open": "770.71", "High": "774.38", "Low": "765.00", "Close": "767.65", "Volume": "2737751", "name": "google" }, { "Date": "10/03/2012", "Open": "762.75", "High": "769.89", "Low": "759.40", "Close": "768.05", "Volume": "2454496", "name": "google" }, { "Date": "10/02/2012", "Open": "755.72", "High": "763.92", "Low": "752.20", "Close": "762.50", "Volume": "2208639", "name": "google" }, { "Date": "10/01/2012", "Open": "765.20", "High": "765.99", "Low": "750.27", "Close": "756.99", "Volume": "2790375", "name": "google" }, { "Date": "09/30/2012", "Open": "759.05", "High": "765.00", "Low": "756.21", "Close": "761.78", "Volume": "3168477", "name": "google" }, { "Date": "09/27/2012", "Open": "754.15", "High": "759.30", "Low": "751.15", "Close": "754.50", "Volume": "2784091", "name": "google" }, { "Date": "09/26/2012", "Open": "759.95", "High": "762.84", "Low": "751.65", "Close": "756.50", "Volume": "3932272", "name": "google" }, { "Date": "09/25/2012", "Open": "749.85", "High": "761.24", "Low": "741.00", "Close": "753.46", "Volume": "5674334", "name": "google" }, { "Date": "09/24/2012", "Open": "753.05", "High": "764.89", "Low": "747.66", "Close": "749.16", "Volume": "6061033", "name": "google" }, { "Date": "09/23/2012", "Open": "731.00", "High": "750.04", "Low": "730.25", "Close": "749.38", "Volume": "3565837", "name": "google" }, { "Date": "09/20/2012", "Open": "732.21", "High": "734.92", "Low": "730.12", "Close": "733.99", "Volume": "6360376", "name": "google" }, { "Date": "09/19/2012", "Open": "724.47", "High": "731.38", "Low": "721.22", "Close": "728.12", "Volume": "2907854", "name": "google" }, { "Date": "09/18/2012", "Open": "717.50", "High": "728.56", "Low": "716.41", "Close": "727.50", "Volume": "3098782", "name": "google" }, { "Date": "09/17/2012", "Open": "707.78", "High": "718.66", "Low": "706.78", "Close": "718.28", "Volume": "2067249", "name": "google" }, { "Date": "09/16/2012", "Open": "708.11", "High": "712.88", "Low": "705.00", "Close": "709.98", "Volume": "1508307", "name": "google" }, { "Date": "09/13/2012", "Open": "709.60", "High": "713.00", "Low": "707.01", "Close": "709.68", "Volume": "2618874", "name": "google" }, { "Date": "09/12/2012", "Open": "693.09", "High": "709.00", "Low": "690.54", "Close": "706.04", "Volume": "2659302", "name": "google" }, { "Date": "09/11/2012", "Open": "689.41", "High": "694.91", "Low": "680.88", "Close": "690.88", "Volume": "2642260", "name": "google" }, { "Date": "09/10/2012", "Open": "697.96", "High": "700.65", "Low": "691.00", "Close": "692.19", "Volume": "1874004", "name": "google" }, { "Date": "09/09/2012", "Open": "709.76", "High": "712.81", "Low": "698.39", "Close": "700.77", "Volume": "2560067", "name": "google" }, { "Date": "09/06/2012", "Open": "700.00", "High": "712.25", "Low": "697.67", "Close": "706.15", "Volume": "3236308", "name": "google" }, { "Date": "09/05/2012", "Open": "685.96", "High": "699.89", "Low": "684.73", "Close": "699.40", "Volume": "3044450", "name": "google" }, { "Date": "09/04/2012", "Open": "680.00", "High": "686.50", "Low": "679.14", "Close": "680.72", "Volume": "1708169", "name": "google" }, { "Date": "09/03/2012", "Open": "684.55", "High": "685.00", "Low": "673.50", "Close": "681.04", "Volume": "1889613", "name": "google" }, { "Date": "08/30/2012", "Open": "684.00", "High": "688.58", "Low": "680.04", "Close": "685.09", "Volume": "2127125", "name": "google" }, { "Date": "08/29/2012", "Open": "684.24", "High": "687.39", "Low": "680.18", "Close": "681.68", "Volume": "1627704", "name": "google" }, { "Date": "08/28/2012", "Open": "677.37", "High": "688.99", "Low": "676.15", "Close": "688.01", "Volume": "2991037", "name": "google" }, { "Date": "08/27/2012", "Open": "665.00", "High": "677.62", "Low": "664.74", "Close": "677.25", "Volume": "2058938", "name": "google" }, { "Date": "08/26/2012", "Open": "662.99", "High": "672.00", "Low": "659.24", "Close": "669.22", "Volume": "2614131", "name": "google" }, { "Date": "08/23/2012", "Open": "675.60", "High": "680.45", "Low": "674.08", "Close": "678.63", "Volume": "1429267", "name": "google" }, { "Date": "08/22/2012", "Open": "674.27", "High": "680.48", "Low": "671.00", "Close": "676.80", "Volume": "1784453", "name": "google" }, { "Date": "08/21/2012", "Open": "667.38", "High": "680.60", "Low": "666.70", "Close": "677.18", "Volume": "1909262", "name": "google" }, { "Date": "08/20/2012", "Open": "673.11", "High": "678.00", "Low": "662.17", "Close": "669.51", "Volume": "2222805", "name": "google" }, { "Date": "08/19/2012", "Open": "675.50", "High": "678.87", "Low": "672.66", "Close": "675.54", "Volume": "1758421", "name": "google" }, { "Date": "08/16/2012", "Open": "674.12", "High": "677.25", "Low": "671.70", "Close": "677.14", "Volume": "2177896", "name": "google" }, { "Date": "08/15/2012", "Open": "667.51", "High": "674.64", "Low": "667.08", "Close": "672.87", "Volume": "1717691", "name": "google" }, { "Date": "08/14/2012", "Open": "670.28", "High": "674.25", "Low": "664.10", "Close": "667.54", "Volume": "2411100", "name": "google" }, { "Date": "08/13/2012", "Open": "659.25", "High": "672.85", "Low": "659.00", "Close": "668.66", "Volume": "3662178", "name": "google" }, { "Date": "08/12/2012", "Open": "647.42", "High": "660.15", "Low": "646.68", "Close": "660.01", "Volume": "3268073", "name": "google" }, { "Date": "08/09/2012", "Open": "638.59", "High": "642.24", "Low": "636.13", "Close": "642.00", "Volume": "1434408", "name": "google" }, { "Date": "08/08/2012", "Open": "644.51", "High": "646.37", "Low": "641.52", "Close": "642.35", "Volume": "1070288", "name": "google" }, { "Date": "08/07/2012", "Open": "639.05", "High": "645.87", "Low": "638.50", "Close": "642.23", "Volume": "1322386", "name": "google" }, { "Date": "08/06/2012", "Open": "641.79", "High": "644.26", "Low": "636.47", "Close": "640.54", "Volume": "1982695", "name": "google" }, { "Date": "08/05/2012", "Open": "639.61", "High": "649.38", "Low": "639.22", "Close": "642.82", "Volume": "1782494", "name": "google" }, { "Date": "08/02/2012", "Open": "640.00", "High": "643.72", "Low": "636.14", "Close": "641.33", "Volume": "1897446", "name": "google" }, { "Date": "08/01/2012", "Open": "625.51", "High": "638.03", "Low": "623.41", "Close": "628.75", "Volume": "1977690", "name": "google" }, { "Date": "07/31/2012", "Open": "637.30", "High": "639.51", "Low": "631.38", "Close": "632.68", "Volume": "1844556", "name": "google" }, { "Date": "07/30/2012", "Open": "628.26", "High": "636.50", "Low": "628.22", "Close": "632.97", "Volume": "1865890", "name": "google" }, { "Date": "07/29/2012", "Open": "636.05", "High": "642.60", "Low": "629.50", "Close": "632.30", "Volume": "2186717", "name": "google" }, { "Date": "07/26/2012", "Open": "618.89", "High": "635.00", "Low": "617.50", "Close": "634.96", "Volume": "3550174", "name": "google" }, { "Date": "07/25/2012", "Open": "615.00", "High": "616.87", "Low": "610.03", "Close": "613.36", "Volume": "1687485", "name": "google" }, { "Date": "07/24/2012", "Open": "608.32", "High": "613.38", "Low": "605.37", "Close": "607.99", "Volume": "1822973", "name": "google" }, { "Date": "07/23/2012", "Open": "615.00", "High": "617.93", "Low": "604.34", "Close": "607.57", "Volume": "2012189", "name": "google" }, { "Date": "07/22/2012", "Open": "600.48", "High": "618.35", "Low": "598.25", "Close": "615.51", "Volume": "3561818", "name": "google" }, { "Date": "07/19/2012", "Open": "608.76", "High": "612.94", "Low": "598.18", "Close": "610.82", "Volume": "6463748", "name": "google" }, { "Date": "07/18/2012", "Open": "586.14", "High": "598.48", "Low": "586.00", "Close": "593.06", "Volume": "4674637", "name": "google" }, { "Date": "07/17/2012", "Open": "576.98", "High": "583.69", "Low": "576.13", "Close": "580.76", "Volume": "1550950", "name": "google" }, { "Date": "07/16/2012", "Open": "578.43", "High": "580.67", "Low": "568.40", "Close": "576.73", "Volume": "1681568", "name": "google" }, { "Date": "07/15/2012", "Open": "576.37", "High": "579.19", "Low": "571.78", "Close": "574.92", "Volume": "1462861", "name": "google" }, { "Date": "07/12/2012", "Open": "572.15", "High": "579.15", "Low": "568.55", "Close": "576.52", "Volume": "1976558", "name": "google" }, { "Date": "07/11/2012", "Open": "567.12", "High": "571.93", "Low": "562.09", "Close": "570.48", "Volume": "2310094", "name": "google" }, { "Date": "07/10/2012", "Open": "576.30", "High": "577.85", "Low": "564.94", "Close": "571.19", "Volume": "3500946", "name": "google" }, { "Date": "07/09/2012", "Open": "590.19", "High": "592.43", "Low": "578.74", "Close": "581.70", "Volume": "1923015", "name": "google" }, { "Date": "07/08/2012", "Open": "584.95", "High": "588.60", "Low": "581.25", "Close": "586.01", "Volume": "1715020", "name": "google" }, { "Date": "07/05/2012", "Open": "592.45", "High": "593.52", "Low": "582.82", "Close": "585.98", "Volume": "2162328", "name": "google" }, { "Date": "07/04/2012", "Open": "588.76", "High": "600.06", "Low": "588.54", "Close": "595.92", "Volume": "2345901", "name": "google" }, { "Date": "07/02/2012", "Open": "580.01", "High": "588.41", "Low": "578.00", "Close": "587.83", "Volume": "1190525", "name": "google" }, { "Date": "07/01/2012", "Open": "581.82", "High": "583.00", "Low": "576.50", "Close": "580.47", "Volume": "1655563", "name": "google" }, { "Date": "06/28/2012", "Open": "574.96", "High": "580.13", "Low": "572.20", "Close": "580.07", "Volume": "2522562", "name": "google" }, { "Date": "06/27/2012", "Open": "565.90", "High": "566.23", "Low": "557.21", "Close": "564.31", "Volume": "1922064", "name": "google" }, { "Date": "06/26/2012", "Open": "567.70", "High": "573.99", "Low": "566.02", "Close": "569.30", "Volume": "1692446", "name": "google" }, { "Date": "06/25/2012", "Open": "562.76", "High": "566.60", "Low": "559.48", "Close": "564.68", "Volume": "1351151", "name": "google" }, { "Date": "06/24/2012", "Open": "567.33", "High": "568.09", "Low": "557.35", "Close": "560.70", "Volume": "1582036", "name": "google" }, { "Date": "06/21/2012", "Open": "568.00", "High": "571.48", "Low": "565.82", "Close": "571.48", "Volume": "2229125", "name": "google" }, { "Date": "06/20/2012", "Open": "579.84", "High": "579.84", "Low": "563.73", "Close": "565.21", "Volume": "2011322", "name": "google" }, { "Date": "06/19/2012", "Open": "579.81", "High": "580.00", "Low": "573.51", "Close": "577.51", "Volume": "2346698", "name": "google" }, { "Date": "06/18/2012", "Open": "573.59", "High": "584.28", "Low": "573.12", "Close": "581.53", "Volume": "2076629", "name": "google" }, { "Date": "06/17/2012", "Open": "562.62", "High": "574.21", "Low": "559.25", "Close": "570.85", "Volume": "2497864", "name": "google" }, { "Date": "06/14/2012", "Open": "560.34", "High": "564.52", "Low": "557.09", "Close": "564.51", "Volume": "3002511", "name": "google" }, { "Date": "06/13/2012", "Open": "561.30", "High": "565.07", "Low": "556.52", "Close": "559.05", "Volume": "2345107", "name": "google" }, { "Date": "06/12/2012", "Open": "561.72", "High": "567.00", "Low": "558.68", "Close": "561.09", "Volume": "1954607", "name": "google" }, { "Date": "06/11/2012", "Open": "569.77", "High": "570.30", "Low": "558.58", "Close": "565.10", "Volume": "3224142", "name": "google" }, { "Date": "06/10/2012", "Open": "584.21", "High": "585.32", "Low": "566.69", "Close": "568.50", "Volume": "2662269", "name": "google" }, { "Date": "06/07/2012", "Open": "575.85", "High": "581.00", "Low": "574.58", "Close": "580.45", "Volume": "1410366", "name": "google" }, { "Date": "06/06/2012", "Open": "587.60", "High": "587.89", "Low": "577.25", "Close": "578.23", "Volume": "1759532", "name": "google" }, { "Date": "06/05/2012", "Open": "576.48", "High": "581.97", "Low": "573.61", "Close": "580.57", "Volume": "2096173", "name": "google" }, { "Date": "06/04/2012", "Open": "575.45", "High": "578.13", "Low": "566.47", "Close": "570.41", "Volume": "2340477", "name": "google" }, { "Date": "06/03/2012", "Open": "570.22", "High": "580.49", "Low": "570.01", "Close": "578.59", "Volume": "2433786", "name": "google" }, { "Date": "05/31/2012", "Open": "571.79", "High": "572.65", "Low": "568.35", "Close": "570.98", "Volume": "3058314", "name": "google" }, { "Date": "05/30/2012", "Open": "588.72", "High": "590.00", "Low": "579.00", "Close": "580.86", "Volume": "2969455", "name": "google" }, { "Date": "05/29/2012", "Open": "588.16", "High": "591.90", "Low": "583.53", "Close": "588.23", "Volume": "1906629", "name": "google" }, { "Date": "05/28/2012", "Open": "595.81", "High": "599.13", "Low": "588.32", "Close": "594.34", "Volume": "2606651", "name": "google" }, { "Date": "05/24/2012", "Open": "601.00", "High": "601.73", "Low": "588.28", "Close": "591.53", "Volume": "3582472", "name": "google" }, { "Date": "05/23/2012", "Open": "609.16", "High": "611.92", "Low": "598.87", "Close": "603.66", "Volume": "1892185", "name": "google" }, { "Date": "05/22/2012", "Open": "601.65", "High": "609.60", "Low": "597.12", "Close": "609.46", "Volume": "3178016", "name": "google" }, { "Date": "05/21/2012", "Open": "613.44", "High": "613.81", "Low": "596.00", "Close": "600.80", "Volume": "3052748", "name": "google" }, { "Date": "05/20/2012", "Open": "600.51", "High": "615.69", "Low": "600.00", "Close": "614.11", "Volume": "3075829", "name": "google" }, { "Date": "05/17/2012", "Open": "625.10", "High": "632.42", "Low": "596.70", "Close": "600.40", "Volume": "5976129", "name": "google" }, { "Date": "05/16/2012", "Open": "633.83", "High": "637.85", "Low": "621.23", "Close": "623.05", "Volume": "3354518", "name": "google" }, { "Date": "05/15/2012", "Open": "617.96", "High": "630.10", "Low": "615.94", "Close": "628.93", "Volume": "4837424", "name": "google" }, { "Date": "05/14/2012", "Open": "605.35", "High": "615.00", "Low": "603.75", "Close": "611.11", "Volume": "2102339", "name": "google" }, { "Date": "05/13/2012", "Open": "600.78", "High": "608.50", "Low": "600.58", "Close": "604.00", "Volume": "1824733", "name": "google" }, { "Date": "05/10/2012", "Open": "610.35", "High": "614.55", "Low": "604.77", "Close": "605.23", "Volume": "2099726", "name": "google" }, { "Date": "05/09/2012", "Open": "612.96", "High": "616.19", "Low": "610.23", "Close": "613.66", "Volume": "1535877", "name": "google" }, { "Date": "05/08/2012", "Open": "606.82", "High": "616.38", "Low": "601.81", "Close": "609.15", "Volume": "2329546", "name": "google" }, { "Date": "05/07/2012", "Open": "605.53", "High": "616.90", "Low": "600.70", "Close": "612.79", "Volume": "2678485", "name": "google" }, { "Date": "05/06/2012", "Open": "595.00", "High": "610.57", "Low": "595.00", "Close": "607.55", "Volume": "1994515", "name": "google" }, { "Date": "05/03/2012", "Open": "605.92", "High": "607.89", "Low": "596.81", "Close": "596.97", "Volume": "2207360", "name": "google" }, { "Date": "05/02/2012", "Open": "609.62", "High": "614.83", "Low": "608.95", "Close": "611.02", "Volume": "1868187", "name": "google" }, { "Date": "05/01/2012", "Open": "601.20", "High": "608.11", "Low": "600.61", "Close": "607.26", "Volume": "1611434", "name": "google" }, { "Date": "04/30/2012", "Open": "603.79", "High": "611.60", "Low": "600.19", "Close": "604.43", "Volume": "2002424", "name": "google" }, { "Date": "04/29/2012", "Open": "612.99", "High": "616.08", "Low": "600.61", "Close": "604.85", "Volume": "2407213", "name": "google" }, { "Date": "04/26/2012", "Open": "615.02", "High": "616.74", "Low": "610.60", "Close": "614.98", "Volume": "1636399", "name": "google" }, { "Date": "04/25/2012", "Open": "610.91", "High": "618.00", "Low": "609.70", "Close": "615.47", "Volume": "2093733", "name": "google" }]; };
}

			);

 /*Bar*/
 $(function ()  
				{
   var dataSource = [
    { state: "Illinois", year1998: 423.721, year2001: 476.851, year2004: 528.904 },
    { state: "Indiana", year1998: 178.719, year2001: 195.769, year2004: 227.271 },
    { state: "Michigan", year1998: 308.845, year2001: 335.793, year2004: 372.576 },
    { state: "Ohio", year1998: 348.555, year2001: 374.771, year2004: 418.258 },
    { state: "Wisconsin", year1998: 160.274, year2001: 182.373, year2004: 211.727 }
];

$("#bar").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "state",
        type: "bar",
        hoverMode: "allArgumentPoints",
        selectionMode: "allArgumentPoints",
        label: {
            visible: true,
            format: "fixedPoint",
            precision: 0
        }
    },
    series: [
        { valueField: "year2004", name: "2004" },
        { valueField: "year2001", name: "2001" },
        { valueField: "year1998", name: "1998" }
    ],
    title: "Great Lakes Gross State Product",
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center"
    },
    pointClick: function (point) {
        this.select();
    }
});
}

			);

/*Null Point Support*/
$(function ()  
				{
   var dataSource = [

  { year: 1904, gold: null, silver: null },
  { year: 1908, gold: 5, silver: 5 },
  { year: 1912, gold: 7, silver: 4 },
  { year: 1916, gold: null, silver: null },
  { year: 1920, gold: 9, silver: 19 },
  { year: 1924, gold: 13, silver: 15 },
  { year: 1928, gold: 6, silver: 10 },
  { year: 1932, gold: 10, silver: 5 },
  { year: 1936, gold: 7, silver: 6 },
  { year: 1940, gold: null, silver: null },
  { year: 1944, gold: null, silver: null },
  { year: 1948, gold: 10, silver: 6 },
  { year: 1952, gold: 6, silver: 6 },
  { year: 1956, gold: 4, silver: 4 },
  { year: 1960, gold: null, silver: 2 },
  { year: 1964, gold: 1, silver: 8 },
  { year: 1968, gold: 7, silver: 3 },
  { year: 1972, gold: 2, silver: 4 },
  { year: 1976, gold: 2, silver: 3 },
  { year: 1980, gold: 6, silver: 5 },
  { year: 1984, gold: 5, silver: 7 },
  { year: 1988, gold: 6, silver: 4 },
  { year: 1992, gold: 8, silver: 5 },
  { year: 1996, gold: 15, silver: 7 },
  { year: 2000, gold: 13, silver: 14 },
  { year: 2004, gold: 11, silver: 9 },
  { year: 2008, gold: 7, silver: 16 }];

$("#nullPoint").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "year",
        type: "steparea",
        steparea: {
            point: { visible: true }
        }
    },
    series: [{ valueField: "gold", name: "Gold Medals", color: "#ffd700" },
             { valueField: "silver", name: "Silver Medals", color: "#c0c0c0" }],
    title: {
        text: "France Olympic Medals"
    },
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center"
    }
});
}

			);

 /*Selection*/
 $(function ()  
				{
   var dataSource = [
    { country: "China", year2007: 0.1732, year2008: -0.1588 },
	{ country: "Germany", year2007: 0.0964, year2008: -0.2231 },
	{ country: "United States", year2007: 0.1187, year2008: -0.1878 },
	{ country: "Japan", year2007: 0.1081, year2008: -0.2614 },
	{ country: "France", year2007: 0.1014, year2008: -0.2222 },
	{ country: "Netherlands", year2007: 0.1355, year2008: -0.2015 }
];

$("#selection").dxChart({
    rotated: true,
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "country",
        type: "bar",
        hoverMode: "allArgumentPoints",
        selectionMode: "allArgumentPoints",
        label: {
            visible: true,
            format: "percent",
            precision: 1
        }
    },
    valueAxis: {
        label: {
            format: "percent",
            precision: 1
        }
    },
    series: [
        { valueField: "year2007", name: "2007 - 2008" },
        { valueField: "year2008", name: "2008 - 2009" }
    ],
    title: {
        text: "Economy - Export Change"
    },
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center"
    },
    pointClick: function(point) {
        point.select();
    }
});
}

			);

 /*Series Template*/
 $(function ()  
				{
   var dataSource = [
    { year: 1970, country: "Saudi Arabia", oil: 192.2 },
    { year: 1970, country: "USA", oil: 533.5 },
    { year: 1970, country: "Iran", oil: 192.6 },
    { year: 1970, country: "Mexico", oil: 24.2 },

    { year: 1980, country: "Saudi Arabia", oil: 509.8 },
    { year: 1980, country: "USA", oil: 480.2 },
    { year: 1980, country: "Iran", oil: 74.3 },
    { year: 1980, country: "Mexico", oil: 107.2 },

    { year: 1990, country: "Saudi Arabia", oil: 342.6 },
    { year: 1990, country: "USA", oil: 416.6 },
    { year: 1990, country: "Iran", oil: 162.8 },
    { year: 1990, country: "Mexico", oil: 146.3 },
    { year: 1990, country: "Russia", oil: 515.9 },

    { year: 2000, country: "Saudi Arabia", oil: 456.3 },
    { year: 2000, country: "USA", oil: 352.6 },
    { year: 2000, country: "Iran", oil: 191.3 },
    { year: 2000, country: "Mexico", oil: 171.2 },
    { year: 2000, country: "Russia", oil: 323.3 },

    { year: 2008, country: "Saudi Arabia", oil: 515.3 },
    { year: 2008, country: "USA", oil: 304.9 },
    { year: 2008, country: "Iran", oil: 209.9 },
    { year: 2008, country: "Mexico", oil: 157.7 },
    { year: 2008, country: "Russia", oil: 488.5 },

    { year: 2009, country: "Saudi Arabia", oil: 459.5 },
    { year: 2009, country: "USA", oil: 325.3 },
    { year: 2009, country: "Iran", oil: 202.4 },
    { year: 2009, country: "Mexico", oil: 147.5 },
    { year: 2009, country: "Russia", oil: 494.2 }
];

$("#seriesTemplate").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "country",
        valueField: "oil",
        type: "bar"
    },
    seriesTemplate: {
        nameField: "year",
        customizeSeries: function(valueFromNameField) {
            return valueFromNameField === 2009 ? { type: "line", label: { visible: true }, color: "red" } : {};
        }
    },
    title: {
        text: "Oil Production (in millions tonnes)"
    },
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center"
    }
});
}

			);

 /*Multiple Panes*/
 $(function ()  
				{
   var dataSource = [
    { month: "January", avgT: 9.8, minT: 4.1, maxT: 15.5, prec: 109 },
    { month: "February", avgT: 11.8, minT: 5.8, maxT: 17.8, prec: 104 },
    { month: "March", avgT: 13.4, minT: 7.2, maxT: 19.6, prec: 92 },
    { month: "April", avgT: 15.4, minT: 8.1, maxT: 22.8, prec: 30 },
    { month: "May", avgT: 18, minT: 10.3, maxT: 25.7, prec: 10 },
    { month: "June", avgT: 20.6, minT: 12.2, maxT: 29, prec: 2 },
    { month: "July", avgT: 22.2, minT: 13.2, maxT: 31.3, prec: 2 },
    { month: "August", avgT: 22.2, minT: 13.2, maxT: 31.1, prec: 1 },
    { month: "September", avgT: 21.2, minT: 12.4, maxT: 29.9, prec: 8 },
    { month: "October", avgT: 17.9, minT: 9.7, maxT: 26.1, prec: 24 },
    { month: "November", avgT: 12.9, minT: 6.2, maxT: 19.6, prec: 64 },
    { month: "December", avgT: 9.6, minT: 3.4, maxT: 15.7, prec: 76 }
];

$("#panes").dxChart({
    dataSource: dataSource,
    commonSeriesSettings:{
        argumentField: "month"
    },
    panes: [{
            name: "topPane"
        }, {
            name: "bottomPane"
        }],
    series: [{ 
            pane: "topPane",
            color: "#87CEEB",
            type: "rangeArea",
            rangeValue1Field: "minT",
            rangeValue2Field: "maxT",
            name: "Monthly Temperature Ranges, °C"
        }, {
            pane: "topPane", 
            valueField: "avgT",
            name: "Average Temperature, °C",
            label: {
                visible: true,
                customizeText: function (){
                    return this.valueText + " °C";
                }
            }
        }, {
            type: "bar",
            valueField: "prec",
            name: "prec, mm",
            label: {
                visible: true,
                customizeText: function (){
                    return this.valueText  + " mm";
                }
            }
        }
    ],    
    valueAxis: [{
        pane: "bottomPane",
        grid: {
            visible: true
        },
        title: {
            text: "Precipitation, mm"
        }
    }, {
        pane: "topPane",
        min: 0,
        max: 30,
        grid: {
            visible: true
        },
        title: {
            text: "Temperature, °C"
        }
    }],
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center"
    },
    title: {
        text: "Weather in Glendale, CA"
    }
});
}

			);

 /*Custom CrossHair*/
 $(function ()  
				{
   var dataSource = [
    { country: "USA", hydro: 59.8, oil: 937.6, gas: 582, coal: 564.3, nuclear: 187.9 },
    { country: "China", hydro: 74.2, oil: 308.6, gas: 35.1, coal: 956.9, nuclear: 11.3 },
    { country: "Russia", hydro: 40, oil: 128.5, gas: 361.8, coal: 105, nuclear: 32.4 },
    { country: "Japan", hydro: 22.6, oil: 241.5, gas: 64.9, coal: 120.8, nuclear: 64.8 },
    { country: "India", hydro: 19, oil: 119.3, gas: 28.9, coal: 204.8, nuclear: 3.8 },
    { country: "Germany", hydro: 6.1, oil: 123.6, gas: 77.3, coal: 85.7, nuclear: 37.8 }
];


$("#customCrosshair").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "country",
        type: "fullStackedLine",
        point: {
            hoverMode: 'allArgumentPoints'
        }
    },
    argumentAxis: {
        valueMarginsEnabled: false,
        discreteAxisDivisionMode: "crossLabels",
        grid: {
            visible: true
        }
    },
    crosshair: {
        enabled: true,
        horizontalLine: false,
        color: '#008000',
        width: 3,
        dashStyle:'dot'
    },
    series: [
        { valueField: "hydro", name: "Hydro-electric" },
        { valueField: "oil", name: "Oil" },
        { valueField: "gas", name: "Natural gas" },
        { valueField: "coal", name: "Coal" },
        { valueField: "nuclear", name: "Nuclear" }
    ],
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center",
        itemTextPosition: "bottom",
        equalColumnWidth: true
    },
    title: "Energy Consumption in 2004 (Millions of Tons, Oil Equivalent)",
    tooltip: {
        enabled: true,
        customizeText: function () {
            return this.percentText + " - " + this.valueText;
        }
    }
});
}

			);

 /*Hover Mode*/
 $(function ()  
				{
   var dataSource = [
    { state: "Illinois", year1998: 423.721, year2001: 476.851, year2004: 528.904 },
    { state: "Indiana", year1998: 178.719, year2001: 195.769, year2004: 227.271 },
    { state: "Michigan", year1998: 308.845, year2001: 335.793, year2004: 372.576 },
    { state: "Ohio", year1998: 348.555, year2001: 374.771, year2004: 418.258 },
    { state: "Wisconsin", year1998: 160.274, year2001: 182.373, year2004: 211.727 }
];

$("#hoverMode").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "state",
        type: "spline",
        hoverMode: "includePoints",
        point: {
            hoverMode: "allArgumentPoints"
        }
    },
    series: [
        { valueField: "year2004", name: "2004" },
        { valueField: "year2001", name: "2001" },
        { valueField: "year1998", name: "1998" }
    ],
    title: {
        text: "Great Lakes Gross State Product"
    },
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center",
        hoverMode: "excludePoints"
    }
});
}

			);

 /*Multiple Point Selection*/
 $(function ()  
				{
   var dataSource = [
  { country: "USA", gold: 36, silver: 38, bronze: 36 },
  { country: "China", gold: 51, silver: 21, bronze: 28 },
  { country: "Russia", gold: 23, silver: 21, bronze: 28 },
  { country: "Britain", gold: 19, silver: 13, bronze: 15 },
  { country: "Australia", gold: 14, silver: 15, bronze: 17 },
  { country: "Germany", gold: 16, silver: 10, bronze: 15 }
];

$("#multiplePoint").dxChart({
    rotated: true,
    pointSelectionMode: "multiple",
    dataSource: dataSource,
    commonSeriesSettings: {
        argumentField: "country",
        type: "stackedbar",
        selectionStyle: {
            hatching: {
                direction: "left"
            }
        }
    },
    series: [
      { valueField: "gold", name: "Gold Medals", color: "#ffd700" },
      { valueField: "silver", name: "Silver Medals", color: "#c0c0c0" },
      { valueField: "bronze", name: "Bronze Medals", color: "#cd7f32" }
    ],
    title: {
        text: "Olympic Medals in 2008"
    },
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center"
    },
    pointClick: function(point) {
        point.isSelected() ? point.clearSelection() : point.select();
    }
});
}

			);




  // PAGE RELATED SCRIPTS

      /* chart colors default */
      var $chrt_border_color = "#efefef";
      var $chrt_grid_color = "#DDD"
      var $chrt_main = "#E24913";
      /* red       */
      var $chrt_second = "#6595b4";
      /* blue      */
      var $chrt_third = "#FF9F01";
      /* orange    */
      var $chrt_fourth = "#7e9d3a";
      /* green     */
      var $chrt_fifth = "#BD362F";
      /* dark red  */
      var $chrt_mono = "#000";

      $(document).ready(function() {

        // DO NOT REMOVE : GLOBAL FUNCTIONS!
       

        /* sales chart */

        if ($("#saleschart").length) {
          var d = [[1196463600000, 0], [1196550000000, 0], [1196636400000, 0], [1196722800000, 77], [1196809200000, 3636], [1196895600000, 3575], [1196982000000, 2736], [1197068400000, 1086], [1197154800000, 676], [1197241200000, 1205], [1197327600000, 906], [1197414000000, 710], [1197500400000, 639], [1197586800000, 540], [1197673200000, 435], [1197759600000, 301], [1197846000000, 575], [1197932400000, 481], [1198018800000, 591], [1198105200000, 608], [1198191600000, 459], [1198278000000, 234], [1198364400000, 1352], [1198450800000, 686], [1198537200000, 279], [1198623600000, 449], [1198710000000, 468], [1198796400000, 392], [1198882800000, 282], [1198969200000, 208], [1199055600000, 229], [1199142000000, 177], [1199228400000, 374], [1199314800000, 436], [1199401200000, 404], [1199487600000, 253], [1199574000000, 218], [1199660400000, 476], [1199746800000, 462], [1199833200000, 500], [1199919600000, 700], [1200006000000, 750], [1200092400000, 600], [1200178800000, 500], [1200265200000, 900], [1200351600000, 930], [1200438000000, 1200], [1200524400000, 980], [1200610800000, 950], [1200697200000, 900], [1200783600000, 1000], [1200870000000, 1050], [1200956400000, 1150], [1201042800000, 1100], [1201129200000, 1200], [1201215600000, 1300], [1201302000000, 1700], [1201388400000, 1450], [1201474800000, 1500], [1201561200000, 546], [1201647600000, 614], [1201734000000, 954], [1201820400000, 1700], [1201906800000, 1800], [1201993200000, 1900], [1202079600000, 2000], [1202166000000, 2100], [1202252400000, 2200], [1202338800000, 2300], [1202425200000, 2400], [1202511600000, 2550], [1202598000000, 2600], [1202684400000, 2500], [1202770800000, 2700], [1202857200000, 2750], [1202943600000, 2800], [1203030000000, 3245], [1203116400000, 3345], [1203202800000, 3000], [1203289200000, 3200], [1203375600000, 3300], [1203462000000, 3400], [1203548400000, 3600], [1203634800000, 3700], [1203721200000, 3800], [1203807600000, 4000], [1203894000000, 4500]];

          for (var i = 0; i < d.length; ++i)
            d[i][0] += 60 * 60 * 1000;

          function weekendAreas(axes) {
            var markings = [];
            var d = new Date(axes.xaxis.min);
            // go to the first Saturday
            d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
            d.setUTCSeconds(0);
            d.setUTCMinutes(0);
            d.setUTCHours(0);
            var i = d.getTime();
            do {
              // when we don't set yaxis, the rectangle automatically
              // extends to infinity upwards and downwards
              markings.push({
                xaxis : {
                  from : i,
                  to : i + 2 * 24 * 60 * 60 * 1000
                }
              });
              i += 7 * 24 * 60 * 60 * 1000;
            } while (i < axes.xaxis.max);

            return markings;
          }

          var options = {
            xaxis : {
              mode : "time",
              tickLength : 5
            },
            series : {
              lines : {
                show : true,
                lineWidth : 1,
                fill : true,
                fillColor : {
                  colors : [{
                    opacity : 0.1
                  }, {
                    opacity : 0.15
                  }]
                }
              },
              //points: { show: true },
              shadowSize : 0
            },
            selection : {
              mode : "x"
            },
            grid : {
              hoverable : true,
              clickable : true,
              tickColor : $chrt_border_color,
              borderWidth : 0,
              borderColor : $chrt_border_color,
            },
            tooltip : true,
            tooltipOpts : {
              content : "Your sales for <b>%x</b> was <span>$%y</span>",
              dateFormat : "%y-%0m-%0d",
              defaultTheme : false
            },
            colors : [$chrt_second],

          };

          var plot = $.plot($("#saleschart"), [d], options);
        };

        /* end sales chart */

        /* Sin chart */

        if ($("#sin-chart").length) {
          var sin = [], cos = [];
          for (var i = 0; i < 16; i += 0.5) {
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
          }

          var plot = $.plot($("#sin-chart"), [{
            data : sin,
            label : "sin(x)"
          }, {
            data : cos,
            label : "cos(x)"
          }], {
            series : {
              lines : {
                show : true
              },
              points : {
                show : true
              }
            },
            grid : {
              hoverable : true,
              clickable : true,
              tickColor : $chrt_border_color,
              borderWidth : 0,
              borderColor : $chrt_border_color,
            },
            tooltip : true,
            tooltipOpts : {
              //content : "Value <b>$x</b> Value <span>$y</span>",
              defaultTheme : false
            },
            colors : [$chrt_second, $chrt_fourth],
            yaxis : {
              min : -1.1,
              max : 1.1
            },
            xaxis : {
              min : 0,
              max : 15
            }
          });

          $("#sin-chart").bind("plotclick", function(event, pos, item) {
            if (item) {
              $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
              plot.highlight(item.series, item.datapoint);
            }
          });
        }

        /* end sin chart */

        /* bar chart */

        if ($("#bar-chart").length) {

          var data1 = [];
          for (var i = 0; i <= 12; i += 1)
            data1.push([i, parseInt(Math.random() * 30)]);

          var data2 = [];
          for (var i = 0; i <= 12; i += 1)
            data2.push([i, parseInt(Math.random() * 30)]);

          var data3 = [];
          for (var i = 0; i <= 12; i += 1)
            data3.push([i, parseInt(Math.random() * 30)]);

          var ds = new Array();

          ds.push({
            data : data1,
            bars : {
              show : true,
              barWidth : 0.2,
              order : 1,
            }
          });
          ds.push({
            data : data2,
            bars : {
              show : true,
              barWidth : 0.2,
              order : 2
            }
          });
          ds.push({
            data : data3,
            bars : {
              show : true,
              barWidth : 0.2,
              order : 3
            }
          });

          //Display graph
          $.plot($("#bar-chart"), ds, {
            colors : [$chrt_second, $chrt_fourth, "#666", "#BBB"],
            grid : {
              show : true,
              hoverable : true,
              clickable : true,
              tickColor : $chrt_border_color,
              borderWidth : 0,
              borderColor : $chrt_border_color,
            },
            legend : true,
            tooltip : true,
            tooltipOpts : {
              content : "<b>%x</b> = <span>%y</span>",
              defaultTheme : false
            }

          });

        }

        /* end bar chart */

        /* bar-chart-h */
        if ($("#bar-chart-h").length) {
          //Display horizontal graph
          var d1_h = [];
          for (var i = 0; i <= 3; i += 1)
            d1_h.push([parseInt(Math.random() * 30), i]);

          var d2_h = [];
          for (var i = 0; i <= 3; i += 1)
            d2_h.push([parseInt(Math.random() * 30), i]);

          var d3_h = [];
          for (var i = 0; i <= 3; i += 1)
            d3_h.push([parseInt(Math.random() * 30), i]);

          var ds_h = new Array();
          ds_h.push({ 
            data : d1_h,
            bars : {
              horizontal : true,
              show : true,
              barWidth : 0.2,
              order : 1,
            }
          });
          ds_h.push({
            data : d2_h,
            bars : {
              horizontal : true,
              show : true,
              barWidth : 0.2,
              order : 2
            }
          });
          ds_h.push({
            data : d3_h,
            bars : {
              horizontal : true,
              show : true,
              barWidth : 0.2,
              order : 3
            }
          });

          // display graph
          $.plot($("#bar-chart-h"), ds_h, {
            colors : [$chrt_second, $chrt_fourth, "#666", "#BBB"],
            grid : {
              show : true,
              hoverable : true,
              clickable : true,
              tickColor : $chrt_border_color,
              borderWidth : 0,
              borderColor : $chrt_border_color,
            },
            legend : true,
            tooltip : true,
            tooltipOpts : {
              content : "<b>%x</b> = <span>%y</span>",
              defaultTheme : false
            }
          });

        }

        /* end bar-chart-h

         /* fill chart */

        if ($("#fill-chart").length) {
          var males = {
            '15%' : [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6], [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9], [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]],
            '90%' : [[2, 96.8], [3, 105.2], [4, 113.9], [5, 120.8], [6, 127.0], [7, 133.1], [8, 139.1], [9, 143.9], [10, 151.3], [11, 161.1], [12, 164.8], [13, 173.5], [14, 179.0], [15, 182.0], [16, 186.9], [17, 185.2], [18, 186.3], [19, 186.6]],
            '25%' : [[2, 89.2], [3, 94.9], [4, 104.4], [5, 111.4], [6, 117.5], [7, 120.2], [8, 127.1], [9, 132.9], [10, 136.8], [11, 144.4], [12, 149.5], [13, 154.1], [14, 163.1], [15, 169.2], [16, 170.4], [17, 171.2], [18, 172.4], [19, 170.8]],
            '10%' : [[2, 86.9], [3, 92.6], [4, 99.9], [5, 107.0], [6, 114.0], [7, 113.5], [8, 123.6], [9, 129.2], [10, 133.0], [11, 140.6], [12, 145.2], [13, 149.7], [14, 158.4], [15, 163.5], [16, 166.9], [17, 167.5], [18, 167.1], [19, 165.3]],
            'mean' : [[2, 91.9], [3, 98.5], [4, 107.1], [5, 114.4], [6, 120.6], [7, 124.7], [8, 131.1], [9, 136.8], [10, 142.3], [11, 150.0], [12, 154.7], [13, 161.9], [14, 168.7], [15, 173.6], [16, 175.9], [17, 176.6], [18, 176.8], [19, 176.7]],
            '75%' : [[2, 94.5], [3, 102.1], [4, 110.8], [5, 117.9], [6, 124.0], [7, 129.3], [8, 134.6], [9, 141.4], [10, 147.0], [11, 156.1], [12, 160.3], [13, 168.3], [14, 174.7], [15, 178.0], [16, 180.2], [17, 181.7], [18, 181.3], [19, 182.5]],
            '85%' : [[2, 96.2], [3, 103.8], [4, 111.8], [5, 119.6], [6, 125.6], [7, 131.5], [8, 138.0], [9, 143.3], [10, 149.3], [11, 159.8], [12, 162.5], [13, 171.3], [14, 177.5], [15, 180.2], [16, 183.8], [17, 183.4], [18, 183.5], [19, 185.5]],
            '50%' : [[2, 91.9], [3, 98.2], [4, 106.8], [5, 114.6], [6, 120.8], [7, 125.2], [8, 130.3], [9, 137.1], [10, 141.5], [11, 149.4], [12, 153.9], [13, 162.2], [14, 169.0], [15, 174.8], [16, 176.0], [17, 176.8], [18, 176.4], [19, 177.4]]
          };

          var females = {
            '15%' : [[2, 84.8], [3, 93.7], [4, 100.6], [5, 105.8], [6, 113.3], [7, 119.3], [8, 124.3], [9, 131.4], [10, 136.9], [11, 143.8], [12, 149.4], [13, 151.2], [14, 152.3], [15, 155.9], [16, 154.7], [17, 157.0], [18, 156.1], [19, 155.4]],
            '90%' : [[2, 95.6], [3, 104.1], [4, 111.9], [5, 119.6], [6, 127.6], [7, 133.1], [8, 138.7], [9, 147.1], [10, 152.8], [11, 161.3], [12, 166.6], [13, 167.9], [14, 169.3], [15, 170.1], [16, 172.4], [17, 169.2], [18, 171.1], [19, 172.4]],
            '25%' : [[2, 87.2], [3, 95.9], [4, 101.9], [5, 107.4], [6, 114.8], [7, 121.4], [8, 126.8], [9, 133.4], [10, 138.6], [11, 146.2], [12, 152.0], [13, 153.8], [14, 155.7], [15, 158.4], [16, 157.0], [17, 158.5], [18, 158.4], [19, 158.1]],
            '10%' : [[2, 84.0], [3, 91.9], [4, 99.2], [5, 105.2], [6, 112.7], [7, 118.0], [8, 123.3], [9, 130.2], [10, 135.0], [11, 141.1], [12, 148.3], [13, 150.0], [14, 150.7], [15, 154.3], [16, 153.6], [17, 155.6], [18, 154.7], [19, 153.1]],
            'mean' : [[2, 90.2], [3, 98.3], [4, 105.2], [5, 112.2], [6, 119.0], [7, 125.8], [8, 131.3], [9, 138.6], [10, 144.2], [11, 151.3], [12, 156.7], [13, 158.6], [14, 160.5], [15, 162.1], [16, 162.9], [17, 162.2], [18, 163.0], [19, 163.1]],
            '75%' : [[2, 93.2], [3, 101.5], [4, 107.9], [5, 116.6], [6, 122.8], [7, 129.3], [8, 135.2], [9, 143.7], [10, 148.7], [11, 156.9], [12, 160.8], [13, 163.0], [14, 165.0], [15, 165.8], [16, 168.7], [17, 166.2], [18, 167.6], [19, 168.0]],
            '85%' : [[2, 94.5], [3, 102.8], [4, 110.4], [5, 119.0], [6, 125.7], [7, 131.5], [8, 137.9], [9, 146.0], [10, 151.3], [11, 159.9], [12, 164.0], [13, 166.5], [14, 167.5], [15, 168.5], [16, 171.5], [17, 168.0], [18, 169.8], [19, 170.3]],
            '50%' : [[2, 90.2], [3, 98.1], [4, 105.2], [5, 111.7], [6, 118.2], [7, 125.6], [8, 130.5], [9, 138.3], [10, 143.7], [11, 151.4], [12, 156.7], [13, 157.7], [14, 161.0], [15, 162.0], [16, 162.8], [17, 162.2], [18, 162.8], [19, 163.3]]
          };

          var dataset = [{
            label : 'female mean',
            data : females['mean'],
            lines : {
              show : true
            },
            color : "rgb(255,50,50)"
          }, {
            id : 'f15%',
            data : females['15%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : false
            },
            color : "rgb(255,50,50)"
          }, {
            id : 'f25%',
            data : females['25%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : 0.2
            },
            color : "rgb(255,50,50)",
            fillBetween : 'f15%'
          }, {
            id : 'f50%',
            data : females['50%'],
            lines : {
              show : true,
              lineWidth : 0.5,
              fill : 0.4,
              shadowSize : 0
            },
            color : "rgb(255,50,50)",
            fillBetween : 'f25%'
          }, {
            id : 'f75%',
            data : females['75%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : 0.4
            },
            color : "rgb(255,50,50)",
            fillBetween : 'f50%'
          }, {
            id : 'f85%',
            data : females['85%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : 0.2
            },
            color : "rgb(255,50,50)",
            fillBetween : 'f75%'
          }, {
            label : 'male mean',
            data : males['mean'],
            lines : {
              show : true
            },
            color : "rgb(50,50,255)"
          }, {
            id : 'm15%',
            data : males['15%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : false
            },
            color : "rgb(50,50,255)"
          }, {
            id : 'm25%',
            data : males['25%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : 0.2
            },
            color : "rgb(50,50,255)",
            fillBetween : 'm15%'
          }, {
            id : 'm50%',
            data : males['50%'],
            lines : {
              show : true,
              lineWidth : 0.5,
              fill : 0.4,
              shadowSize : 0
            },
            color : "rgb(50,50,255)",
            fillBetween : 'm25%'
          }, {
            id : 'm75%',
            data : males['75%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : 0.4
            },
            color : "rgb(50,50,255)",
            fillBetween : 'm50%'
          }, {
            id : 'm85%',
            data : males['85%'],
            lines : {
              show : true,
              lineWidth : 0,
              fill : 0.2
            },
            color : "rgb(50,50,255)",
            fillBetween : 'm75%'
          }]

          $.plot($("#fill-chart"), dataset, {

            xaxis : {
              tickDecimals : 0
            },

            yaxis : {
              tickFormatter : function(v) {
                return v + " cm";
              }
            },

          });
        }

        /* end fill chart */

        /* pie chart */

        if ($('#pie-chart').length) {

          var data_pie = [];
          var series = Math.floor(Math.random() * 10) + 1;
          for (var i = 0; i < series; i++) {
            data_pie[i] = {
              label : "Series" + (i + 1),
              data : Math.floor(Math.random() * 100) + 1
            }
          }

          $.plot($("#pie-chart"), data_pie, {
            series : {
              pie : {
                show : true,
                innerRadius : 0.5,
                radius : 1,
                label : {
                  show : false,
                  radius : 2 / 3,
                  formatter : function(label, series) {
                    return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                  },
                  threshold : 0.1
                }
              }
            },
            legend : {
              show : true,
              noColumns : 1, // number of colums in legend table
              labelFormatter : null, // fn: string -> string
              labelBoxBorderColor : "#000", // border color for the little label boxes
              container : null, // container (as jQuery object) to put legend in, null means default on top of graph
              position : "ne", // position of default legend container within plot
              margin : [5, 10], // distance from grid edge to default legend container within plot
              backgroundColor : "#efefef", // null means auto-detect
              backgroundOpacity : 1 // set to 0 to avoid background
            },
            grid : {
              hoverable : true,
              clickable : true
            },
          });

        }

        /* end pie chart */

        /* site stats chart */

        if ($("#site-stats").length) {

          var pageviews = [[1, 75], [3, 87], [4, 93], [5, 127], [6, 116], [7, 137], [8, 135], [9, 130], [10, 167], [11, 169], [12, 179], [13, 185], [14, 176], [15, 180], [16, 174], [17, 193], [18, 186], [19, 177], [20, 153], [21, 149], [22, 130], [23, 100], [24, 50]];
          var visitors = [[1, 65], [3, 50], [4, 73], [5, 100], [6, 95], [7, 103], [8, 111], [9, 97], [10, 125], [11, 100], [12, 95], [13, 141], [14, 126], [15, 131], [16, 146], [17, 158], [18, 160], [19, 151], [20, 125], [21, 110], [22, 100], [23, 85], [24, 37]];
          //console.log(pageviews)
          var plot = $.plot($("#site-stats"), [{
            data : pageviews,
            label : "Your pageviews"
          }, {
            data : visitors,
            label : "Site visitors"
          }], {
            series : {
              lines : {
                show : true,
                lineWidth : 1,
                fill : true,
                fillColor : {
                  colors : [{
                    opacity : 0.1
                  }, {
                    opacity : 0.15
                  }]
                }
              },
              points : {
                show : true
              },
              shadowSize : 0
            },
            xaxis : {
              mode : "time",
              tickLength : 10
            },

            yaxes : [{
              min : 20,
              tickLength : 5
            }],
            grid : {
              hoverable : true,
              clickable : true,
              tickColor : $chrt_border_color,
              borderWidth : 0,
              borderColor : $chrt_border_color,
            },
            tooltip : true,
            tooltipOpts : {
              content : "%s for <b>%x:00 hrs</b> was %y",
              dateFormat : "%y-%0m-%0d",
              defaultTheme : false
            },
            colors : [$chrt_main, $chrt_second],
            xaxis : {
              ticks : 15,
              tickDecimals : 2
            },
            yaxis : {
              ticks : 15,
              tickDecimals : 0
            },
          });

        }

        /* end site stats */

        /* updating chart */

        if ($('#updating-chart').length) {

          // For the demo we use generated data, but normally it would be coming from the server
          var data = [], totalPoints = 200;
          function getRandomData() {
            if (data.length > 0)
              data = data.slice(1);

            // do a random walk
            while (data.length < totalPoints) {
              var prev = data.length > 0 ? data[data.length - 1] : 50;
              var y = prev + Math.random() * 10 - 5;
              if (y < 0)
                y = 0;
              if (y > 100)
                y = 100;
              data.push(y);
            }

            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
              res.push([i, data[i]])
            return res;
          }

          // setup control widget
          var updateInterval = 1000;
          $("#updating-chart").val(updateInterval).change(function() {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
              updateInterval = +v;
              if (updateInterval < 1)
                updateInterval = 1;
              if (updateInterval > 2000)
                updateInterval = 2000;
              $(this).val("" + updateInterval);
            }
          });

          // setup plot
          var options = {
            yaxis : {
              min : 0,
              max : 100
            },
            xaxis : {
              min : 0,
              max : 100
            },
            colors : [$chrt_fourth],
            series : {
              lines : {
                lineWidth : 1,
                fill : true,
                fillColor : {
                  colors : [{
                    opacity : 0.4
                  }, {
                    opacity : 0
                  }]
                },
                steps : false

              }
            }
          };
          var plot = $.plot($("#updating-chart"), [getRandomData()], options);

          function update() {
            plot.setData([getRandomData()]);
            // since the axes don't change, we don't need to call plot.setupGrid()
            plot.draw();

            setTimeout(update, updateInterval);
          }

          update();

        }

        /*end updating chart*/

      });

      /* end flot charts */
