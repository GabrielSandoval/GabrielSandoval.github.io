function initLineCharts() {
  // set the dimensions and margins of the graph
  margin = {top: 10, right: 30, bottom: 50, left: 60},
  width = 400 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;
  lineData = [{"year":1999, "cause":"Alzheimer's disease", "rate":17.5039, "count":44536}, {"year":1999, "cause":"Cancer", "rate":201.4627, "count":549838}, {"year":1999, "cause":"CLRD", "rate":47.049, "count":124181}, {"year":1999, "cause":"Diabetes", "rate":25.5647, "count":68399}, {"year":1999, "cause":"Heart disease", "rate":256.0667, "count":725192}, {"year":1999, "cause":"Influenza and pneumonia", "rate":24.2941, "count":63730}, {"year":1999, "cause":"Kidney disease", "rate":13.0314, "count":35525}, {"year":1999, "cause":"Stroke", "rate":62.8588, "count":167366}, {"year":1999, "cause":"Suicide", "rate":11.7627, "count":29199}, {"year":1999, "cause":"Unintentional injuries", "rate":38.2941, "count":97860}, {"year":2000, "cause":"Alzheimer's disease", "rate":19.5137, "count":49558}, {"year":2000, "cause":"Cancer", "rate":200.1882, "count":553091}, {"year":2000, "cause":"CLRD", "rate":45.8118, "count":122009}, {"year":2000, "cause":"Diabetes", "rate":25.5902, "count":69301}, {"year":2000, "cause":"Heart disease", "rate":249.5922, "count":710760}, {"year":2000, "cause":"Influenza and pneumonia", "rate":23.2471, "count":65313}, {"year":2000, "cause":"Kidney disease", "rate":13.7529, "count":37251}, {"year":2000, "cause":"Stroke", "rate":61.5863, "count":167661}, {"year":2000, "cause":"Suicide", "rate":11.7078, "count":29350}, {"year":2000, "cause":"Unintentional injuries", "rate":38.4471, "count":97900}, {"year":2001, "cause":"Alzheimer's disease", "rate":20.802, "count":53852}, {"year":2001, "cause":"Cancer", "rate":197.7569, "count":553768}, {"year":2001, "cause":"CLRD", "rate":45.5098, "count":123013}, {"year":2001, "cause":"Diabetes", "rate":25.8471, "count":71372}, {"year":2001, "cause":"Heart disease", "rate":241.8706, "count":700142}, {"year":2001, "cause":"Influenza and pneumonia", "rate":21.5176, "count":62034}, {"year":2001, "cause":"Kidney disease", "rate":14.151, "count":39480}, {"year":2001, "cause":"Stroke", "rate":59.2098, "count":163538}, {"year":2001, "cause":"Suicide", "rate":12.1275, "count":30622}, {"year":2001, "cause":"Unintentional injuries", "rate":39.2529, "count":101537}, {"year":2002, "cause":"Alzheimer's disease", "rate":22.6294, "count":58866}, {"year":2002, "cause":"Cancer", "rate":195.0098, "count":557271}, {"year":2002, "cause":"CLRD", "rate":45.8157, "count":124816}, {"year":2002, "cause":"Diabetes", "rate":26.1784, "count":73249}, {"year":2002, "cause":"Heart disease", "rate":237.0255, "count":696947}, {"year":2002, "cause":"Influenza and pneumonia", "rate":22.998, "count":65681}, {"year":2002, "cause":"Kidney disease", "rate":14.3686, "count":40974}, {"year":2002, "cause":"Stroke", "rate":58.2941, "count":162672}, {"year":2002, "cause":"Suicide", "rate":12.3392, "count":31655}, {"year":2002, "cause":"Unintentional injuries", "rate":40.4235, "count":106742}, {"year":2003, "cause":"Alzheimer's disease", "rate":23.4686, "count":63457}, {"year":2003, "cause":"Cancer", "rate":191.9843, "count":556902}, {"year":2003, "cause":"CLRD", "rate":45.4333, "count":126382}, {"year":2003, "cause":"Diabetes", "rate":26.0843, "count":74219}, {"year":2003, "cause":"Heart disease", "rate":230.1941, "count":685089}, {"year":2003, "cause":"Influenza and pneumonia", "rate":22.7078, "count":65163}, {"year":2003, "cause":"Kidney disease", "rate":14.7275, "count":42453}, {"year":2003, "cause":"Stroke", "rate":55.6431, "count":157689}, {"year":2003, "cause":"Suicide", "rate":12.2157, "count":31484}, {"year":2003, "cause":"Unintentional injuries", "rate":41.1902, "count":109277}, {"year":2004, "cause":"Alzheimer's disease", "rate":23.8176, "count":65965}, {"year":2004, "cause":"Cancer", "rate":187.6804, "count":553888}, {"year":2004, "cause":"CLRD", "rate":43.2275, "count":121987}, {"year":2004, "cause":"Diabetes", "rate":25.2196, "count":73138}, {"year":2004, "cause":"Heart disease", "rate":215.502, "count":652486}, {"year":2004, "cause":"Influenza and pneumonia", "rate":19.7725, "count":59664}, {"year":2004, "cause":"Kidney disease", "rate":14.5863, "count":42480}, {"year":2004, "cause":"Stroke", "rate":51.5608, "count":150074}, {"year":2004, "cause":"Suicide", "rate":12.3725, "count":32439}, {"year":2004, "cause":"Unintentional injuries", "rate":41.498, "count":112012}, {"year":2005, "cause":"Alzheimer's disease", "rate":25.2255, "count":71599}, {"year":2005, "cause":"Cancer", "rate":186.1941, "count":559312}, {"year":2005, "cause":"CLRD", "rate":45.9765, "count":130933}, {"year":2005, "cause":"Diabetes", "rate":25.3706, "count":75119}, {"year":2005, "cause":"Heart disease", "rate":211.5255, "count":652091}, {"year":2005, "cause":"Influenza and pneumonia", "rate":20.8255, "count":63001}, {"year":2005, "cause":"Kidney disease", "rate":14.651, "count":43901}, {"year":2005, "cause":"Stroke", "rate":48.7941, "count":143579}, {"year":2005, "cause":"Suicide", "rate":12.3078, "count":32637}, {"year":2005, "cause":"Unintentional injuries", "rate":42.8314, "count":117809}, {"year":2006, "cause":"Alzheimer's disease", "rate":24.9294, "count":72432}, {"year":2006, "cause":"Cancer", "rate":183.0275, "count":559888}, {"year":2006, "cause":"CLRD", "rate":42.8824, "count":124583}, {"year":2006, "cause":"Diabetes", "rate":24.0588, "count":72449}, {"year":2006, "cause":"Heart disease", "rate":201.298, "count":631636}, {"year":2006, "cause":"Influenza and pneumonia", "rate":18.1098, "count":56326}, {"year":2006, "cause":"Kidney disease", "rate":14.898, "count":45344}, {"year":2006, "cause":"Stroke", "rate":45.4294, "count":137119}, {"year":2006, "cause":"Suicide", "rate":12.4098, "count":33300}, {"year":2006, "cause":"Unintentional injuries", "rate":43.7961, "count":121599}, {"year":2007, "cause":"Alzheimer's disease", "rate":25.3588, "count":74632}, {"year":2007, "cause":"Cancer", "rate":180.9745, "count":562875}, {"year":2007, "cause":"CLRD", "rate":43.102, "count":127924}, {"year":2007, "cause":"Diabetes", "rate":23.4765, "count":71382}, {"year":2007, "cause":"Heart disease", "rate":192.3667, "count":616067}, {"year":2007, "cause":"Influenza and pneumonia", "rate":16.7373, "count":52717}, {"year":2007, "cause":"Kidney disease", "rate":14.8608, "count":46448}, {"year":2007, "cause":"Stroke", "rate":43.898, "count":135952}, {"year":2007, "cause":"Suicide", "rate":12.6588, "count":34598}, {"year":2007, "cause":"Unintentional injuries", "rate":43.751, "count":123706}, {"year":2008, "cause":"Alzheimer's disease", "rate":26.9255, "count":82435}, {"year":2008, "cause":"Cancer", "rate":177.8608, "count":565469}, {"year":2008, "cause":"CLRD", "rate":46.9098, "count":141090}, {"year":2008, "cause":"Diabetes", "rate":22.5294, "count":70553}, {"year":2008, "cause":"Heart disease", "rate":188.5196, "count":616828}, {"year":2008, "cause":"Influenza and pneumonia", "rate":17.6627, "count":56284}, {"year":2008, "cause":"Kidney disease", "rate":15.3804, "count":48237}, {"year":2008, "cause":"Stroke", "rate":42.7314, "count":134148}, {"year":2008, "cause":"Suicide", "rate":13.1412, "count":36035}, {"year":2008, "cause":"Unintentional injuries", "rate":43.2863, "count":121902}, {"year":2009, "cause":"Alzheimer's disease", "rate":25.1549, "count":79003}, {"year":2009, "cause":"Cancer", "rate":174.5412, "count":567628}, {"year":2009, "cause":"CLRD", "rate":44.9824, "count":137353}, {"year":2009, "cause":"Diabetes", "rate":21.5471, "count":68705}, {"year":2009, "cause":"Heart disease", "rate":180.1157, "count":599413}, {"year":2009, "cause":"Influenza and pneumonia", "rate":16.4529, "count":53692}, {"year":2009, "cause":"Kidney disease", "rate":15.198, "count":48935}, {"year":2009, "cause":"Stroke", "rate":40.4706, "count":128842}, {"year":2009, "cause":"Suicide", "rate":13.149, "count":36909}, {"year":2009, "cause":"Unintentional injuries", "rate":41.1608, "count":118021}, {"year":2010, "cause":"Alzheimer's disease", "rate":26.1588, "count":83494}, {"year":2010, "cause":"Cancer", "rate":174.5471, "count":574743}, {"year":2010, "cause":"CLRD", "rate":44.351, "count":138080}, {"year":2010, "cause":"Diabetes", "rate":21.3471, "count":69071}, {"year":2010, "cause":"Heart disease", "rate":176.7804, "count":597689}, {"year":2010, "cause":"Influenza and pneumonia", "rate":15.1882, "count":50097}, {"year":2010, "cause":"Kidney disease", "rate":15.4255, "count":50476}, {"year":2010, "cause":"Stroke", "rate":39.9118, "count":129476}, {"year":2010, "cause":"Suicide", "rate":13.8235, "count":38364}, {"year":2010, "cause":"Unintentional injuries", "rate":42.1275, "count":120859}, {"year":2011, "cause":"Alzheimer's disease", "rate":25.8588, "count":84974}, {"year":2011, "cause":"Cancer", "rate":171.1176, "count":576691}, {"year":2011, "cause":"CLRD", "rate":44.8882, "count":142943}, {"year":2011, "cause":"Diabetes", "rate":22.2, "count":73831}, {"year":2011, "cause":"Heart disease", "rate":171.6294, "count":596577}, {"year":2011, "cause":"Influenza and pneumonia", "rate":15.8392, "count":53826}, {"year":2011, "cause":"Kidney disease", "rate":13.6059, "count":45591}, {"year":2011, "cause":"Stroke", "rate":38.6078, "count":128932}, {"year":2011, "cause":"Suicide", "rate":13.9706, "count":39518}, {"year":2011, "cause":"Unintentional injuries", "rate":43.3078, "count":126438}, {"year":2012, "cause":"Alzheimer's disease", "rate":24.9275, "count":83637}, {"year":2012, "cause":"Cancer", "rate":167.7902, "count":582623}, {"year":2012, "cause":"CLRD", "rate":43.5824, "count":143489}, {"year":2012, "cause":"Diabetes", "rate":21.4725, "count":73932}, {"year":2012, "cause":"Heart disease", "rate":169.6314, "count":599711}, {"year":2012, "cause":"Influenza and pneumonia", "rate":14.4588, "count":50636}, {"year":2012, "cause":"Kidney disease", "rate":13.0686, "count":45622}, {"year":2012, "cause":"Stroke", "rate":37.5686, "count":128546}, {"year":2012, "cause":"Suicide", "rate":14.4471, "count":40600}, {"year":2012, "cause":"Unintentional injuries", "rate":43.4039, "count":127792}, {"year":2013, "cause":"Alzheimer's disease", "rate":24.2412, "count":84767}, {"year":2013, "cause":"Cancer", "rate":165.2706, "count":584881}, {"year":2013, "cause":"CLRD", "rate":44.2431, "count":149205}, {"year":2013, "cause":"Diabetes", "rate":21.402, "count":75578}, {"year":2013, "cause":"Heart disease", "rate":169.0608, "count":611105}, {"year":2013, "cause":"Influenza and pneumonia", "rate":16.1157, "count":56979}, {"year":2013, "cause":"Kidney disease", "rate":13.2745, "count":47112}, {"year":2013, "cause":"Stroke", "rate":36.6471, "count":128978}, {"year":2013, "cause":"Suicide", "rate":14.4373, "count":41149}, {"year":2013, "cause":"Unintentional injuries", "rate":43.8059, "count":130557}, {"year":2014, "cause":"Alzheimer's disease", "rate":26.1373, "count":93541}, {"year":2014, "cause":"Cancer", "rate":163.8118, "count":591700}, {"year":2014, "cause":"CLRD", "rate":43.0157, "count":147101}, {"year":2014, "cause":"Diabetes", "rate":21.1843, "count":76488}, {"year":2014, "cause":"Heart disease", "rate":167.7549, "count":614348}, {"year":2014, "cause":"Influenza and pneumonia", "rate":15.4608, "count":55227}, {"year":2014, "cause":"Kidney disease", "rate":13.1588, "count":48146}, {"year":2014, "cause":"Stroke", "rate":36.7941, "count":133103}, {"year":2014, "cause":"Suicide", "rate":14.9059, "count":42826}, {"year":2014, "cause":"Unintentional injuries", "rate":45.1235, "count":135928}, {"year":2015, "cause":"Alzheimer's disease", "rate":29.951, "count":110561}, {"year":2015, "cause":"Cancer", "rate":161.3235, "count":595930}, {"year":2015, "cause":"CLRD", "rate":44.3706, "count":155041}, {"year":2015, "cause":"Diabetes", "rate":22.0843, "count":79535}, {"year":2015, "cause":"Heart disease", "rate":168.8569, "count":633842}, {"year":2015, "cause":"Influenza and pneumonia", "rate":15.8882, "count":57062}, {"year":2015, "cause":"Kidney disease", "rate":13.3314, "count":49959}, {"year":2015, "cause":"Stroke", "rate":37.498, "count":140323}, {"year":2015, "cause":"Suicide", "rate":15.4235, "count":44193}, {"year":2015, "cause":"Unintentional injuries", "rate":48.1765, "count":146571}, {"year":2016, "cause":"Alzheimer's disease", "rate":30.9255, "count":116103}, {"year":2016, "cause":"Cancer", "rate":158.151, "count":598038}, {"year":2016, "cause":"CLRD", "rate":43.1627, "count":154596}, {"year":2016, "cause":"Diabetes", "rate":21.5059, "count":80058}, {"year":2016, "cause":"Heart disease", "rate":166.9706, "count":635260}, {"year":2016, "cause":"Influenza and pneumonia", "rate":13.7294, "count":51537}, {"year":2016, "cause":"Kidney disease", "rate":13.0588, "count":50046}, {"year":2016, "cause":"Stroke", "rate":37.1627, "count":142142}, {"year":2016, "cause":"Suicide", "rate":15.5843, "count":44965}, {"year":2016, "cause":"Unintentional injuries", "rate":52.3667, "count":161374}]
  deathRatePerYear = [{"year":1999, "rate":69.7888}, {"year":2000, "rate":68.9437}, {"year":2001, "rate":67.8045}, {"year":2002, "rate":67.5082}, {"year":2003, "rate":66.3649}, {"year":2004, "rate":63.5237}, {"year":2005, "rate":63.3702}, {"year":2006, "rate":61.0839}, {"year":2007, "rate":59.7184}, {"year":2008, "rate":59.4947}, {"year":2009, "rate":57.2773}, {"year":2010, "rate":56.9661}, {"year":2011, "rate":56.1025}, {"year":2012, "rate":55.0351}, {"year":2013, "rate":54.8498}, {"year":2014, "rate":54.7347}, {"year":2015, "rate":55.6904}, {"year":2016, "rate":55.2618}]
  deathCountPerYear = [{"year":1999, "count":1905826}, {"year":2000, "count":1902194}, {"year":2001, "count":1899358}, {"year":2002, "count":1918873}, {"year":2003, "count":1912115}, {"year":2004, "count":1864133}, {"year":2005, "count":1889981}, {"year":2006, "count":1854676}, {"year":2007, "count":1846301}, {"year":2008, "count":1872981}, {"year":2009, "count":1838501}, {"year":2010, "count":1852349}, {"year":2011, "count":1869321}, {"year":2012, "count":1876588}, {"year":2013, "count":1910311}, {"year":2014, "count":1938408}, {"year":2015, "count":2013017}, {"year":2016, "count":2034119}]

  var allCauses = d3.map(lineData, function(d){return(d.cause)}).keys()
  allCauses.unshift("All")

  d3.select("#causeFilter")
  .selectAll('myOptions')
  .data(allCauses)
  .enter()
  .append('option')
  .text(function (d) { return d; }) // text showed in the menu
  .attr("value", function (d) { return d; })

  myColor = d3.scaleOrdinal()
    .domain(allCauses)
    .range(d3.schemeSet2);

  // When the button is changed, run the updateChart function
  d3.select("#causeFilter").on("change", function(d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value")
    // run the updateChart function with this selected option
    update(selectedOption)
  })

  setupDeathCountLineChart();
  setupDeathRateLineChart();
}

