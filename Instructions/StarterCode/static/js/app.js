function plotlystart() {
    var plotlyBody = d3.select("#selDataset")
    d3.json("samples.json").then((samplesName) => {
        samplesName.names.forEach((name)=> {
            plotlyBody.append("option").text(name) 
        })
        optionChanged(samplesName.names[0])

    })
 }

plotlystart();
// create demographic data
function metadataLoading(userID) {
    
    d3.json("samples.json").then((data) => {
        
        var infofiltered = data.metadata.filter(person => person.id == userID)
        var firstID = infofiltered[0] 
        console.log(firstID);
        var metadataBody = d3.select("#sample-metadata"); 
        metadataBody.html("")
        Object.entries(firstID).forEach(function([key,value]) {
            var metaBody =  metadataBody.append("p")
            metaBody.text(`${key} ${value}`) 
        });
// // Creating charts
// d3.json("samples.json").then((sampleData) => {
//     var samples = sampleData.samples
//     console.log(samples)

})
};

function optionChanged(userID){
    metadataLoading(userID)
};



// Creating charts
// var drawChart = function(xData, yData, hoverText, metaData) {
//     var mdPanel = d3.select("#sample-metadata");
//     mdPanel.html("");

    // Object.entries(metaData).forEach(([key, value]) => {
    //     mdPanel.append("p").text(`${key}: ${value}`);
    // });
  
    // var trace = {
    //     x: xData,
    //     y: yData,
    //     text: hoverText,
    //     type: 'bar',
    //     orientation: 'h'
    // };
  
    // var data = [trace];
  
    // Plotly.newPlot('bar', data);
  
    // var trace2 = {
    //     x: xData,
    //     y: yData,
    //     text: hoverText,
    //     mode: 'markers',
    //     marker: {
    //         size: yData,
    //         color: xData
    //     }
    // }};
