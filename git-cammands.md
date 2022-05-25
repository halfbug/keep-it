## create a new repository on the command line

`echo "# your-repo-name" >> README.md

git init

git add README.md

git commit -m "first commit"

git remote add origin git@github.com:halfbug/hifz-ul-quran.git

git push -u origin master`

## push an existing repository from the command line (mostly used)

`git remote add origin git@github.com:halfbug/hifz-ul-quran.git

git push -u origin master`
## import code from another repository
`You can initialize this repository with code from a Subversion, Mercurial, or TFS project.`

## Create Git Repository

`$ git checkout -b dev master`
it will create dev branch under master

## list all branches
`$ git branch`
gives :
`* dev`
`  master`
"*" represents the active branch

## Cherry-pick
### 1. to cherry-pick a single branch or commit named commit
`git cherry-pick commit`

### 2. to cherry-pick multiple commits
`git cherry-pick commit1 commit2 commit3 commit4 commit5`

### 3. to cherry-pick a range of commits
- A. INCLUDING the beginning_commit
`git cherry-pick beginning_commit~..ending_commit`
 - OR (same as above)
`git cherry-pick beginning_commit~1..ending_commit`
 - OR (same as above)
`git cherry-pick beginning_commit^..ending_commit `

- B. NOT including the beginning_commit
`git cherry-pick beginning_commit..ending_commit`

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

## git commit 
`git add readme.md`
`git commit -m "text changed" `

## git push to remote
`git push`

## git pull from remote
`git pull`

