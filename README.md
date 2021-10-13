# De Palma By Bits Code Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [Bulma](https://bulma.io/). Navigation has been implemented with [Reach Router](https://reach.tech/router/)

## Time estimate

This project 1:45 hours + 30 minutes
- [45min] Environment setup, login form page
- [40min] Mock details page, navigation, wired API fetchs
- [20min] Project completion

- [30min] Extra time for bugtesting and side notes

Please check Project Notes to see my line of thoughts.

## Design Notes

I wanted to keep a very simple design to avoid any user confusion. I took inspiration from the ByBits login page and implemented a userface similar to the user story provided. Bulma was offering everything I needed, an easy to read, clean and responsive design.

![Sign In](https://i.ibb.co/rwknNNP/Capture1.jpg)
![Details](https://i.ibb.co/v40B1V8/Capture2.jpg)

## Project Notes

- Examined mock API using Postman to have a better understanding of it.
- Creation of Login Form Page 
    > I wanted to implement data validation as I tough every login page should always have one.
    I kept a simple data validation that can be easily reused in case we need to check emails or any other data
- Creation of Details Page with dummy data
    > I reused the interface from the Login Page to setup a simple Details page with some mock data that eventually I swapped for the data retrieved from the API
- Implemented Navigation with Reach Router
- Implemented Fetch of API data
    > The navigation between the login and details page happens only if we have no errors in authentication. To make the second call using `access_token` I had to store the value somewhere. As I think that is *sensitive data I did not want to store it in local storage*
    > I have never used useContext but I tough it would have been a better option and an extra challenge for me. 
- Implemented useContext to store user data 
    > Having a context will allow to manage the user data in various part of the application. In this case, we only needed them for one page so a useState could have been optimal as well, but I set that as a challenge
    > I considered the `access_token` as part of the userData and it does not get lost at any time
    > No details are displayed until the fetch is complete. If we have no data to display a loading will appear. To test this change line 43 on Details.js
- Implemented log out
    > Loggin out we lose all the user data and we get back to the login page

## Testing and side notes

No tests have been submitted as I have no experience in writing good effective ones.
I tend to console log a lot of data whenever I code. Those logs have been removed for this submission to clean up the code. This also lead me to realise that this app is not optimized as I wanted it to be. 
The 30 minutes extra I took was to fix the details page. It might be something to do with the context and I couldn't find a solution to it; I would have opened a ticket on stackoverflow but I decided not to as I tought it would be 'cheating'.
Once we are logged in, if we refresh the page the data is kept.
If we log out and use the browser arrow back we are still displayed the user data, when we should not; the user data however is not in the context as this is empty. 
As I solution instead of keeping the loading flag I tought I could use the access_token as a flag, but then realised we might run into an issue on the second call and went back on my steps.

## Conclusion

Thank you for considering me for the challenge and looking forward to have your feedback