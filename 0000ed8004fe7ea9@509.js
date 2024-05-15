import define1 from "./a33468b95d0b15b0@817.js";

function _1(md){return(
md`# Examination of Global Development Metrics`
)}

function _2(md){return(
md`## DATASET: 
This dataset comprises information sourced from the World Bank database. It includes two sets of data: one encompasses multiple countries and the other focuses on a single country, offering various parameters over the years from 1996 to 2021. The global development indicators covered in the dataset include aspects such as electricity access, agriculture, and manufacturing value. Additionally, the single-country dataset provides details on GDP, employment, and other relevant parameters.`
)}

function _bhutanData(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Bhutan data.csv"),{from:{table:"Bhutan data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _country_data2(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Country_data@2.csv"),{from:{table:"Country_data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _5(md){return(
md`## Line graph depicting the trends of Access to electricity (% of population) over the years from 1996 to 2016 across various countries`
)}

function _6(md){return(
md`Based on this plot depicting access to electricity, it is evident that nearly every country has experienced a favorable increase in expanding electricity access globally. Below are some outliers.

1. Bangladesh (2016): With 75.92% access to electricity, Bangladesh stands out as having relatively low electrification rates compared to other countries in that year.

2. Bhutan (2006): Bhutan's high access to electricity at 50.52% in 2006 is noteworthy, especially considering its earlier stage of economic development compared to other nations.

3. Burkina Faso (2016): In 2016, Burkina Faso had a remarkably low access to electricity at 16.57%, indicating significant challenges in providing reliable power to its population.

4. India (2016): Despite its large population, India achieved relatively high access to electricity at 89.59% in 2016, reflecting substantial progress in electrification efforts.

5. Lebanon (2016): Lebanon's near-universal access to electricity at 99.80% in 2016 is remarkable, suggesting a well-developed infrastructure in this regard compared to other countries in the dataset.

These insights highlight the diverse range of electrification levels across different countries and underscore the importance of electricity access as a fundamental driver of economic development`
)}

function _selectcountry(Inputs,country){return(
Inputs.select(country, {label: "select a country"})
)}

function _8(country_data,selectcountry,Plot)
{
 
  const filteredData = country_data.filter(entry => {
    return entry["Country Name"] === selectcountry;
  });

  
  return Plot.plot({
  
    marginLeft: 100,
   
    marks: [
      Plot.line(filteredData, {
      
        x: "Year",
        
        y: "Access to electricity (% of population)",
       
        stroke: "Country Name"
      })
    ],
    
    x: { label: "Year" },

    y: { 
      label: "Access to electricity (% of population)",
      reverse: true
    }
  });
}


function _9(md){return(
md`## Line graph depicting the trends of Agriculture, forestry, and fishing, value added (% of GDP) over the years from 1996 to 2016 across various countries`
)}

function _10(md){return(
md`Over the period spanning from 1996 to 2016, there has been a steady decline in the values associated with agriculture, fishery, and forestry, resulting in a reduced contribution to a country's GDP. This trend could be attributed to technological progressions.

1. Bhutan (2016): In 2016, Bhutan's economy was notably reliant on agriculture, forestry, and fishing, with this sector contributing approximately 15.63% to its GDP.

2. Cameroon (2007): In 2007, Cameroon's economy was heavily dependent on agriculture, forestry, and fishing, with this sector accounting for a significant portion (approximately 22.21%) of its GDP.

3. Congo, Rep. (2004): The Democratic Republic of the Congo's economy in 2004 had a substantial reliance on agriculture, forestry, and fishing, contributing about 46.05% to its GDP, indicating the sector's significance in the country's economic structure.

4. Eritrea (2000): In 2000, Eritrea's economy relied heavily on agriculture, forestry, and fishing, with this sector contributing around 21.22% to its GDP.

5. Gambia, The (2016): The Gambia's economy in 2016 was largely driven by agriculture, forestry, and fishing, with this sector contributing approximately 23.92% to its GDP.

These insights shed light on the varying degrees of dependence on agriculture, forestry, and fishing across different countries and highlight the sector's importance as a significant contributor to GDP in many nations, particularly those with agrarian economies.`
)}

function _selectcountry1(Inputs,country){return(
Inputs.select(country, {label: "select a country"})
)}

function _12(country_data,selectcountry1,Plot)
{
  
  const filteredData = country_data.filter(entry => entry["Country Name"] === selectcountry1);

 
  return Plot.plot({
    
    marginLeft: 100,
    
    marks: [
      Plot.line(filteredData, {
        
        x: "Year",
        
        y: "Agriculture, forestry, and fishing, value added (% of GDP)",
       
        stroke: "Country Name"
      })
    ],
  
    x: { label: "Year" },
    
    y: { 
      label: "Agriculture, forestry, and fishing, value added (% of GDP)",
      reverse: true
    }
  });
}


function _13(md){return(
md`# Bar graph depicting the trends of Bangladesh's Manufacturing, value added (% of GDP) over the years 1996 to 2016`
)}

function _14(md){return(
md`From the bar graph below, the data shows fluctuations in Bangladesh's manufacturing value added (% of GDP) from 1996 to 2016. While there's a general upward trend, periodic declines are observed, suggesting fluctuations in economic conditions. Despite yearly variations, the overall trajectory indicates a gradual increase in manufacturing contribution to GDP. Comparative analysis with other economic indicators or regional data could provide deeper insights into Bangladesh's manufacturing sector performance, impact of the pandemic, which reached its lowest point during this period.`
)}

function _selectcountry2(Inputs,country){return(
Inputs.select(country, {label: "select a country"})
)}

function _16(country_data,selectcountry2,Plot)
{
  const filteredData = country_data.filter(entry => entry["Country Name"] === selectcountry2);

  return Plot.plot({
    marginLeft: 100,
    marks: [
      Plot.barY(filteredData, {
        x: "Year",
        y: "Manufacturing, value added (% of GDP)",
        stroke: "Country Name",
        fill: "Country Name" // Filling bars with color based on country name
      })
    ],
    x: { label: "Year" },
    y: { 
      label: "Manufacturing, value added (% of GDP)",
      reverse: false
    },
    color: {
      legend: true // Showing legend for color representation
    }
  });
}


function _17(md){return(
md`After examining the trends in access to electricity, the contribution of agriculture, forestry, and fishing, as well as manufacturing, to the GDP of various countries, some notable outliers are below.

- **Bangladesh**: In 2016, it had a relatively low access to electricity at 75.92% of the population but a high contribution of agriculture, forestry, and fishing to GDP at 13.46%. Manufacturing's contribution was also significant at 20.35%. This suggests a reliance on traditional sectors despite electricity access not being widespread.

- **Bhutan**: In 2006, Bhutan experienced a notably high access to electricity at 50.52%, coupled with a substantial contribution from agriculture, forestry, and fishing to GDP at 18.03%. Manufacturing, however, lagged behind at 15.31%. This could indicate a focus on hydroelectricity development, a prominent sector in Bhutan.

- **Burkina Faso**: In 2016, Burkina Faso exhibited a remarkably low access to electricity at 16.57%, while the contribution of agriculture, forestry, and fishing to GDP was high at 21.71%. Manufacturing's contribution was also significant at 11.12%. This suggests significant challenges in the energy sector despite a strong reliance on traditional economic activities.

- **India**: In 2016, India had relatively high access to electricity at 89.59%, yet the contribution of agriculture, forestry, and fishing to GDP was still substantial at 16.36%. Manufacturing played a significant role as well, contributing 15.16% to the GDP. Despite progress in electrification, traditional sectors remain vital.

- **Lebanon**: In 2016, Lebanon had nearly universal access to electricity at 99.80%, but the contribution of agriculture, forestry, and fishing to GDP was minimal at 2.73%. Manufacturing contributed significantly more at 8.36%. This indicates a strong divergence from traditional economic activities toward industrialization.

Identifying these outliers sheds light on the unique economic dynamics and challenges faced by each country, emphasizing the importance of tailored development strategies.`
)}

function _18(md){return(
md`## Out performers and bottom line performers over the years across the countries with respect to all development indicators`
)}

function _radios(Inputs){return(
Inputs.radio(["Access to electricity (% of population)","Agriculture, forestry, and fishing, value added (% of GDP)","Manufacturing, value added (% of GDP)" ], {label: "Development Indicator", value: "Access to electricity (% of population)"})
)}

function _20(Plot,radios,country_data){return(
Plot.plot({
  color: {legend: true, domain: ["Bangladesh", "Bhutan", "Burkina Faso", "Brazil", "Cambodia", "Colombia", "Egypt, Arab Rep.", "Ghana", "India", "Iraq", "Iran, Islamic Rep.", "Indonesia", "Lebanon", "Mexico", "Niger", "Nigeria", "Pakistan", "Rwanda", "South Africa", "Sri Lanka","Ukraine","Yemen, Rep."]},
  y: {label: radios.split("(",1), domain: [0,110], grid: false},
  title: radios,
  marks: [Plot.ruleY([0]),Plot.lineY(country_data, {x: "Year", y: radios, k: 10, tip:true, stroke: "Country Name"})],
})
)}

function _21(md){return(
md`The line graphs above and the subsequent area graphs illustrate notable disparities in access to electricity and economic activities across different regions. African nations continue to lag behind in access to electricity, while Asian countries have made significant strides in improving this aspect.

In terms of agriculture, forestry, and fishing value, African countries dominate the top rankings, whereas Middle Eastern nations such as Iran, Iraq, and Lebanon consistently occupy lower positions. Meanwhile, Asian countries maintain a moderate performance in this sector.

The manufacturing sector reveals a stark contrast, with Asian countries consistently leading in value generation over time. Conversely, African nations consistently rank lower in manufacturing, while Latin American countries demonstrate minimal change in this regard.

To be precise, In terms of access to electricity, Bhutan consistently stands out as a top performer, with over 91% access since 2005, peaking at 99.32% in 2016. On the other hand, Burkina Faso consistently lags behind, with access to electricity ranging from only 6.9% in 1999 to 19.2% in 2014. When it comes to the contribution of agriculture, forestry, and fishing to GDP, Burkina Faso dominates, with values ranging from 21.7% to 37.6%, showcasing its reliance on these sectors. Meanwhile, Lebanon consistently reports the lowest values in this category, hovering around 2-6%. In terms of manufacturing's contribution to GDP, Bangladesh's performance is noteworthy, with steady growth from around 14% in 1996 to over 20% in recent years. Conversely, Iraq consistently reports the lowest values in this category, with manufacturing contributing less than 3% to its GDP over the years. These disparities highlight the diverse economic landscapes and development trajectories across these countries.`
)}

function _22(Plot,radios,country_data){return(
Plot.plot({
  color: {legend: true, domain: ["Bangladesh", "Bhutan", "Burkina Faso", "Brazil", "Cambodia", "Colombia", "Egypt, Arab Rep.", "Ghana", "India", "Iraq", "Iran, Islamic Rep.", "Indonesia", "Lebanon", "Mexico", "Niger", "Nigeria", "Pakistan", "Rwanda", "South Africa", "Sri Lanka","Ukraine","Yemen, Rep."]},
  y: {label: radios.split("(",1), domain: [0, 2000], grid: true},
  title: radios,
  marks: [
    Plot.ruleY([0]),
    Plot.areaY(country_data, {
      x: "Year",
      y: radios,
      stack: "auto",
      stroke: "Country Name",
      fill: "Country Name"
    })
  ],
})
)}

function _23(md){return(
md`## Bar graph illustrating the trends of all three parameters across all countries over the years 1996–2016`
)}

function _24(md){return(
md`From the below bar graph displaying three parameters across all countries, we can analyze and interpret trends in these values over time.

1. For Bangladesh, it's evident that as access to electricity improves, there's a corresponding upward trend in manufacturing value. However, there's relatively little change in the Agriculture, Forestry, and Fishing sector over the same period.

2. In the case of Nigeria, there are no significant fluctuations observed across all parameters throughout the timeline. Changes are minimal or negligible.`
)}

function _25(md){return(
md`### Select the country from dropdown`
)}

function _countryselect(Inputs,country){return(
Inputs.select(country, {label: "select a country"})
)}

function _27(country_data,countryselect,d3,html,Plot)
{
  // Filtering data based on the selected country
  const filteredData = country_data.filter(d => d["Country Name"] === countryselect);

  // Sorting the data by the "Year" column in ascending order
  filteredData.sort((a, b) => a.Year - b.Year);

  // Defining color scales for each parameter
  const colorScale1 = d3.scaleLinear()
    .domain([0, d3.max(filteredData, d => d["Access to electricity (% of population)"])])
    .range(["#FFC0CB", "#800000"]); // Maroon shade

  const colorScale2 = d3.scaleLinear()
    .domain([0, d3.max(filteredData, d => d["Agriculture, forestry, and fishing, value added (% of GDP)"])])
    .range(["lightblue", "darkblue"]);

  const colorScale3 = d3.scaleLinear()
    .domain([0, d3.max(filteredData, d => d["Manufacturing, value added (% of GDP)"])])
    .range(["lightgreen", "darkgreen"]);

  // Defining legend labels
  const legendLabels = [
    "Access to electricity (% of population)",
    "Agriculture, forestry, and fishing, value added (% of GDP)",
    "Manufacturing, value added (% of GDP)"
  ];

  // Creating legend elements with consistent colors
  const legend = html`
    <div style="position: absolute; top: 10px; right: 10px;">
      ${legendLabels.map((label, i) => html`
        <div style="display: flex; align-items: flex-end; margin-bottom: 5px;">
          <div style="width: 20px; height: 20px; background-color: ${
            i === 0 ? colorScale1(50) : i === 1 ? colorScale2(30) : colorScale3(20)
          };"></div>
          <div style="margin-left: 5px;">${label}</div>
        </div>
      `)}
    </div>
  `;

  // Returning the chart with the legend
  return html`${Plot.plot({
    marks: [
      // Bar chart for "Access to electricity (% of population)"
      Plot.barY(filteredData, {
        x: "Year",
        y: "Access to electricity (% of population)",
        stroke: "Country Name",
        fill: d => colorScale1(d["Access to electricity (% of population)"]),
        tip: true
      }),

      // Bar chart for "Agriculture, forestry, and fishing, value added (% of GDP)"
      Plot.barY(filteredData, {
        x: "Year",
        y: "Agriculture, forestry, and fishing, value added (% of GDP)",
        stroke: "Country Name",
        fill: d => colorScale2(d["Agriculture, forestry, and fishing, value added (% of GDP)"]),
        
      }),

      // Bar chart for "Manufacturing, value added (% of GDP)"
      Plot.barY(filteredData, {
        x: "Year",
        y: "Manufacturing, value added (% of GDP)",
        stroke: "Country Name",
        fill: d => colorScale3(d["Manufacturing, value added (% of GDP)"]),
        
      }),

      Plot.ruleY([0]) // Adding a rule at y=0
    ]
  })}${legend}`;
}


function _bhutanData1(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Bhutan data.csv"),{from:{table:"Bhutan data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _country_data1(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Country_data@1.csv"),{from:{table:"Country_data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _country_data3(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Country_data@3.csv"),{from:{table:"Country_data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _31(md){return(
md`## Scatter plot of Access to electricity for all countries

By hovering over the points in either the lower or higher regions of the plot, we can observe tooltips displaying the year and corresponding value. This allows us to identify the specific year when a country reaches its lowest or highest point in the plotted data.

`
)}

function _32(Plot,country_data){return(
Plot.plot({
  color: { legend: true },
  marks: [
    Plot.dot(
      country_data,
      Plot.group(
        { r: "count" },
        {
          x: "Country Code",
          y: "Access to electricity (% of population)",
          stroke: "Year",
          tip: true
        }
      )
    )
  ]
})
)}

function _33(md){return(
md`## Geomap Plotting`
)}

function _34(md){return(
md`The choropleth map illustrates the performance trends of selected countries over the timeline provided. In 1996, it is evident that many African and Asian nations faced significant challenges in providing widespread access to electricity to their populations.

However, by 2016, there has been remarkable progress across most countries, with substantial improvements in addressing these challenges. Asian countries, in particular, have made significant strides, achieving an impressive average electricity access rate of around 80%. In contrast, many African nations still have work to do to ensure electricity availability for their populations.

One standout example from the dataset is Bhutan, which experienced a remarkable transformation from a low access rate of 27% in 1996 to achieving full electricity coverage by 2016.

On the other hand, countries like Niger and Burkina Faso exhibit slower development trajectories, with modest increases in electricity access rates from 7% in 1996 to 16% in 2016.`
)}

function _year(Inputs){return(
Inputs.range([1996, 2016], { value: 1996, label: "Year", step: 1 })
)}

function _36(year,d3,country_data,mergedData,Legend)
{
  const width = 800;
  const height = 500;
  const legendWidth = 22;
  const legendHeight = 210;
  const legendX = width - 55;
  const legendY = height - 40;
  const countriesToHide = [""];
  const selectedYear = year.toString(); // Replacing with the desired year

  const projection = d3.geoEqualEarth().fitExtent([[20, 20], [width - 20, height - 20]], { type: "Sphere" });
  const path = d3.geoPath(projection);

  // Defining your color scale based on your data range
  const color = d3.scaleSequential(d3.interpolateReds); // Changed to red color scale

  // Creating a set of country names from your data
  const countriesInData = new Set(country_data.map(d => d["Country Name"]));

  const legendScale = d3.scaleLinear()
    .range([legendHeight, 0]);

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height);

  const g = svg.append("g");

  g.append("path")
    .datum({ type: "Sphere" })
    .attr("fill", "lightgray")
    .attr("stroke", "White")
    .attr("d", path);

  // Writing a function to update the map based on the selected year
  function updateMap() {
    const filteredData = country_data
      .filter(d => d.Year === selectedYear)
      .map(d => ({
        Country: d["Country Name"],
        value: d["Access to electricity (% of population)"],
      }));

    color.domain([d3.min(filteredData, d => d.value), d3.max(filteredData, d => d.value)]);
    legendScale.domain([d3.min(filteredData, d => d.value), d3.max(filteredData, d => d.value)]);

    // Adding countries to the map
    g.selectAll("path")
      .data(mergedData.features.filter(d => !countriesToHide.includes(d.id)))
      .join("path")
      .attr("d", path)
      .attr("fill", d => {
        const value = parseFloat(d.properties.value);
        return countriesInData.has(d.properties.name) ? color(value) : "lightgray";
      })
      .attr("stroke", "black")
      .attr("stroke-width", 0.5)
      .append("title")
      .text(d => {
        const value = parseFloat(d.properties.value);
        return `${d.properties.name}: Access to electricity (${selectedYear}) ${value.toFixed(3) || 0}%`;
      });
  }

  // Initial map rendering
  updateMap();

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 52)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "22px")
    .text("Access to electricity data of Countries");

  // Creating a color gradient for the legend
  const gradient = svg.append("defs").append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "100%")
    .attr("x2", "0%")
    .attr("y2", "0%")
    .attr("spreadMethod", "pad");

  // Gradient stops here

  // Creating the legend
  svg.append("g")
    .attr("transform", "translate(20,0)")
    .append(() => Legend(color, { title: d => `Access to electricity (${selectedYear}) (%)`, width: 260 }));

  // Adding legend scale
  svg.append("g")
    .attr("transform", `translate(${legendX + legendWidth + 6},${legendY})`)
    .call(d3.axisRight(legendScale).ticks(5));

  return svg.node();
}


