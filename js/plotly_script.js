
var x_range = (x_coord.textContent>10)?x_coord.textContent*1.5:10;
var y_range = 10;


TESTER = document.getElementById('tester');

var layout = {
    showlegend: false,
    xaxis: {
      title: 'X',
      range: [-x_range, x_range],
      dtick:1,
      tickangle: 0, 
      zeroline: true,   
      zerolinewidth: 1,
      zerolinecolor: 'black',
    },
        yaxis: {
        title: 'Y',
      zeroline: true,
      range: [-y_range, y_range],
      dtick:1,      
      zerolinewidth: 1,
      zerolinecolor: 'black',
    }
    
  };
	Plotly.newPlot( TESTER, [{
	x: [x_coord.textContent],
	y: [y_coord.value]}], layout );

  const reloadPlot = () =>{

  setXYRange(x_coord.textContent,y_coord.value);

  Plotly.react(TESTER, [{
    x: [x_coord.textContent],
    y: [y_coord.value	]}], layout);
}

document.getElementById("x").addEventListener('change', reloadPlot);
document.getElementById("y").addEventListener('change', reloadPlot);


  const setXYRange = (x,y) =>{
    if (x > x_range || x < -x_range ){
      x_range = x*1.5;
      layout = {
        showlegend: false,
        xaxis: {
          title: 'X',
          range: [-x_range, x_range],
          dtick:1,
          tickangle: 0, 
          zeroline: true,   
          zerolinewidth: 1,
          zerolinecolor: 'black',
        },
            yaxis: {
            title: 'Y',
          zeroline: true,
          range: [-y_range, y_range],
          dtick:1,      
          zerolinewidth: 1,
          zerolinecolor: 'black',
        }
      };      
    } else if ((x<10 && x > 0 )||(x < 0 && x > -10)){
      x_range = 10;
      layout = {
        showlegend: false,
        xaxis: {
          title: 'X',
          range: [-x_range, x_range],
          dtick:1,
          tickangle: 0, 
          zeroline: true,   
          zerolinewidth: 1,
          zerolinecolor: 'black',
        },
            yaxis: {
            title: 'Y',
          zeroline: true,
          range: [-y_range, y_range],
          dtick:1,      
          zerolinewidth: 1,
          zerolinecolor: 'black',
        }
      }; 
    }

    if (y > y_range || y < -y_range ){
      y_range = y*1.5;
      layout = {
        showlegend: false,
        xaxis: {
          title: 'X',
          range: [-x_range, x_range],
          dtick:1,
          tickangle: 0, 
          zeroline: true,   
          zerolinewidth: 1,
          zerolinecolor: 'black',
        },
            yaxis: {
            title: 'Y',
          zeroline: true,
          range: [-y_range, y_range],
          dtick:1,      
          zerolinewidth: 1,
          zerolinecolor: 'black',
        }
      };      
    } else if ((y<10 && y > 0 )||(y < 0 && y > -10)){
      y_range = 10;
      layout = {
        showlegend: false,
        xaxis: {
          title: 'X',
          range: [-x_range, x_range],
          dtick:1,
          tickangle: 0, 
          zeroline: true,   
          zerolinewidth: 1,
          zerolinecolor: 'black',
        },
            yaxis: {
            title: 'Y',
          zeroline: true,
          range: [-y_range, y_range],
          dtick:1,      
          zerolinewidth: 1,
          zerolinecolor: 'black',
        }
      }; 
    }

    
  }