function setupDeathCountLineChart(){
  countSvg = d3.select("#deathcount-line-chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

  // X-axis
  dlxs = d3.scaleBand().domain(deathCountPerYear.map(function(d) { return d.year })).range([0, width])
  countSvg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("fill", "none")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "end")
    .call(d3.axisBottom(dlxs))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-1em")
    .attr("dy", "-0.7em")
    .attr("transform", "rotate(-90)");

  var maxValue = Math.max(...deathCountPerYear.map(function(d) { return d.count }));
  var minValue = Math.min(...deathCountPerYear.map(function(d) { return d.count }));
  dlys = d3.scaleLinear().domain([minValue,maxValue]).range([height, 0]);
  countSvg.append("g")
    .attr("fill", "none")
    .attr("id", "death-y-axis")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "end")
    .call(d3.axisLeft(dlys));

  countLine = countSvg.append('g')
    .append("path")
    .datum(deathCountPerYear)
    .attr("d", d3.line()
      .x(function(d) { return 15+dlxs(d.year) })
      .y(function(d) { return dlys(d.count) })
    )
    .attr("stroke", function(d){ return myColor("All") })
    .style("stroke-width", 4)
    .style("fill", "none")

  countCircles = countSvg.append("g")
      .selectAll(".dot")
      .data(deathCountPerYear)
      .enter().append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d) { return 15+dlxs(d.year) })
      .attr("cy", function(d) { return dlys(d.count) })
      .attr("r", 3)
}

