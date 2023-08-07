# Chef du Jour
Chef du Jour aims to make cooking easier by making it easier to find recipes based on their ingredients. A user would enter the ingredients they have, and Chef du Jour would tell them what recipes they could make based on their ingredients

## MVP
The MVP of Chef du Jour will allow a user to:
* Sign Up
* Sign In
* Search for ingredients
* Add ingredient to Pantry
* Remove ingredient from Pantry
* Auto-search for recipes that include their ingredients
* Search for a recipe and add any ingredients you don't have onto your Shopping List 
* Add recipes into your cookbook

## User Experience
User logs in and is taken to their <b>Pantry</b> screen



## Flows
### Sign Up
This is where a user signs up. Email, name and password are required

### Sign In
This is where a user signs in with an email and password, and a session is created

### Sign Out
This is where a user signs out and the session is destroyed

### Manage Pantry
This is where the user can view the list of ingredients they have in their pantry
The user can look up ingredients to add to their pantry and delete existing entries from their pantry
The user can search for recipes that include the ingredients they have in their pantry
They can also search for any recipe and automatically add the ingredients they don't have to a shopping list

### Find Recipe
This is where a user searches for recipes

### View Recipe
This is where a user views recipes

## Architecture
Frontend: react

Backend: graphql

Database: ?

# Future Features
##  Tagging 
Ingredients and meals can be tagged, which makes them searchable by tag. For example, "Macaroni & Cheese" could be tagged with the following: <i>Vegetarian</i>, <i>Side Dish</i>. Whereas a steak recipe may be tagged as such: <i>Protein</i>, <i>Keto</i>, <i>Main Dish</i>. You would be able top search by these tags and even generate random meals based on these tags and/or your stored ingredients

## Social
Users can connect and follow other users. They then have access to a feed focused around 