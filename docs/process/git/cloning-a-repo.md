# Cloning a Repo

This method can be used to copy an entire repository. This includes all its branches, tags and history. It can be useful to use this method as a backup procedure when running risky commands against the repository.

### 1. Clone down the repository

You will want to clone the entire structure to the git repository. This will be downloaded into a `.git` folder.

     git clone --bare git://example.com/some-big-repo.git

After this is done use `cd` to move into the downloaded folder:

     cd some-big-repo.git

### 2. Push the repository to its new location

You can now force the current state of the repository up to a new location:

     git push --mirror https://github.com/exampleuser/new-repository.git
