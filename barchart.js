function setupBarChart(){
  margin = {top: 10, right: 30, bottom: 120, left: 60}
  width = 500 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

  barSvg = d3.select("#death-bar-chart")
  .append("svg")
  .attr("id", "barchart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

  var xdomain = [
    "Alzheimer's disease",
    "Cancer",
    "CLRD",
    "Diabetes",
    "Heart disease",
    "Influenza and pneumonia",
    "Kidney disease",
    "Stroke",
    "Suicide",
    "Unintentional injuries"
  ]
  var bxs = d3.scaleBand().domain(xdomain).range([0, width])
  var deathByCauseByYear = [{"1999":44536.0, "2000":94094.0, "2001":147946.0, "2002":206812.0, "2003":270269.0, "2004":336234.0, "2005":407833.0, "2006":480265.0, "2007":554897.0, "2008":637332.0, "2009":716335.0, "2010":799829.0, "2011":884803.0, "2012":968440.0, "2013":1053207.0, "2014":1146748.0, "2015":1257309.0, "2016":1373412.0}, {"1999":549838.0, "2000":1102929.0, "2001":1656697.0, "2002":2213968.0, "2003":2770870.0, "2004":3324758.0, "2005":3884070.0, "2006":4443958.0, "2007":5006833.0, "2008":5572302.0, "2009":6139930.0, "2010":6714673.0, "2011":7291364.0, "2012":7873987.0, "2013":8458868.0, "2014":9050568.0, "2015":9646498.0, "2016":10244536.0}, {"1999":124181.0, "2000":246190.0, "2001":369203.0, "2002":494019.0, "2003":620401.0, "2004":742388.0, "2005":873321.0, "2006":997904.0, "2007":1125828.0, "2008":1266918.0, "2009":1404271.0, "2010":1542351.0, "2011":1685294.0, "2012":1828783.0, "2013":1977988.0, "2014":2125089.0, "2015":2280130.0, "2016":2434726.0}, {"1999":68399.0, "2000":137700.0, "2001":209072.0, "2002":282321.0, "2003":356540.0, "2004":429678.0, "2005":504797.0, "2006":577246.0, "2007":648628.0, "2008":719181.0, "2009":787886.0, "2010":856957.0, "2011":930788.0, "2012":1004720.0, "2013":1080298.0, "2014":1156786.0, "2015":1236321.0, "2016":1316379.0}, {"1999":725192.0, "2000":1435952.0, "2001":2136094.0, "2002":2833041.0, "2003":3518130.0, "2004":4170616.0, "2005":4822707.0, "2006":5454343.0, "2007":6070410.0, "2008":6687238.0, "2009":7286651.0, "2010":7884340.0, "2011":8480917.0, "2012":9080628.0, "2013":9691733.0, "2014":10306081.0, "2015":10939923.0, "2016":11575183.0}, {"1999":63730.0, "2000":129043.0, "2001":191077.0, "2002":256758.0, "2003":321921.0, "2004":381585.0, "2005":444586.0, "2006":500912.0, "2007":553629.0, "2008":609913.0, "2009":663605.0, "2010":713702.0, "2011":767528.0, "2012":818164.0, "2013":875143.0, "2014":930370.0, "2015":987432.0, "2016":1038969.0}, {"1999":35525.0, "2000":72776.0, "2001":112256.0, "2002":153230.0, "2003":195683.0, "2004":238163.0, "2005":282064.0, "2006":327408.0, "2007":373856.0, "2008":422093.0, "2009":471028.0, "2010":521504.0, "2011":567095.0, "2012":612717.0, "2013":659829.0, "2014":707975.0, "2015":757934.0, "2016":807980.0}, {"1999":167366.0, "2000":335027.0, "2001":498565.0, "2002":661237.0, "2003":818926.0, "2004":969000.0, "2005":1112579.0, "2006":1249698.0, "2007":1385650.0, "2008":1519798.0, "2009":1648640.0, "2010":1778116.0, "2011":1907048.0, "2012":2035594.0, "2013":2164572.0, "2014":2297675.0, "2015":2437998.0, "2016":2580140.0}, {"1999":29199.0, "2000":58549.0, "2001":89171.0, "2002":120826.0, "2003":152310.0, "2004":184749.0, "2005":217386.0, "2006":250686.0, "2007":285284.0, "2008":321319.0, "2009":358228.0, "2010":396592.0, "2011":436110.0, "2012":476710.0, "2013":517859.0, "2014":560685.0, "2015":604878.0, "2016":649843.0}, {"1999":97860.0, "2000":195760.0, "2001":297297.0, "2002":404039.0, "2003":513316.0, "2004":625328.0, "2005":743137.0, "2006":864736.0, "2007":988442.0, "2008":1110344.0, "2009":1228365.0, "2010":1349224.0, "2011":1475662.0, "2012":1603454.0, "2013":1734011.0, "2014":1869939.0, "2015":2016510.0, "2016":2177884.0}]
  var maxYear = Math.max(...deathByCauseByYear.map(function(d) { return d[2016] }));
  var bys = d3.scaleLinear().domain([0,maxYear]).range([height, 0])

  barSvg.
      append("g").
      attr("id", "y-axis").
      attr("transform", `translate(0,0)`).
      attr("fill", "none").
      attr("font-size", 10).
      attr("font-family", "sans-serif").
      attr("text-anchor", "end").
      call(d3.axisLeft(bys));

  var barchart = d3.select("svg#barchart").
    append("g").
    attr("transform", `translate(${margin.left},${margin.top})`).
    selectAll("rect").
    data(deathByCauseByYear).
    enter().
    append("rect").
    attr("x", function(d,i) {return i*bxs(xdomain[1]);}).
    attr("width", function(d, i) { return bxs.bandwidth()}).
    attr("y", function(d,i) { return bys(0);}).
    attr("height", function(d, i){ return 0;}).
    style("fill", "lightblue").
    style("stroke", "black")

  var years = d3.range(1999, 2017);
  years.forEach(function(year) {
    barchart = barchart.
      transition().duration(500).ease(d3.easeExp).
      attr("y", function(d,i) { return bys(d[year]);}).
      attr("height", function(d, i){ return height - bys(d[year]);})

    barchart.end().then(function(){
      document.getElementById("barchart-header").textContent = `Total deaths in US by Cause (1998 - ${year})`
      d3.select("svg#barchart").
        append("g").
        attr("id", "y-axis").
        attr("transform", `translate(0,${margin.top})`).
        attr("fill", "none").
        attr("font-size", 10).
        attr("font-family", "sans-serif").
        attr("text-anchor", "end").
        call(d3.axisLeft(bys));

      if(year == 2016) {
        document.getElementById("barReset").disabled = false
      }
    })
  });

  barSvg.
    append("g").
    attr("transform", `translate(0,${height})`).
    attr("fill", "none").
    attr("font-size", 10).
    attr("font-family", "sans-serif").
    attr("text-anchor", "end").
    call(d3.axisBottom(bxs)).
    selectAll("text").
    style("text-anchor", "end").
    attr("dx", "-.8em").
    attr("dy", ".15em").
    attr("transform", "rotate(-90)")
}
