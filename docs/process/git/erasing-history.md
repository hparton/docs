# Erasing History

If something has been committed into a repository that contains sensitive data such as access keys or passwords then you will want to remove them if the repository is to be shared with an outside company or person.

You can remove a specific file from a repository and also remove all traces in past commits and branches. This will make sure that the information has no record left.

The best tool for this is `bfg` which can be found at: [https://rtyley.github.io/bfg-repo-cleaner/](https://rtyley.github.io/bfg-repo-cleaner/)

### 1. Clone down the repository

You will want to mirror the repository which allows access to the history references for quick changes across the entire repository. You can do this with:

     git clone --mirror git://example.com/some-big-repo.git


After this change directory into the downloaded git:

    cd some-big-repo.git

### 2. Running bfg to clean

You will need to reference the downloaded bfg.jar file you've got from their website. Then you can use the `--delete-files` flag to specify what files to look for. In the below example we are wanting to delete `.env` files that have been committed in.

     java -jar bfg.jar --delete-files .env

### 3. Clearing out and pushing back the changes

Once you've removed the file from the history you will need to clear out the cache of the repository so its removed completely. You can do this with the below command.

     git reflog expire --expire=now --all && git gc --prune=now --aggressive

After this has completed you can push the changes back to the remote repository:

    git push

Other alternative ways can be found at: [https://help.github.com/articles/removing-sensitive-data-from-a-repository/](https://help.github.com/articles/removing-sensitive-data-from-a-repository/)