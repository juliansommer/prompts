# TODO

- add search functionality

  - in feed component add search states
  - both for tags and username
  - eventually for prompt content but is harder to implement
  - would just change the posts being displayed on the main page to only be for those tags, not a seperate page?

- implement click on tag

  - go to a dynamic page /posts/tag/[tag]
  - just the same as the homepage layout but only for that specific tag
  - then maybe also get some data on how many posts with that tag there is

- implement view other profiles

  - dynamic folder in profile
    - profile/[id]/page.tsx

- add a way for users to specify what model specifically the prompt is for

  - add a search bar where user can input theirs and it matches against a list of most common models
    - if doesnt work, just have it be a custom model

- add a way for users to easily test others prompts

  - if the model is gpt-3.5, can click a button to test prompt
    - then user inputs their query and show the ai response

- when user is inputting their prompt

  - if the text contains "please"
    - have a popup with a link to the study about why its not a good idea

- migrate to typescript

- add option for users to change username on profile page

- is overfetching data, do not need the user email for the prompt feed on the main display so no need to get that data. how to solve this? would i have to use graphql?

- change styling / colour scheme of website

- modify the api that gets the posts to only get 20 not all of them

- add a footer

- if user puts # at start of the tag, remove it.

- add option to switch between light and dark mode

- add loading skeletons
