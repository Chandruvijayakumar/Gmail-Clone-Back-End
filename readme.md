# Gmail-Clone-Back-End 📧

The Gmail-Clone project is a web application designed to replicate the core functionalities of Gmail. This project allows users to send, receive, and organize emails, providing a familiar interface and user experience.

## Features 🚀

- Compose, send, and receive emails
- Organize emails into folders (Inbox, Sent, Drafts, etc.)
- Search emails
- Responsive design for mobile and desktop

## Prerequisites 📋

- Node.js
- npm or Yarn
- MongoDB Atlas account (or local MongoDB setup)

## Steps 📝

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Chandruvijayakumar/Gmail-Clone-Back-End.git
    cd gmail-clone
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your MongoDB URI and any other necessary environment variables.

    ```env
    MONGO_URI=mongodb://your-mongodb-uri
    JWT_SECRET=your-secret-key
    ```

4. **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

## Usage 🖥️

1. **Navigate to the project directory:**

    ```bash
    cd gmail-clone
    ```

2. **Open the project in your code editor:**

    ```bash
    code .
    ```

3. **Run the application:**

    ```bash
    npm start
    # or
    yarn start
    ```

4. **Open your browser and visit:**

    [http://localhost:3000](http://localhost:3000)

## Endpoints available 🌐

- `POST /api/auth/signup:` Sign up a new user.
- `POST /api/auth/login:` Log in an existing user.
- `POST /api/emails:` Send a new email.
- `GET /api/emails:` Get all emails.
- `GET /api/emails/:id:` Get a specific email by ID.
- `DELETE /api/emails/:id:` Delete an email by ID.
- `PUT /api/emails/:id:` Update an email by ID.

### Explore the features 🧐

- Compose a new email and send it.
- Check the Inbox, Sent, and Drafts folders.
- Use the search functionality to find specific emails.

## Customization 🎨

- Review and edit HTML, CSS, and JavaScript files to customize content and styling.
- Ensure all images and media files are placed in the appropriate directories (`assets/`).

## Technologies Used 🛠️

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB (MongoDB Atlas)
- Authentication: JWT (JSON Web Tokens)
- Styling: CSS3
- Material UI

## Contributing 🤝

We welcome contributions to improve the Gmail-Clone project! If you have suggestions, enhancements, or bug fixes, please fork the repository and submit a pull request.

## Support 📞

For any questions or issues regarding the project, please contact us at chandru4395393@gmail.com 📧

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links 🔗

- **Live Demo:** [Netlify Link](https://gmail-project-clone.netlify.app/emails/inbox)
- **GitHub Repository:** [GitHub](https://github.com/Chandruvijayakumar?tab=repositories)
- **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/chandru-vijayakumar/)
