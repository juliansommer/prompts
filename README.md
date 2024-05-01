# Next.js Prompt Sharing App

This project uses Next.js with React, JavaScript, Tailwind CSS and MongoDB to create a basic full stack social media app that allows users to post AI prompts.

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

## TODO

- migrate to typescript

- prevent users from editing / deleting other users' posts, maybe get the sessionid and check the prompt's creator against it before deleting it?

- add a footer

- add a way for users to specify what model specifically the prompt is for

  - add an input where user can input theirs and it matches against a list of most common models (this would come after just use a normal string for now)
  - then could also have a page where you can view all the posts for that specific model too / filter the results on the main page like when u click a tag

- add a upvotes system, then would have the most popular prompts displayed first

  - upvotes field in mongo
  - everytime a user upvotes a post
    - make api request to a new route at prompt/[id]/like that then just adds 1 to the count
    - prompt/[id]/dislike removes one from count
    - would need to include the userid as well in the request to ensure no duplicate ids / can like a post u have already liked, and can display upvotes on the frontend

- add loading skeletons - specifically for loading the prompts, would i modify the PromptCard component or the pages

- add option for users to change username on profile page

- add option to switch between light and dark mode
