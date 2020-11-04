function plotlystart() {
    var plotlyBody = d3.select("#selDataset")
    d3.json("samples.json").then((samplesName) => {
        samplesName.names.forEach((name)=> {
            plotlyBody.append("option").text(name) 
        })
        optionChanged(samplesName.names[0])

    })
 }

plotlystart()
// create demographic data
function metadataLoading(userID) {
    
    d3.json("samples.json").then((metaData) => {
        var metadataBody = d3.select("#sample-metadata"); 
        var infofiltered = metaData.metadata.filter(person => person.id === userID)
        var firstID = infofiltered[0] 
        console.log
        
        Object.entries(firstID).forEach(([key,value])=> {
            metadataBody.append("p").text(`${key} ${value}`) 
        })
})
}
function optionChanged(userID){
    metadataLoading(userID)
};
