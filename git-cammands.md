## Create Git Repository Branch

`$ git checkout -b dev master`
it will create dev branch under master

## puch branch to origin 
git push --set-upstream origin cwritter

## list all branches
`$ git branch`
gives :
`* dev`
`  master`
"*" represents the active branch

## Switch between branches
`git checkout master`
now the active branch will be the master

## Delete a branch
`git branch -D dev`

## Delete Sub branch
`git branch -D dev subbranch`

## check git remote repo
`git remote`

## set remote repo
`git remote add origin https://github.com/halfbug/keep-id`

## push local code to remote repo
`git push -u origin master`

### git add/stage all m files
`git add . `

## git commit 
`git add readme.md`
`git commit -m "text changed" `

## git push to remote
`git push`

## git pull from remote
`git pull`

### Merge files to dev branch
`$ git checkout dev`
`$ git merge social-login/main`

### git tagging release
`$ git tag -a 0.1.0 -m "Implement social login. Update user schema.`

### tag push to origin 
`$ git push origin [tagname]`
Alternatively, if you want to push all tags, you can run the following command instead:
`$ git push origin --tags`

