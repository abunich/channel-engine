## Description

Used technologies:

- React
- SCSS
- React-query
- Material UI

I selected React-query to implement the task because I believe it's redundant to use Mobx
or Redux here. React-query is sufficient to reach the goal here, it allows us to get order data from the request's cache.

I decided to create two pages for displaying two different states of our project:

1. Overview page

It is the page where we get orders data from the API and display them for the user. Where we can see short data: Phone number, email, Order Date, Currency, and Status. Also, we have the pagination there that allows us to select the specific page. But since we have only one page with data, I decided to imitate the logic of the pagination work. If we had more than 1 page of data, we would use API requests for getting data instead of imitation.

2. Details Page

The page where we display additional data of the selected order. As we don't have a request to get a separate order, we get order data from the array of orders.

## Requires API_KEY to connect to API

You should add .env.local file in the root folder where you have to store REACT_APP_API_KEY = "your key".

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test of the Pagination component.
