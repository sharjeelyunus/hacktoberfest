![hacktoberfest](./src/assets/Hacktoberfest.png)
<div align="center">
	<p>
        <b><i>Let's Contribute To Open-source</i></b>
    </p>
</div>

Hacktoberfest, in its 8th year, is a month-long celebration of open source software run by DigitalOcean. During the month of October, we invite you to join open-source software enthusiasts, beginners, and the developer community by contributing to open-source projects.

### *Completing the Challenge*

If you have previously never contributed to any open-source software then these steps will help you get started:

1. Go to Hacktoberfest [official website](https://hacktoberfest.digitalocean.com/) and sign in there using your GitHub.
2. Install git and setup in your computer. Download and install it from [here](https://git-scm.com/downloads).
3. Fork this repository by click the Fork button in the top right of this page or simply [click here](https://github.com/sharjeelyunus/hacktoberfest/fork).
4. Once it is forked, clone the repository in your computer. For this, copy the URL in the address bar, and use the following command:

```sh
git clone url_you_just_copied
```

4. Open this cloned repository in your preferred code editor as shown below. Also, open a terminal in this directory.
(Use this command if you are using Linux distribution)

```sh
cd hacktoberfest
```

5. Now type in the following command in the terminal and replace `username` with your GitHub username.

```sh
git checkout -b username
```

6. Fill this block with necessary info of yourself.
```
    {
      "name": {YOUR_NAME},
      "batch": {YOUR_BATCH_COMMENCEMENT_YEAR},
      "major": {YOUR_DEPARTMENT},
      "githubUsername": {YOUR_GITHUB_USERNAME},
      "favoriteLanguage": {YOUR_FAVOURITE_PROGRAMMING_LANGUAGE}
    }
```

7. Now add the above filled block to the array in `profiles.json` file


8. Once you have done all this, commit your changes to GitHub. You can do this with the following commands. Make sure you execute them in the precise order one after another in your terminal.

```sh
# copy and paste the following in the terminal
git add .

# copy and paste the following in the terminal after you have executed the previous command
git commit -m "hacktoberfest contribution"

# copy and paste the following in the terminal after you have executed the previous command
git push -u origin your_github_username
```

9. Now open the forked repository on your GitHub. You will see a yellow box at the top telling you that some changes are pushed. You will also see a button called `Compare & pull request`. Click on it.
10. Now add a title, some description! You have opened a pull request in this repository.

*You need to open **four** valid pull requests in order to complete the challenge. If you have performed the above steps, you have already opened one pull request. And you need only three more.*

<br>

>Note: Those repositories who have `hacktoberfest` as a label are considered for Hacktoberfest challenge only.