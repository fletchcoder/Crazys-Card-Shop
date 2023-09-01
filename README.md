# Crazy's Card Shop 

Crazy's Card Shop is an online retailer that imitates the functionality of an online store. The project was made using NextJS 13 via create-next-app, and it allows users to go through an assortment of card packs from the most popular trading card games out there: Magic The Gathering, Yu-Gi-Oh!, and the Pokemon TCG. Each game has 8 different packs to choose from, and each pack showcases 5 cards that they contain on their individual product pages. When the user navigates to a product page, they can adjust the quantity of the desired item and add it to a cart that will save users items even on page exit or reload. The navbar at the top of each page will use the Link component from NextJS to create client side navigation across the entire site. Each image on the will also use the Image component from NextJS for lazy loading, except for the larger images on the home page and product pages that have the priority prop.

## Built With 
  * CSS
  * JavaScript
  * React
  * NextJS
  * Redux Toolkit
  * Redux Persist

## Home Page 
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/8dd00427-7aca-44dc-ac00-f3e44d7d664a)
The home page has a news section at the top that is similar to many shops and it discusses the new Yu-Gi-Oh! packs that have been added. It has an image carousel that cycles through all 8 of the Yu-Gi-Oh! packs using React's useEffect and useState hooks to cycle the image and update the image source. Each image will contain a NextJS Link component that will take the user to the product's individual store page. Beneath the top news section is the "Other Collections" section, which is a selection of other packs on the site that also have Link components that the user can use to go to those product pages.

## Collection Pages 
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/0d068bbd-bade-4195-a456-0729a9a63fc2)
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/5b5e2294-4b54-4a16-8d8e-313a5a380d03)
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/4c4dc2fd-24a8-4975-9053-92dee6b09640)
Each category has a collection page that showcases all the store products for that particular category. Upon hovering over one of the products, the user will trigger a CSS hover effect that will cause other cards in the pack to fan out from underneath the face card. Clicking any of the links on the products will redirect to an individual product page. This is achieved by using dynamic routing in NextJS. If the route matches a "product" property in a set array of JSON objects, then it will generate the product page. Otherwise, it will throw a 404 error.

## Product Pages 
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/3f670313-b371-451a-87f8-35f6bc82f0b6)
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/5dcaa311-dcc6-4b3c-9441-1915c5bca427)
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/35b1058b-5e78-4d36-8e27-bd0890cc3a15)
The product pages have several features implemented on them. Each page has an image gallery with images that correspond to the product's own JSON object. The gallery uses useState to manipulate the src prop of the large Image component. The hook is also used to control whether the images on the left are active or not when the user clicks them to put them on the larger display. On the right side of each page, the product's name and description are displayed. Beneath the description is a stateful value that respresents the quantity to add to the cart, along with the item's price. The quantity can be adjusted with the + and - buttons, although a minimum value of 1 and a maximum value of 99 may be added at once. When the "ADD TO CART" button is clicked, the stateful value is assigned to an exported let value that is then passed to the cart page and added to the global state with Redux Toolkit reducers. The pink bubble next to the cart navbar link will also reflect the total quantity of items that have been added to the cart by accessing the state.

## The Cart
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/cc7c595b-f4f1-470e-a589-72510b54047e)
The global state has an array in it called "items" that will start as an empty array. Each time an item is added to the cart, it becomes a new index of the array. If the item was already in the cart, then the quantity of the item in the cart will simply be updated instead. For each item in the cart, the product ID, product main image, product name, quantity added, price, and total price will be displayed by mapping through all the items in the "items" array. Clicking the "REMOVE" button next to each item in the cart will cause the state to filter out the item, which therefore removes it from the cart and from the state. The "CLEAR CART" button will set the state back to the default empty array. Redux Persist's persistReducer and persistStore functions will ensure that all of the reducers in the configured store are made into a constant global state, so the cart will be the same when a user leaves and comes back.



 