function setupDeathRateLineChart(){
  rateSvg = d3.select("#deathrate-line-chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

  // X-axis
  rlxs = d3.scaleBand().domain(deathRatePerYear.map(function(d) { return d.year })).range([0, width])
  rateSvg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("fill", "none")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "end")
    .call(d3.axisBottom(rlxs))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-1em")
    .attr("dy", "-0.7em")
    .attr("transform", "rotate(-90)");

  var maxValue = Math.max(...deathRatePerYear.map(function(d) { return d.rate }));
  var minValue = Math.min(...deathRatePerYear.map(function(d) { return d.rate }));
  rlys = d3.scaleLinear().domain([minValue,maxValue]).range([height, 0]);
  rateSvg.append("g")
    .attr("id", "rate-y-axis")
    .attr("fill", "none")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "end")
    .call(d3.axisLeft(rlys));

  rateLine = rateSvg.append('g')
    .append("path")
    .datum(deathRatePerYear)
    .attr("d", d3.line()
      .x(function(d) { return 15+rlxs(d.year) })
      .y(function(d) { return rlys(d.rate) })
    )
    .attr("stroke", function(d){ return myColor("All") })
    .style("stroke-width", 4)
    .style("fill", "none")

  rateCircles = rateSvg.append("g")
      .selectAll(".dot")
      .data(deathRatePerYear)
      .enter().append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d) { return 15+rlxs(d.year) })
      .attr("cy", function(d) { return rlys(d.rate) })
      .attr("r", 3)
}

