# Google Forms Clone

## Project Objective:
The aim of this project is to provide a system where users can create and edit dynamic forms. Inspired by Google Forms, this project allows flexibility in form structure, enabling users to customize questions and answer options. Additionally, data is stored both locally in the browser and in a cloud-based database for persistence across sessions and devices.

## Technologies Used:

- **React**: Used for the frontend part of the project. React’s component-based structure was employed to make forms dynamic and reusable.
  
- **LocalStorage**: Enabled local storage of forms created by users in the browser. This ensures that data persists and is not lost even when the page is refreshed.

- **Firebase**: Integrated to manage real-time data storage. With Firebase, data is stored in the cloud, allowing forms to be accessible from multiple devices.

- **Strapi**: Used as the backend to manage form data via an API. This centralized form data storage made it easier to manage and retrieve form information.

- **hCaptcha**: Integrated for form security. Used to verify that users are not bots by providing CAPTCHA challenges.

## Technical Details:

- The project heavily utilized React’s **useState** and **useEffect** hooks to manage changes within the forms.
- Firebase enabled real-time updates to the data, ensuring that users could access their forms from other devices.
- **Strapi** was used to implement API integration, simplifying the management of form data on a central database.
  

![Form Creation Screen](path-to-image.png)

