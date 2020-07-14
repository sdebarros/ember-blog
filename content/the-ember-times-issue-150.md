---
title: The Ember Times - Issue No. 150
authors:
  - matthew-roderick
  - amy-lam
  - isaac-lee
  - jared-galanis
date: 2020-05-29T00:00:00.000Z
tags:
  - newsletter
  - ember-js-times
  - ember-times
  - '2020'
---


👋 Emberistas! 🐹

Ember Octane vs Classic cheat sheet is in Octane 🔥, Ember tutorials on MDN 🎉, test directory RFC FCP closing 🚨⏳, new router service refresh RFC ♻️, and last, but not least, "My Experience with Ember.js" Part 2 🎬!

READMORE

---

## [Ember Octane vs Classic cheat sheet is in Octane 🔥](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)

[Ember Octane vs Classic Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/) is a quick reference to understanding how to convert a classic Ember syntax to an Octane one. The website is nearing its one year anniversary! 🎂 What better way to celebrate than being upgraded from vanilla JS to an Ember Octane app?

Thanks to work by [Jen Weber (@jenweber)](https://github.com/jenweber) and [Isaac Lee (@ijlee2)](https://github.com/ijlee2), the project is now built on a few well-known solutions: [`ember-code-snippet`](https://github.com/ef4/ember-code-snippet), [`ember-prism`](https://github.com/shipshapecode/ember-prism), [`ember-intl`](https://github.com/ember-intl/ember-intl), [`ember-cli-deploy`](https://github.com/ember-cli-deploy/ember-cli-deploy), and GitHub Actions for CI.

What's in store for the future? The [project](https://github.com/ember-learn/ember-octane-vs-classic-cheat-sheet/) can use your help with updated content, mobile responsive design, and—perhaps what's most cool—translations to languages besides English. If you'd like to help, please reach out to the Ember Learning Team on [#dev-ember-learning](https://discord.com/channels/480462759797063690/480777444203429888) on [Discord](https://discord.com/invite/emberjs)!

---

## [Ember tutorials on MDN 🎉](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Ember_tutorials)

[Preston Sego (@NullVoxPopuli)](https://github.com/nullvoxpopuli) shared the [news](https://twitter.com/nullvoxpopuli/status/1262124413794881541) that [Ember tutorials](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Ember_tutorials) are now on the Mozilla Developer Network (MDN) web docs, along with React and Vue! It's awesome to see Ember included in [MDN](https://developer.mozilla.org/), one of the most respected resources on the web for frontend developers. 

In the [Ember tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Ember_tutorials), you'll build a **TodoMVC app in Ember**. You can verify your code with the [tutorial code repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) and also check out a [live deployed version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/). Thank you @NullVoxPopuli for your efforts in getting the word out about Ember! 👏

---


## [Test directory RFC FCP closing ⏳](https://github.com/emberjs/rfcs/pull/575)

RFC Final Comment Period (FCP) closing alert 🚨!

The ✨awesome ✨ Request for Comments (RFC) by [Mehul Kar (@mehulkar)](https://github.com/mehulkar) about changing the name of an Ember app's test directories to be more in sync with naming provided in the official guides has entered the last week of FCP. 

The RFC proposes that this unification could make it easier to have a shared language between tests, and would reduce confusion for newer users when using Ember CLI.

If you're interested in the subject and have opinions you want to voice, now would be a good time to head on over to the [RFC](https://github.com/emberjs/rfcs/pull/575) and provide some feedback. 

---

## [New router service refresh RFC ♻️](https://github.com/emberjs/rfcs/pull/631)

There's a cool 😎 new RFC by [Gaurav Munjal (@Gaurav0)](https://github.com/Gaurav0) regarding adding a `refresh` method to the router service.

Note: This RFC is suggesting a `refresh` method that would be different than the currently available `Route.prototype.refresh` method, which refreshes whatever route you call it on and all routes “below” it in the route hierarchy. This newly proposed method would refresh <span style="font-style: italic;">all</span> currently active routes.

If you're interested in commenting on the RFC, please head on over to the [PR](https://github.com/emberjs/rfcs/pull/631) and make your voice heard 📣!

---

## ["My Experience with Ember.js" Part 2 🎬](https://www.youtube.com/watch?v=R2JdP4lb5Xw)

[Cal Woolgar (@calWoolgar)](https://github.com/calWoolgar) has a second video out, [Creating an Ember Application](https://www.youtube.com/watch?v=R2JdP4lb5Xw)! He demonstrates how Ember CLI makes it simple to get started with Ember.js.

This video touches on an [Ember app's anatomy](https://guides.emberjs.com/release/getting-started/anatomy-of-an-ember-app/). With Ember CLI, you can create a fully working application with **one line of code!** 🎉

```bash
ember new "app-name"
```

With that command, Ember CLI installs all your dependencies for your new app. You can also create [routes](https://guides.emberjs.com/release/routing/defining-your-routes/) and [templates](https://guides.emberjs.com/release/components/) with the CLI.

```bash
ember generate template "template-name"
ember generate route "route-name"
```

These are great videos for someone learning Ember, look forward to the next tutorial video from Cal! 😃

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/thoov" target="gh-user">@thoov</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/CodingItWrong" target="gh-user">@CodingItWrong</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/chriskrycho" target="gh-user">@chriskrycho</a>, <a href="https://github.com/chrisrng" target="gh-user">@chrisrng</a>, <a href="https://github.com/SergeAstapov" target="gh-user">@SergeAstapov</a>, <a href="https://github.com/patricklx" target="gh-user">@patricklx</a>, <a href="https://github.com/mmun" target="gh-user">@mmun</a>, <a href="https://github.com/gabrielcsapo" target="gh-user">@gabrielcsapo</a>, <a href="https://github.com/ygongdev" target="gh-user">@ygongdev</a>, <a href="https://github.com/danwenzel" target="gh-user">@danwenzel</a>, <a href="https://github.com/vasind" target="gh-user">@vasind</a>, <a href="https://github.com/Alonski" target="gh-user">@Alonski</a>, and <a href="https://github.com/jelhan" target="gh-user">@jelhan</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask readers' questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>
</div>

---

## [#embertimes 📰](https://blog.emberjs.com/tags/newsletter.html)

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Matthew Roderick, Amy Lam, Isaac Lee, Jared Galanis and the Learning Team