function _37(md){return(
md`## Line graph displaying the trends of all the three parameters for all countries over time, with the year as a constant variable

The line graph below illustrates the trends of the three selected parameters across all countries over the timeline. A sharp downward point indicates the country's lowest value, while a sharp upward point represents its highest value. By sliding the slider, one can explore the trends from 1996 to 2016 comprehensively.`
)}

function _year2(Inputs){return(
Inputs.range([1996, 2016], { value: 1996, label: "Year", step: 1 })
)}

function _39(htl){return(
htl.html`html\`<div id="myChart"></div>\``
)}

function _40(htl){return(
htl.html`html\`<div id="myChart"></div>\``
)}

function _41(md){return(
md`1. Initially, in 1996, with respect to access to electricity, Burkina Faso, Cambodia, Ghana, Niger, and Rwanda were the underperforming countries. However, at the end of 2016, Cambodia made a long jump in this area. The other countries also made a significant jump accordingly.
2. With respect to agriculture, forestry, and fishing, value added the countries like Burkina Faso, Cambodia, Ghana, and Rwanda made a downward jump over the years from 1996 to 2016. However, there are no huge jumps either downwards or upwards in this area.
3. With respect to manufacturing value added (% of GDP), Iraq is the underperformer, and it remained almost the same over the period of time. Countries like Nigeria and Ukraine faced a downward trend in this area over the period of time. `
)}

