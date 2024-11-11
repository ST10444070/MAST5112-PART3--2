CHANGE LOG 
In the module, MAST5112, it is evident that one must implement any feedback provided by the lecture in Part 2. The following proposes to validate the implentations.

In part 2 of the POE, I had included a WelcomePage, MenuPage, MenuItemsPage,coursePage and AveragePricePage. Due to the mark allocation and feedback of Part 2,i realised that many things in the code did not correspond with one another and there were errors.
This had resulted to one changing the implentation of part 2 afresh so that there is an alignment between the codes.The following is the list of the changes:
- i changed the pages from Welcomepage, MenuPage, MenuItemPage, CoursePage and AveragePricePage to App.tsx, HomeScreen.tsx, AddMenuItemsScreen.tsx, FilterScreen.
- The App.tsx consist of the Navigation betwwen the pages
- Homescreen consist of the display of menu, total number of the menu items, average price of the menu items, menu items saved in an array and allowed to remove the items.
- AddMenuItemsScreen consist of allows the chef to input details for a new menu item, including the name, description, course, and price, uses a Picker component to allow the chef to select the course for the menu item (Starter, Main, Dessert), is a separate screen dedicated to adding a new menu item, where the chef can input details about the item.
- FilterScreen consist of also uses a Picker to allow users to filter the displayed items by course (Starter, Main, Dessert), a separate page that allows the user to filter the displayed menu items by course (Starter, Main, or Dessert) using the Picker component.
- style are added in every page

Therefore mistakes of spliting the pages in part 2 whereas it could have been done in one placed or one file or screen were seen and reselved by the implementation done in Portfolio of evidence. 
Furthermore, in the module, Mast5112, it is evident that one msut implement and feedback provided by the lecture in part 2.The previous proposed to validate the changes made
 
