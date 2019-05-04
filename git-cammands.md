## create a new repository on the command line
echo "# your-repo-name" >> README.md
`git init

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

