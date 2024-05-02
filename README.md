# Next.js Prompt Sharing App

This project uses Next.js with React, TypeScript, Tailwind CSS and MongoDB to create a basic social media app that allows users to post AI prompts.

## Features

- CRUD
  - Create Post
  - Load Posts
  - Update Post
  - Delete Post
- Google Account Sign in
- Search Functionality
- View User Profiles
- Theme Toggle

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

## Locked Packages

next, next-auth, eslint and eslint-config-next are locked as

- next-auth 5.0.0-beta.4 and subsequently next 14.1.3 is required to fix a typescript session issue
- eslint 8.57.0 and subsequently eslint-config-next 14.2.3 is required as next 14.1.3 does not work with eslint 9
