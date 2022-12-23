1. Use a library (request) to fetch the HTML content of the Wikipedia page.

2. Use a library (cheerio) to parse the HTML and select the table element on the page.

3. Iterate through the rows of the table and extract the values from the numeric column.

4. Use a library(chartjs) to create a graph of the values.

5. Use the a library (canvas) to render the graph as an image.

6. Save the image to a file using a library (fs).


# Run project in localhost
Requirement: NodeJS and Npm or Yarn

## Install package: `npm install`

## Run project: `npm run dev`

## Access web page with URLs:
`localhost:3500`

`localhost:3500/chart`