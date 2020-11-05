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
// // Creating bar charts

d3.json("samples.json").then((sampleData) => {
    var samples = sampleData.samples
    console.log(samples)
    //Filtering sample ID
var fSample = samples.filter(ID =>ID.id == userID)
var sample1 = fSample[0]
var xData = sample1.sample_values.slice(0,10).reverse()
var yData = sample1.otu_ids.map(ID =>`Otuid ${ID}`).slice(0,10).reverse()
var hoverText = sample1.otu_labels.slice(0,10).reverse()


 var trace = {
        x: xData,
        y: yData,
        text: hoverText,
        type: 'bar',
        orientation: 'h'
    };
    var barlayout ={
        title:{text:"OTU Ids"},
        xaxis:{title:"Infection Values"},
        margin : {
            l:-300, r:100
        } 
    }
    var data = [trace];
  
    Plotly.newPlot('bar', data);
console.log(sample1.otu_ids)
    // })
//creating bubble chart
var trace2 = {
        x: sample1.otu_ids,
        y: sample1.sample_values,
        text: sample1.otu_labels,
        mode: 'markers',
        marker: {
            size: sample1.sample_values,
            color: sample1.otu_ids
        }
    };
    //creating layout
    var bbllayout ={
        title:{text:"Sample vs OTU Ids"},
        xaxis:{title:"Infection Values"},
        yaxis:{title:"Sample Values"},
        height: 650, width:1200 
    }
    var data2 = [trace2];
    Plotly.newPlot('bubble',data2,bbllayout);
    })
})};

function optionChanged(userID){
    metadataLoading(userID)
};