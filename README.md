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

Install pnpm if needed

```bash
npm install -g pnpm
```

Install the project dependencies using pnpm:

```bash
pnpm install
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
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

# TODO

- nav is re rendering when it shouldnt, which then makes calls to auth
- stop using useSession
- fix the layout shift
- make use of server components for fetching data instead of useeffect
- add dynamic metadata to pages (need to not have client first)
- add opengraph images etc
- add loading skeletons?
