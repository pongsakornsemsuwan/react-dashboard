import React, { Component } from 'react';
import { render } from 'react-dom';

class PieChart extends Component {
	constructor (props, context) {
		super(props, context);
	}

	render () {
		return (
			<div className="col-lg-5 col-md-5">
				<div className="box box-danger">
					<div className="box-header with-border">
						<h3 className="box-title">Donut Chart</h3>

						<div className="box-tools pull-right">
							<button type="button"
								className="btn btn-box-tool"
								data-widget="collapse">
								<i className="fa fa-minus"></i>
							</button>
							<button type="button"
								className="btn btn-box-tool"
								data-widget="remove">
								<i className="fa fa-times"></i>
							</button>
						</div>
					</div>
					<div className="box-body">
						<canvas id="pieChart" style={{height: '250px'}}>
						</canvas>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount () {
		//-------------
		//- PIE CHART -
		//-------------
		// TODO: GOlf Get context with AXIOS react
		const pieChartCanvas = $("#pieChart").get(0).getContext("2d");
		const pieChart = new Chart(pieChartCanvas);
		const PieData = [
			{
				value: 700,
				color: "#f56954",
				highlight: "#f56954",
				label: "Chrome"
			},
			{
				value: 500,
				color: "#00a65a",
				highlight: "#00a65a",
				label: "IE"
			},
			{
				value: 400,
				color: "#f39c12",
				highlight: "#f39c12",
				label: "FireFox"
			},
			{
				value: 600,
				color: "#00c0ef",
				highlight: "#00c0ef",
				label: "Safari"
			},
			{
				value: 300,
				color: "#3c8dbc",
				highlight: "#3c8dbc",
				label: "Opera"
			},
			{
				value: 100,
				color: "#d2d6de",
				highlight: "#d2d6de",
				label: "Navigator"
			}
		];

		const pieOptions = {
			//Boolean - Whether we should show a stroke on each segment
			segmentShowStroke: true,
			//String - The colour of each segment stroke
			segmentStrokeColor: "#fff",
			//Number - The width of each segment stroke
			segmentStrokeWidth: 2,
			//Number - The percentage of the chart that we cut out of the middle
			percentageInnerCutout: 50, // This is 0 for Pie charts
			//Number - Amount of animation steps
			animationSteps: 100,
			//String - Animation easing effect
			animationEasing: "easeOutBounce",
			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate: true,
			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale: false,
			//Boolean - whether to make the chart responsive to window resizing
			responsive: true,
			// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			maintainAspectRatio: true,
			//String - A legend template
			legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
		};

		//Create pie or douhnut chart
		// You can switch between pie and douhnut using the method below.
		pieChart.Doughnut(PieData, pieOptions);
	}
}

export default PieChart;
