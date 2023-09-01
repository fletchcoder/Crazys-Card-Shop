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
The home page has a news section at the top that is similar to many shops and it discusses the new Yu-Gi-Oh! packs that have been added. It has an image carousel that cycles through all 8 of the Yu-Gi-Oh! packs using React's useEffect and useState hooks to cycle the image and change the image source respectively. Each image will contain a NextJS Link component that will take the user to the product's individual store page. Beneath the top news section is the "Other Collections" section, which is a selection of other packs on the site that also have Link components that the user to those product pages.

## Collection Pages 
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/0d068bbd-bade-4195-a456-0729a9a63fc2)
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/5b5e2294-4b54-4a16-8d8e-313a5a380d03)
![image](https://github.com/fletchcoder/Crazys-Card-Shop/assets/131314453/4c4dc2fd-24a8-4975-9053-92dee6b09640)





 
