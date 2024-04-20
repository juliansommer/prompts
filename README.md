# Full Stack Next.js Prompts Social Media App

This project uses Next.js to develop a full stack social media app by using api routes for data fetching from MongoDB.

## Features

Currently the site has these features.

- CRUD
  - Create Post
  - Load Posts
  - Edit Post
  - Delete Posts
- Google Account Sign in
- Search Functionality
- View Profiles

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
