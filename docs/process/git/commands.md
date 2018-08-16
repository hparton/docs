# Commands

## Clone

To get a repository from Stash / Bitbucket you will need to clone down the repository to your local machine. This is a basic command you will be given the repository URL when you click clone on the left sidebar within Bitbucket.

     git clone ssh://git@my.parall.ax:7999/{PROJECT}/{REPO}.git

If this is your first time you will need to make sure you add your SSH keys into Bitbucket. You can do this in the 'Manage Account' section  by clicking on your profile image in the top right in Bitbucket.

To generate your SSH key if you haven't already you will need to run:

    ssh-keygen

Just press enter for all the prompts given. Once you have done this you can get your SSH key by doing the below command:

    cat ~/.ssh/id_rsa.pub

Copy the displayed code from your terminal into the new SSH key within Bitbucket.

## Pull

You use 'git pull' to get the latest changes from the remote repository for the current branch you are on.

It is important that you use 'git pull' when working on a branch that another developer has worked on before you start doing your work locally. This will help avoid conflicts and issues creating a new commit on files that are ahead of your changes.

    git pull

## Branch

The most efficient way to create new branches is to do it within Bitbucket. This then allows others to see what branches exist and compare code. We use branches to allow multiple developers to work on the same repository at the same time then merge their changes back into 'master'. The 'master' branch is what will be deployed to production and should only include code that has been tested and approved.

Once you've created a new branch you can switch your local version to that branch using `git checkout`. If you've recently created the branch you might need to run `git fetch` first which pulls down the git information for the repository so your local knows what exists on the server.

    git checkout <branch>

Note: when creating a branch for a new feature, prefix with feature- and similarly for a hotfix use hotfix-

If you use the Bash Shortcuts (http://docs.exposecms.com/docs/general-other-bash-shortcuts) then you can use the `gco` command which runs a `git fetch` and `git checkout` command in one. This runs the below:

    git fetch && git checkout

You can then simply add your branch to end of this command. So you would use it like this:

    gco <branch>

## Commit

Once you've done some changes you will need commit your changes. This adds the files into a version log against the repository which allows you to easily rollback a site to a specific point.

Before adding your files it is good practice to use `git status` to view the files that have been tracked as being changed. It is good to review this as sometimes other things such as gulp or your IDE might changes other files that you do not want to be changed. To view the changed files run:

    git status

If you are happy with the files listed you need to first add them to your change log. You can add individual files by using `git add` followed by the file path. Alternatively you can add all files that are logged as being changed with:

    git add .

Once you have added you need to write your commit. It is good practice to start a commit message with what type of action has been done. For example 'Updated', 'Added', 'Removed.

You can then type your message so people reading the commit history can see what has changed without having to go looking through the code. To write a commit message use:

    git commit -m "<Your Commit Message>"

## Push

After you've created a commit you will need to push the changes to the remote repository that is on Bitbucket. If you are on a branch your changes will need to be pushed to that rather than 'master'. If you have used git branch through Bitbucket and then checked out your branch you can simply use:

    git push

However, sometimes developers might create the branch locally which will then need to be pushed in a slightly different way. This is due to the 'upstream' not knowing where the current branch should be going within the remote repository. In this instance you would push like this:

    git push origin <branch>

## Stash

The 'git stash' command is useful if you have started to make changes to your local site, but haven't made a new branch for your work. This takes your current uncommited changes and stores them in temporary memory. You can then switch to another branch and get them changes back.

To store your local changes use:

    git stash

Once you've switched to the correct branch and want to get the changes back in your local site run:

    git stash pop