function _42(md){return(
md`## Grouped Bar Chart

Displayed below is a grouped bar chart representing all selected countries and three parameters from the database. Utilizing the slider allows for the exploration of trends in electricity access, agriculture value, and manufacturing value across all countries throughout the years.

Notably, Bhutan, which initially had low electricity access in 1996, has made significant progress, achieving a remarkable 99% access rate by 2016. Conversely, countries such as Burkina Faso, Niger, and Rwanda have shown minimal change in electricity access compared to other nations over the same period.

In terms of agriculture value, Brazil, Lebanon, and Mexico have exhibited no notable changes over the two decades.

Similarly, Iraq, Yemen, and Ghana have shown little to no visible change in manufacturing value from 1996 to 2016, unlike other countries in the dataset.
`
)}

function _year3(Inputs){return(
Inputs.range([1996, 2016], { value: 1996, label: "Year", step: 1 })
)}

function _44(htl){return(
htl.html`html\`<div id="mybarChart"></div>\`
`
)}

function _45(md){return(
md`## Analysis on bhutan`
)}

function _46(md){return(
md`### Line Graph for Access to Electricity and Employment

The line graphs depicting access to electricity alongside employment in two sectors reveal that despite fluctuations in electricity access, employment opportunities in these sectors have remained relatively stable. There appears to be no significant correlation between access to electricity and employment levels, suggesting independence between the two variables.`
)}