function update(selectedCause) {
  document.getElementById("deathrate-header").textContent = `Death Rate for per Year (${selectedCause})`
  document.getElementById("deathcount-header").textContent = `Death Count per Year (${selectedCause})`
  if (selectedCause == "All") {
    var rateFilter = deathRatePerYear
    var countFilter = deathCountPerYear
  }
  else {
    var rateFilter = lineData.filter(function(d){return d.cause==selectedCause})
    var countFilter = lineData.filter(function(d){return d.cause==selectedCause})
  }

  var maxValue = Math.max(...rateFilter.map(function(d) { return d.rate }));
  var minValue = Math.min(...rateFilter.map(function(d) { return d.rate }));
  rlys = d3.scaleLinear().domain([minValue,maxValue]).range([height, 0]);
  d3.select("#rate-y-axis").remove()
  rateSvg.append("g")
    .attr("fill", "none")
    .attr("id", "rate-y-axis")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "end")
    .call(d3.axisLeft(rlys));

  rateLine
    .datum(rateFilter)
    .transition()
    .duration(1000)
    .attr("d", d3.line()
    .x(function(d) { return 15+rlxs(d.year) })
    .y(function(d) { return rlys(d.rate) })
    )
    .attr("stroke", function(d){ return myColor(selectedCause) })

  rateSvg
    .selectAll("circle")
    .data(rateFilter)
    .transition()
    .duration(1000)
    .attr("cx", function(d) { return 15+rlxs(d.year) })
    .attr("cy", function(d) { return rlys(d.rate) })
    .attr("r", 3)

  var maxValue = Math.max(...countFilter.map(function(d) { return d.count }));
  var minValue = Math.min(...countFilter.map(function(d) { return d.count }));
  dlys = d3.scaleLinear().domain([minValue,maxValue]).range([height, 0]);
  d3.select("#death-y-axis").remove()
  countSvg.append("g")
    .attr("fill", "none")
    .attr("id", "death-y-axis")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "end")
    .call(d3.axisLeft(dlys));

  countLine
    .datum(countFilter)
    .transition()
    .duration(1000)
    .attr("d", d3.line()
    .x(function(d) { return 15+dlxs(d.year) })
    .y(function(d) { return dlys(d.count) })
    )
    .attr("stroke", function(d){ return myColor(selectedCause) })

  countSvg
    .selectAll("circle")
    .data(countFilter)
    .transition()
    .duration(1000)
    .attr("cx", function(d) { return 15+dlxs(d.year) })
    .attr("cy", function(d) { return dlys(d.count) })
    .attr("r", 3)
}
