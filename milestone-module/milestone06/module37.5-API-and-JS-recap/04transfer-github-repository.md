# 37.5.5 Transfer assignment private repo to your github private repo

⫸ `Transfer Assignment Private Repo:`
1. ___Copy HTTPS-URL___ from assignment private repo
2. Open ___cmd___ and go to the ___Assignments folder___
3. `git clone --bare HTTPS-URL`
   - `--bare` ___copy___ the all ___time-stamp___
``` JavaScript
git clone --bare https://github.com/programming-hero-web-course-4/product-analysis-website-crescentpartha.git
```
4. `cd product-analysis-website-crescentpartha.git`
5. Create ___New Repository___ and make it ___private___
6. Copy ___HTTPS-URL___ of New Repository
7. `git push --mirror HTTPS-URL` of New Repository
``` JavaScript
git push --mirror https://github.com/crescentpartha/product-analysis-website-crescentpartha.git
```
8. We need to ___change origin___ of the repo, otherwise all commits and push ___go to the old repository___.
9. ___Search___ git change origin url
10. `git remote -v`, to ___verify___ the remote URL
11. `git remote set-url origin HTTPS-URL` of New Repository
``` JavaScript
git remote set-url origin https://github.com/crescentpartha/product-analysis-website-crescentpartha.git
```
12. `git remote -v`, to ___verify___ the remote URL has changed.

---

⫸ [Changing a remote repository's URL:](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url "Follow the steps for Switching remote URLs from SSH to HTTPS - GitHub docs")
1. ___Open___ Git Bash.
2. Change the current working directory to your ___local project___.
3. List your existing remotes in order to get the name of the remote you want to change.
``` JavaScript
$ git remote -v
> origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
> origin  git@github.com:USERNAME/REPOSITORY.git (push)
```
4. Change your remote's URL from SSH to HTTPS with the `git remote set-url` command.
``` JavaScript
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
5. Verify that the remote URL has changed.
``` JavaScript
$ git remote -v
# Verify new remote URL
> origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
> origin  https://github.com/USERNAME/REPOSITORY.git (push)
```

`Notes:` 
- The next time you `git fetch`, `git pull`, or `git push` to the remote repository, you'll be asked for your ___GitHub username and password___. 
- When Git ___prompts you___ for your ___password___, enter your ___personal access token (PAT)___.


⫸ `Transfer Assignment Private Repo:` (___Simple Six(6) Steps___ to transfer ___assignment private repo___ to your ___github private repo___.)

``` JavaScript
git clone --bare https://github.com/programming-hero-web-course-4/product-analysis-website-crescentpartha.git

cd product-analysis-website-crescentpartha.git

git push --mirror https://github.com/crescentpartha/product-analysis-website-crescentpartha.git

git remote -v

git remote set-url origin https://github.com/crescentpartha/product-analysis-website-crescentpartha.git

git remote -v
```
