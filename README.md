# Git file - tracked states
To be more precise, the tracked state can be further subdivided into three substates:
1. modified
2. staged 
3. committed 

Our README.md file is in the committed state.
Git will pay attention to all the tracked files; if we modify any of them (which includes deletions and renames), they will change their state from committed to modified:

$ echo "A very simple user directory API with recommendation engine" >> README.md

$ git status

On branch master

Changes not staged for commit:
  modified: README.md

Modified files, alongside any untracked files, will be listed when we run git status. Modified files can be committed in the same manner as untracked files:
### `$ git add README.md`
### `$ git commit -m "Update README.md"`
[master 85434b6] Update README.md
 1 file changed, 1 insertion(+) You might be wondering why we had to run git add before we ran git commit. git add places the untracked or modified file into what is known as the staging area, which is also known as the index or cache. 
### `When a file is placed into the staging area, it is in the staged state. When we commit, only changes in the staging area are added to the repository; changes that remain in the workspace are not committed.`

###
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

#The three tracked states
To be more precise, the tracked state can be further subdivided into three substates: modified, staged, and committed. Our README.md file is in the committed state.
Git will pay attention to all the tracked files; if we modify any of them (which includes deletions and renames), they will change their state from committed to modified:
$ echo "A very simple user directory API with recommendation engine" >> README.md
$ git status
On branch master
Changes not staged for commit:
  modified: README.md
Modified files, alongside any untracked files, will be listed when we run git status. Modified files can be committed in the same manner as untracked files:
$ git add README.md
$ git commit -m "Update README.md"
[master 85434b6] Update README.md
 1 file changed, 1 insertion(+)
You might be wondering why we had to run git add before we ran git commit. git add places the untracked or modified file into what is known as the staging 
area, which is also known as the index or cache. When a file is placed into the staging area, it is in the staged state. When we commit, only changes in the staging area are added to the repository; changes that remain in the workspace are not committed.