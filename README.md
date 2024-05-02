# Next.js Prompt Sharing App

This project uses Next.js with React, TypeScript, Tailwind CSS and MongoDB to create a basic full stack social media app that allows users to post AI prompts.

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
NEXTAUTH_SECRET= (Random Generated Auth Secret)
GOOGLE_ID= (Your Google Cloud ID)
GOOGLE_CLIENT_SECRET= (Your Google Cloud Secret ID)
MONGODB_URI= (Your MongoDB URI)
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

# Locked Packages

- next, next-auth, eslint and eslint-config-next are locked as
  - next-auth 5.0.0-beta.4 and subsequently next 14.1.3 is required to fix a typescript session issue
  - eslint 8.57.0 and subsequently eslint-config-next 14.2.3 is required as next 14.1.3 does not work with eslint 9

## TODO

- containerise and run on aws?

- migrate from useSession() to auth()

- prevent users from editing / deleting other users' posts, maybe get the sessionid and check the prompt's creator against it before deleting it? - no button for this but they could make the api request themselves?

- add a footer

- add a way for users to specify what model specifically the prompt is for

  - would need to update models/prompt.js and delete all the current records in mongo, add an input field on Form.jsx component, display the model somewhere on promptcard.jsx, modify api/prompt/new/route.js to accept the model field as well

  - long term could add a input box and it matches a predetermined list of models and if not just accept custom, think country select dropdown thing

  - then could also have a page where you can view all the posts for that specific model too / filter the results on the main page like when u click a tag

- add a upvotes system, then would have the most popular prompts displayed first

  - upvotes field in mongo
  - everytime a user upvotes a post
    - make api request to a new route at prompt/[id]/like that then just adds 1 to the count
    - prompt/[id]/dislike removes one from count
    - would need to include the userid as well in the request to ensure no duplicate ids / can like a post u have already liked, and can display upvotes on the frontend

- add loading skeletons - specifically for loading the prompts, would i modify the PromptCard component or the pages

- add option to switch between light and dark mode
