# Full Stack Next.js Prompts Social Media App

This project uses Next.js to create a full stack social media app by using api routes for data fetching from MongoDB. The basic functionality of the app was created using a tutorial from [JavaScript Mastery](https://www.youtube.com/@javascriptmastery), and then I expanded upon it.

## Features

Currently the site has these features:

- CRUD
  - Create Post
  - Load Posts
  - Update Post
  - Delete Post
- Google Account Sign in
- Search Functionality
- View Profiles

## Setup

Follow these steps to run the project locally.

**Prerequisites**

Make sure the following are installed.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/juliansommer/prompts.git
cd prompts
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a `.env` file in the root of your project and add the following content:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

You will need to add your actual credentials. You can obtain these credentials from [Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for a random Auth Secret), and [MongoDB](https://www.mongodb.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## TODO

- add a upvotes system, then would have the most popular prompts displayed first

  - upvotes field in mongo
  - everytime a user upvotes a post
    - make api request to a new route at prompt/[id]/like that then just adds 1 to the count
    - prompt/[id]/dislike removes one from count
    - would need to include the userid as well in the request to ensure no duplicate ids / can like a post u have already liked, and can display upvotes on the frontend

- prevent users from editing / deleting other users' posts, maybe get the sessionid and check the prompt's creator against it before deleting it?

- add loading skeletons - specifically for loading the prompts, would i modify the PromptCard component or the pages?

- add a way for users to specify what model specifically the prompt is for

  - add an input where user can input theirs and it matches against a list of most common models

- migrate to typescript

- add option for users to change username on profile page

- change styling / colour scheme of website

- add a footer

- add option to switch between light and dark mode