function _47(htl){return(
htl.html`html\`<div id="3linesbhu"></div>\`
`
)}

function _48(md){return(
md`### Lets Select the mostly performed Country throughout the timeline and look into its development indicators and compare them with respect to access to electricity`
)}

function _49(md){return(
md`From the graph plot below we can see that. all the points plotted between Access to electricity and GDP can be seen on the right region. We can say that the graph is left-skewed. It can be said that with increase in the electricity access the GDP also increased.`
)}

function _timeSlider(DOM,year_bhutan){return(
DOM.range(year_bhutan[0], year_bhutan[year_bhutan.length - 1], 1)
)}

function _51(timeSlider,bhutan,d3)
{
  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 80, left: 60 };


   const selectedTime = timeSlider;
  
  const timeData = bhutan.filter(d => d["Year"] === selectedTime);

  const colorScale = d3.scaleOrdinal()
    .domain(timeData.map(d => d["GDP growth (annual %)"]))
    .range(d3.schemeTableau10);
  
  // Creating an SVG container for the chart
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height]);

  // Defining x and y scales
  const x = d3.scaleLinear()
    .domain([0, d3.max(bhutan, d => d["GDP growth (annual %)"])])
    .nice()
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(bhutan, d => d["Access to electricity (% of population)"])])
    .nice()
    .range([height - margin.bottom, margin.top]);

  // Creating circles for each data point
  const circles = svg.selectAll("circle")
    .data(bhutan)
    .enter()
    .append("circle")
    .attr("cx", d => x(d["GDP growth (annual %)"]))
    .attr("cy", d => y(d["Access to electricity (% of population)"]))
    .attr("r", 4)
    .attr("fill", "steelblue");

  // Adding x-axis
  svg.append("g")
    .call(d3.axisBottom(x).tickSize(0))
    .attr("transform", `translate(0,${height - margin.bottom})`);

  // Adding y-axis
  svg.append("g")
    .call(d3.axisLeft(y))
    .attr("transform", `translate(${margin.left},0)`);

  // Adding labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 5)
    .attr("text-anchor", "middle")
    .text("GDP growth (annual %)");

  svg.append("text")
    .attr("x", -height / 2)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Access to electricity (% of population)");


  return svg.node();
}


