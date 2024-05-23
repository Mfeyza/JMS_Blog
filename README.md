# JMS Blog

**Live Link:** [JMS Blog](https://jms-blog.vercel.app/)

## Description
This project is a fully-featured blog application with a backend created using Node.js, Express, and MongoDB, and a frontend created using React and Redux. The application supports user authentication, blog creation, comments, and likes.

## Features
- **User Authentication and Authorization:** Secure user registration and login functionality using JWT.
- **Blog Management:** Create, read, update, and delete blogs.
- **Commenting:** Users can comment on blogs.
- **Likes:** Users can like and unlike blogs.
- **Responsive UI:** A responsive user interface built with React and Material-UI.
- **Rich Text Editing:** Utilizes CKEditor and TipTap for rich text editing capabilities.

## Technologies

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Swagger for API documentation

### Frontend
- React
- Redux Toolkit
- Material-UI
- Formik and Yup for form management and validation
- CKEditor and TipTap for rich text editing

## Project Structure
````
.
├── public
├── src
│ ├── app
│ │ └── store.jsx
│ ├── assets
│ ├── components
│ │ ├── Advic.jsx
│ │ ├── Blog.jsx
│ │ ├── Categories.jsx
│ │ ├── CommentAll.jsx
│ │ ├── CommentCard.jsx
│ │ ├── CommentDrawer.jsx
│ │ ├── EditBlogModal.jsx
│ │ ├── EditProfileModal.jsx
│ │ ├── Footer.jsx
│ │ ├── LoginForm.jsx
│ │ ├── Navbar.jsx
│ │ ├── RegisterForm.jsx
│ │ ├── Top.jsx
│ ├── features
│ │ ├── authSlice.jsx
│ │ ├── blogSlice.jsx
│ │ ├── categorySlice.jsx
│ ├── helper
│ │ ├── data.js
│ │ ├── methods.js
│ ├── hooks
│ │ ├── useBlog.jsx
│ ├── pages
│ │ ├── BlogDetails.jsx
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── NewBlog.jsx
│ │ ├── OurStory.jsx
│ │ ├── Profile.jsx
│ │ ├── Register.jsx
│ ├── router
│ │ ├── AppRouter.jsx
│ │ ├── PrivateRouter.jsx
│ ├── thunks
│ │ ├── authThunk.jsx
│ │ ├── blogThunk.jsx
│ │ ├── categoryThunk.jsx
│ │ ├── commentThunk.jsx
│ ├── App.js
│ ├── index.css
│ ├── index.js
│ ├── .env
│ ├── .gitignore
│ ├── README.md
└── package-lock.json
````


![image](https://github.com/Mfeyza/JMS_Blog/assets/144602340/ef514b84-9168-4623-a4b6-82cbc844d88d)

![image](https://github.com/Mfeyza/JMS_Blog/assets/144602340/bc6f357e-5ee4-48cb-826a-40e0338d500e)

![image](https://github.com/Mfeyza/JMS_Blog/assets/144602340/1938a2e2-e337-440e-977b-cb27a95d83c7)


## Getting Started

To run the application on your local machine, follow these steps:

1. Clone the project to your computer:
   git clone https://github.com/yourusername/blog-app.git

2. Open your terminal and navigate to the project directory:
   cd blog-app

3. Install the dependencies:
   npm install

4. Start the application:
   npm start

5. Open your web browser and visit http://localhost:3000 to explore the JMS Blog.
   





