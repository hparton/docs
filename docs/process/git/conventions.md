# Conventions

At Parallax when using Git to create branches for work we should try our best to follow the below conventions.

## Writing commits

It is recommend that you try to make your git commit messages have some meaning. You should generally start your commit message with the type of task you have completed. This would be either:

* Added
* Updated
* Removed

If you are working on a specific JIRA ticket you can also include that ticket code (i.e. EXL-201) in the commit message. This helps Project Managers see what has been done and where to look through HipChat notifications.

## Creating Branches

The `master` branch should always reflect what is signed off and ready to go live. If you push something to master branch that isn't signed off then you prevent any urgent changes from being deployed.

It is recommended that you create a branch for each set of changes you are doing. This does not have to be a branch per ticket, but can be a branch for a group of tickets.

For a new site build, you should create a branch for area of functionality using the previous of `feature`.

If you are working collectively with other developers on the same project, it might be a good idea to create a `release` branch. This can be used to bring together a set of changes, without it going directly to master. That way the release branch can be built on QA and be checked over with all the changes together.

## Creating Pull Requests (PRs)

We use Pull Requests as our method for merging branches and changes together. You should never use git merge locally to move your changes into another branch.

The main benefits of using Pull Requests is that you can see the differences clearly before actually merging. This will also highlight any potential merge conflicts from changes, which can be common when multiple developers are working on the same project at the same time.

When doing a PR it is recommended that you include your Head of Department. You may also want to include any other developers that are involved in the project. The included reviewers will have a check over the code and approve the PR or provide feedback. You shouldn't merge your PR till it has been approved. Once approved, it is your responsibility to merge your changes, although your reviewers may do this for you sometimes. If you are unsure about merging anything please chat with your Head of Department or other developers involved.