function _52(md){return(
md`## Area graph illustrating the GDP performance of Bhutan over the period of time`
)}

function _53(md){return(
md`The area graph illustrates the GDP performance of Bhutan, showing consistent strength over time. A notable peak is observed in 2007, while a decline can be noted around 2020, likely attributed to the global pandemic.`
)}

function _54(Plot,bhutanData){return(
Plot.plot({
  marks: [
    Plot.areaY(bhutanData, {
      x: "Year",
      y: "GDP growth (annual %)",
      fill: "#55ac3e",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

function _55(md){return(
md`## Bar graph depicting the trend of Bhutan with respect to access to electricity (% of population) over the period of time`
)}

function _56(md){return(
md`The accessibility to electricity across Bhutan has steadily increased from 1996 to 2016. Beginning at a mere 27% in 1996, it has progressively surged to a peak of 99% by 2016.`
)}

function _57(Plot,bhutan){return(
Plot.plot({
  marks: [
    Plot.barY(bhutan, {
      x: "Year",
      y: "Access to electricity (% of population)",
      fill: "#808000",
      tip: true 
    }),
    Plot.ruleY([0])
  ]
})
)}

function _58(md){return(
md`## Trend of Air Transport Passengers Carried in Bhutan Over Time`
)}

function _59(md){return(
md`The data reflects the number of air transport passengers carried in Bhutan over the years. Initially, the values remained relatively stable, with a consistent average passenger count until 2008. Subsequently, there was a significant decline, dropping by approximately 80% around 2010. Since then, Bhutan has faced challenges in maintaining a satisfactory passenger rate and has not shown signs of improvement.`
)}

function _60(Plot,bhutan){return(
Plot.plot({
  color: { legend: true },
  marks: [
    Plot.lineX(
      bhutan,
      Plot.group(
        { r: "count" },
        {
          x: "Air transport, passengers carried",
          y: "Year",
         
          stroke: "Year",
          z: null,
          tip: true
        }
      )
    )
  ]
})
)}

function _61(md){return(
md`## Density map of bhutan

Displayed below is a density map illustrating the employment rate in the industry sector from 2000 to 2020. The graph reveals a notable increase in employment rates after 2012, while a decrease is observed between 2007 and 2010. This decline could potentially be attributed to the aftermath of the global economic downturn following the 2008 recession.`
)}

function _62(Plot,bhutan){return(
Plot.plot({
  marks: [
    Plot.density(bhutan, { x: "Employment in industry (% of total employment) (modeled ILO estimate)", y: "Year", tip:true })
  ]
})
)}

function _63(md){return(
md`## GDP Growth vs. Agricultural Land

The bar graphs comparing GDP and the percentage of land used for agriculture in Bhutan indicate a consistent percentage of land allocated for agriculture over the two decades. However, the GDP growth showed fluctuations, likely influenced by various factors. Notably, in 2020, GDP plummeted to an unprecedented low of -10% due to the adverse effects of the COVID-19 pandemic.`
)}

function _64(htl){return(
htl.html`html\`<div id="bargdp"></div>\``
)}

function _65(md){return(
md`## Area Graph for Air Transport and Carbon Damage 

The area graph displays both air transport and carbon damage, allowing users to select each category by clicking on the legend located at the top right corner. A clear correlation is evident from the visuals, indicating that air transport has a direct impact on carbon damage. As air transport increases, so does the resulting CO2 damage.`
)}

function _66(htl){return(
htl.html`html\`<div id="myco2Chart"></div>\``
)}

function _67(md){return(
md`## Conclusion:

Through the comprehensive examination of global development metrics utilizing datasets sourced from the World Bank database, several significant trends and insights have been uncovered. The analysis of access to electricity across multiple countries revealed a positive overall trend, with most nations experiencing substantial improvements over the years. However, notable disparities persist, particularly in African nations, highlighting the need for continued efforts to ensure widespread electricity access.

In terms of economic activities such as agriculture, forestry, fishing, and manufacturing, the trends varied across regions and countries. While some countries demonstrated consistent growth, others experienced fluctuations influenced by factors such as technological advancements and external shocks like the COVID-19 pandemic.

The visualization of individual country data, such as that of Bhutan, provided valuable insights into specific development trajectories. Bhutan's remarkable progress in improving access to electricity, coupled with its stable GDP growth, reflects successful development efforts. However, challenges remain, as evidenced by fluctuations in air transport passengers and employment rates, highlighting the importance of ongoing monitoring and adaptation to changing circumstances.

Overall, the analysis underscores the importance of data-driven decision-making and targeted interventions in promoting sustainable development. By leveraging insights derived from global development metrics, policymakers and stakeholders can better understand the dynamics of development and implement strategies to address challenges and foster inclusive growth.`
)}

function _bhutan(FileAttachment){return(
FileAttachment("Bhutan data.csv").csv()
)}

function _country_data(FileAttachment){return(
FileAttachment("Country_data.csv").csv()
)}

function _country(country_data){return(
[... new Set(country_data.map(d => d["Country Name"]))]
)}

function _countries_json1(FileAttachment){return(
FileAttachment("Countries_json@1.json").json()
)}

function _countries_json(FileAttachment){return(
FileAttachment("Countries_json.json").json()
)}

function _year_bhutan(bhutan){return(
Array.from(new Set(bhutan.map(d => d["Year"]))).sort()
)}

function _plotly(require){return(
require("plotly.js-dist@2")
)}

function _TotalYears(country_data){return(
Array.from(new Set(country_data.map(d => d["Year"]))).sort()
)}

function _Plotly(require){return(
require('plotly.js-dist')
)}

function _world_countries(FileAttachment){return(
FileAttachment("Countries_json.json").json()
)}

function _topojson(require){return(
require('topojson-client@3')
)}

function _geojson(topojson,world_countries){return(
topojson.feature(world_countries, world_countries.objects.countries)
)}

function _all_data(country_data){return(
country_data.filter((element) => {
  return element['Country Name'];
})
)}

function _filteredData(country_data,year)
{
  
  return country_data.filter(d => d.Year === year.toString())
             .map(d => ({Country: d['Country Name'] , value: d['Access to electricity (% of population)'] }));
  
}


function _mergedData(filteredData,geojson)
{
  const map = new Map(filteredData.map(d => [d.Country, d.value]));
  for (const feature of geojson.features) {
    feature.properties.value = map.get(feature.properties.name) || 0;
  }
  return geojson;
}


function _84(year2,country_data,Plotly)
{
const year = year2.toString();
const filteredData = country_data.filter(d => d.Year === year);

// Creating traces for each category
const electricityTrace = {
  x: filteredData.map(d => d["Country Name"]),
  y: filteredData.map(d => +d["Access to electricity (% of population)"]),
  mode: "lines",
  name: "Electricity Access",
};

const agricultureTrace = {
  x: filteredData.map(d => d["Country Name"]),
  y: filteredData.map(d => +d["Agriculture, forestry, and fishing, value added (% of GDP)"]),
  mode: "lines",
  name: "Agriculture Value Added",
};

const manufacturingTrace = {
  x: filteredData.map(d => d["Country Name"]),
  y: filteredData.map(d => +d["Manufacturing, value added (% of GDP)"]),
  mode: "lines",
  name: "Manufacturing Value Added",
};

const chartData = [electricityTrace, agricultureTrace, manufacturingTrace];

// Layout options
const layout = {
  title: `Line Graph for 1996`,
  xaxis: { title: "Country" },
  yaxis: { title: "Percentage / Value" },
};

// Creating the Plotly chart
Plotly.newPlot("myChart", chartData, layout);

}


function _85(year3,country_data,Plotly)
{
// Filtering the data for the year 1996
const year = year3.toString();
const filteredData = country_data.filter(d => d.Year === year);

// Creating data arrays for each category
const electricityData = filteredData.map(d => +d["Access to electricity (% of population)"]);
const agricultureData = filteredData.map(d => +d["Agriculture, forestry, and fishing, value added (% of GDP)"]);
const manufacturingData = filteredData.map(d => +d["Manufacturing, value added (% of GDP)"]);

// Creating country labels
const countries = filteredData.map(d => d["Country Name"]);

// Creating the grouped bar chart data
const chartData = [
  {
    x: countries,
    y: electricityData,
    type: "bar",
    name: "Electricity Access",
  },
  {
    x: countries,
    y: agricultureData,
    type: "bar",
    name: "Agriculture Value Added",
  },
  {
    x: countries,
    y: manufacturingData,
    type: "bar",
    name: "Manufacturing Value Added",
  },
];

// Layout options
const layout = {
  title: `Grouped Bar Graph for 1996`,
  xaxis: { title: "Country" },
  yaxis: { title: "Percentage / Value" },
  barmode: "group",
};

// Creating the Plotly chart
Plotly.newPlot("mybarChart", chartData, layout);
}


function _86(bhutan,Plotly)
{
  // Extracting the data for the specified columns
const years = bhutan.map(d => d.Year);
const electricityData = bhutan.map(d => +d["Access to electricity (% of population)"]);
const industryEmploymentData = bhutan.map(d => +d["Employment in industry (% of total employment) (modeled ILO estimate)"]);
const agricultureEmploymentData = bhutan.map(d => +d["Employment in agriculture (% of total employment) (modeled ILO estimate)"]);

// Creating the traces for the line graph
const electricityTrace = {
  x: years,
  y: electricityData,
  mode: "lines",
  name: "Access to Electricity",
};

const industryEmploymentTrace = {
  x: years,
  y: industryEmploymentData,
  mode: "lines",
  name: "Employment in Industry",
};

const agricultureEmploymentTrace = {
  x: years,
  y: agricultureEmploymentData,
  mode: "lines",
  name: "Employment in Agriculture",
};

// Creating the data for the chart
const chartData = [electricityTrace, industryEmploymentTrace, agricultureEmploymentTrace];

// Layout options
const layout = {
  title: "Line Graph for Access to Electricity and Employment",
  xaxis: { title: "Year" },
  yaxis: { title: "Percentage / Value" },
};

// Creating the Plotly chart
Plotly.newPlot("3linesbhu", chartData, layout);

}


function _87(bhutan,Plotly)
{ // Extracting the data for the specified columns
const countries = bhutan.map(d => d["Year"]);
const gdpGrowthData = bhutan.map(d => +d["GDP growth (annual %)"]);
const agriculturalLandData = bhutan.map(d => +d["Agricultural land (% of land area)"]);

// Creating the traces for the bar graph
const gdpGrowthTrace = {
  x: countries,
  y: gdpGrowthData,
  type: "bar",
  name: "GDP Growth (%)",
  marker: {
    color: 'deepblue' // Setting the color to deepskyblue
  },
};

const agriculturalLandTrace = {
  x: countries,
  y: agriculturalLandData,
  type: "bar",
  name: "Agricultural Land (% of Land Area)",
  marker: {
    color: 'Red' // Setting the color to deepskyblue
  },
};

// Creating the data for the chart
const chartData = [gdpGrowthTrace, agriculturalLandTrace];

// Layout options
const layout = {
  title: "GDP Growth vs. Agricultural Land",
  xaxis: { title: "Country" },
  yaxis: { title: "Value" },
};

// Creating the Plotly chart
Plotly.newPlot("bargdp", chartData, layout);

}


function _88(bhutan,Plotly)
{
  // Extracting the data for the specified columns
const years = bhutan.map(d => d.Year);
const airTransportData = bhutan.map(d => +d["Air transport, passengers carried"]);
const carbonDamageData = bhutan.map(d => +d["Adjusted savings: carbon dioxide damage (% of GNI)"]);

// Creating the traces for the overlapping area graph
const trace1 = {
  x: years,
  y: airTransportData,
  fill: 'tozeroy',
  name: "Air Transport",
  type: "scatter",
  fillcolor: 'rgba(0, 128, 255, 0.5)', // Deep sky blue with 50% opacity
};

const trace2 = {
  x: years,
  y: carbonDamageData,
  fill: 'tonexty', // Overlapping area graph
  name: "Carbon Damage",
  type: "scatter",
  fillcolor: 'rgba(0, 191, 255, 0.5)', // Sky blue with 50% opacity
};

// Creating the data for the chart
const chartData = [trace1, trace2];

// Layout options
const layout = {
  title: "Overlapping Area Graph for Air Transport and Carbon Damage",
  xaxis: { title: "Year" },
  yaxis: { title: "Value" },
};

// Creating the Plotly chart
Plotly.newPlot("myco2Chart", chartData, layout);

}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Country_data.csv", {url: new URL("./files/891d236833b68f3d5c9f7f8f7f442f148ada567a805755903b70233fa28d944a2fd292f01fa5b927993943426ea5ce1eaf6b6eb9f740562548cefed56eda7251.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Bhutan data.csv", {url: new URL("./files/fcf6e18037496a4cc4ff512f42b70748b7e8db7675c95db0218378b9584bdd53f7cdfcd30ea081133be0b1114fea90abadf24120493ad1534aed656ae2416e4c.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Country_data@2.csv", {url: new URL("./files/891d236833b68f3d5c9f7f8f7f442f148ada567a805755903b70233fa28d944a2fd292f01fa5b927993943426ea5ce1eaf6b6eb9f740562548cefed56eda7251.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Country_data@3.csv", {url: new URL("./files/891d236833b68f3d5c9f7f8f7f442f148ada567a805755903b70233fa28d944a2fd292f01fa5b927993943426ea5ce1eaf6b6eb9f740562548cefed56eda7251.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Countries_json@1.json", {url: new URL("./files/d9687523b1cba754db69a93eac9ffe9055cd9f298d8bbf757a2cf06e2690f961dbcc701a92b1da3fc8b25d7ce9dafed5502e77894460a7236215a8970af27138.json", import.meta.url), mimeType: "application/json", toString}],
    ["Country_data@1.csv", {url: new URL("./files/891d236833b68f3d5c9f7f8f7f442f148ada567a805755903b70233fa28d944a2fd292f01fa5b927993943426ea5ce1eaf6b6eb9f740562548cefed56eda7251.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Countries_json.json", {url: new URL("./files/d9687523b1cba754db69a93eac9ffe9055cd9f298d8bbf757a2cf06e2690f961dbcc701a92b1da3fc8b25d7ce9dafed5502e77894460a7236215a8970af27138.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("bhutanData")).define("bhutanData", ["__query","FileAttachment","invalidation"], _bhutanData);
  main.variable(observer("country_data2")).define("country_data2", ["__query","FileAttachment","invalidation"], _country_data2);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("viewof selectcountry")).define("viewof selectcountry", ["Inputs","country"], _selectcountry);
  main.variable(observer("selectcountry")).define("selectcountry", ["Generators", "viewof selectcountry"], (G, _) => G.input(_));
  main.variable(observer()).define(["country_data","selectcountry","Plot"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer("viewof selectcountry1")).define("viewof selectcountry1", ["Inputs","country"], _selectcountry1);
  main.variable(observer("selectcountry1")).define("selectcountry1", ["Generators", "viewof selectcountry1"], (G, _) => G.input(_));
  main.variable(observer()).define(["country_data","selectcountry1","Plot"], _12);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer("viewof selectcountry2")).define("viewof selectcountry2", ["Inputs","country"], _selectcountry2);
  main.variable(observer("selectcountry2")).define("selectcountry2", ["Generators", "viewof selectcountry2"], (G, _) => G.input(_));
  main.variable(observer()).define(["country_data","selectcountry2","Plot"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer("viewof radios")).define("viewof radios", ["Inputs"], _radios);
  main.variable(observer("radios")).define("radios", ["Generators", "viewof radios"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","radios","country_data"], _20);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer()).define(["Plot","radios","country_data"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer("viewof countryselect")).define("viewof countryselect", ["Inputs","country"], _countryselect);
  main.variable(observer("countryselect")).define("countryselect", ["Generators", "viewof countryselect"], (G, _) => G.input(_));
  main.variable(observer()).define(["country_data","countryselect","d3","html","Plot"], _27);
  main.variable(observer("bhutanData1")).define("bhutanData1", ["__query","FileAttachment","invalidation"], _bhutanData1);
  main.variable(observer("country_data1")).define("country_data1", ["__query","FileAttachment","invalidation"], _country_data1);
  main.variable(observer("country_data3")).define("country_data3", ["__query","FileAttachment","invalidation"], _country_data3);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer()).define(["Plot","country_data"], _32);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("viewof year")).define("viewof year", ["Inputs"], _year);
  main.variable(observer("year")).define("year", ["Generators", "viewof year"], (G, _) => G.input(_));
  main.variable(observer()).define(["year","d3","country_data","mergedData","Legend"], _36);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer("viewof year2")).define("viewof year2", ["Inputs"], _year2);
  main.variable(observer("year2")).define("year2", ["Generators", "viewof year2"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], _39);
  main.variable(observer()).define(["htl"], _40);
  main.variable(observer()).define(["md"], _41);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("viewof year3")).define("viewof year3", ["Inputs"], _year3);
  main.variable(observer("year3")).define("year3", ["Generators", "viewof year3"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], _44);
  main.variable(observer()).define(["md"], _45);
  main.variable(observer()).define(["md"], _46);
  main.variable(observer()).define(["htl"], _47);
  main.variable(observer()).define(["md"], _48);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer("viewof timeSlider")).define("viewof timeSlider", ["DOM","year_bhutan"], _timeSlider);
  main.variable(observer("timeSlider")).define("timeSlider", ["Generators", "viewof timeSlider"], (G, _) => G.input(_));
  main.variable(observer()).define(["timeSlider","bhutan","d3"], _51);
  main.variable(observer()).define(["md"], _52);
  main.variable(observer()).define(["md"], _53);
  main.variable(observer()).define(["Plot","bhutanData"], _54);
  main.variable(observer()).define(["md"], _55);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer()).define(["Plot","bhutan"], _57);
  main.variable(observer()).define(["md"], _58);
  main.variable(observer()).define(["md"], _59);
  main.variable(observer()).define(["Plot","bhutan"], _60);
  main.variable(observer()).define(["md"], _61);
  main.variable(observer()).define(["Plot","bhutan"], _62);
  main.variable(observer()).define(["md"], _63);
  main.variable(observer()).define(["htl"], _64);
  main.variable(observer()).define(["md"], _65);
  main.variable(observer()).define(["htl"], _66);
  main.variable(observer()).define(["md"], _67);
  main.variable(observer("bhutan")).define("bhutan", ["FileAttachment"], _bhutan);
  main.variable(observer("country_data")).define("country_data", ["FileAttachment"], _country_data);
  main.variable(observer("country")).define("country", ["country_data"], _country);
  main.variable(observer("countries_json1")).define("countries_json1", ["FileAttachment"], _countries_json1);
  main.variable(observer("countries_json")).define("countries_json", ["FileAttachment"], _countries_json);
  main.variable(observer("year_bhutan")).define("year_bhutan", ["bhutan"], _year_bhutan);
  main.variable(observer("plotly")).define("plotly", ["require"], _plotly);
  main.variable(observer("TotalYears")).define("TotalYears", ["country_data"], _TotalYears);
  main.variable(observer("Plotly")).define("Plotly", ["require"], _Plotly);
  main.variable(observer("world_countries")).define("world_countries", ["FileAttachment"], _world_countries);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("geojson")).define("geojson", ["topojson","world_countries"], _geojson);
  const child1 = runtime.module(define1);
  main.import("Legend", child1);
  main.variable(observer("all_data")).define("all_data", ["country_data"], _all_data);
  main.variable(observer("filteredData")).define("filteredData", ["country_data","year"], _filteredData);
  main.variable(observer("mergedData")).define("mergedData", ["filteredData","geojson"], _mergedData);
  main.variable(observer()).define(["year2","country_data","Plotly"], _84);
  main.variable(observer()).define(["year3","country_data","Plotly"], _85);
  main.variable(observer()).define(["bhutan","Plotly"], _86);
  main.variable(observer()).define(["bhutan","Plotly"], _87);
  main.variable(observer()).define(["bhutan","Plotly"], _88);
  return main;
}
