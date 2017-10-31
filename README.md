# WalmartTracker

A web app that queries Walmart's products, configureable to a search term, number of queries and time interval between queries. The interface includes a way to compare brand popularity over time for a given search term, and a comprehensive table outlining all products tracked. Primary technologies used are React, Rails and PostgreSQL.

## Installation

Clone this repo and navigate to the project directory. Make sure PostgreSQL is downloaded and running.

Run `bundle install` to install all gems.

To ensure all npm packages are installed, run these commands:

`npm init -y`
`npm install --save babel babel-core babel-loaderbabel-preset-es2015 babel-preset-react lodash material-ui react react-bootstrap-tablereact-dom webpack`

To start up your local server, run `rails s`. Your browser should now be able to load the application, most likely at http://localhost:3000/.

## Usage

### Walmart API Fetcher

To make custom queries, run `bundle exec rake db:seed`. You should then be prompted to enter a search term, the number of queries to be made, and the time interval between each query. Make sure your machine doesn't sleep/turn off while this console script is running!

### Interface

The top of the page has 4 inputs: startDate, endDate, searchTerm & brands. Fill these out and hit 'Submit' to load a table showing what percentages of which brands occupy products that fall within the given parameters. Percentages are calculated based on all products within parameters and also only products of given brands within parameters. Simply update any field and hit 'Submit' again to adjust results.

***(Data collected thus far falls between 10/29/2017 and 10/31/2017, and most is for the search term 'cereal'***).


The table with product images contains every product yet tracked from the Walmart API fetching script. You can sort and filter results by product name, edit the brand for an item by clicking the cell, and find the product's page through the link icon provided.

### Sample Data

A row in the Items table looks as follows:

```javascript
{
  id: 969,
  name: "General Mills Honey Nut Cheerios Gluten Free Cerea...",
  brand: "Cheerios",
  image: "https://i5.walmartimages.com/asr/ba51bda0-98d9-4fa...",
  url: "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2...",
  category: "Food/Breakfast & Cereal/Cold Cereal",
  price: 4.55,
  msrp: nil,
  reviews: "http://i2.walmartimages.com/i/CustRating/4_8.gif",
  num_of_reviews: 355,
  search_query: "cereal",
  created_at: "2017-10-29 18:42:21",
  updated_at: "2017-10-29 18:42:21",
}
```
