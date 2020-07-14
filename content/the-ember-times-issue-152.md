---
title: The Ember Times - Issue No. 152
authors:
  - jessica-jordan
  - jared-galanis
  - isaac-lee
  - amy-lam
date: 2020-06-12T00:00:00.000Z
tags:
  - newsletter
  - ember-js-times
  - ember-times
  - '2020'
---


👋 Emberistas! 🐹

Meet the long-awaited `ember-collection` v1.0 release candidate 🎉,
use a modern keyboard API with `ember-keyboard` v6.0 ⌨️,
learn how to make your existing app accessible 💪,
introducing ember-concurrency-async 🚀,
and last, but not least, an interactive way to create new Ember apps RFC ✨🐹!

READMORE

---

## [Meet the long-awaited `ember-collection` v1.0 release candidate 🎉](https://twitter.com/Alonski/status/1264930582758412288)

After two years, a new version of [`ember-collection`](https://github.com/adopted-ember-addons/ember-collection) is here! You can use this addon to **incrementally render a large list of items**. The official `v1.0` will be released soon.

Two of the most notable [changes](https://github.com/adopted-ember-addons/ember-collection/releases/tag/v1.0.0-rc.0) are:

- Ember upgrade from 2.18 to 3.12!
- Improved continuous integration and auto-release process

Please thank [Alon Bukai (@Alonski)](https://github.com/Alonski), [Gaurav Munjal (@Gaurav0)](https://github.com/Gaurav0), [Robert Wagner (@rwwagner90)](https://github.com/rwwagner90), and [Vasanth (@vasind)](https://github.com/vasind) for their help with maintaining [`ember-collection`](https://github.com/adopted-ember-addons/ember-collection). If you currently use the addon, we ask that you upgrade and check that your app and tests continue to pass.

---

## [Use a modern keyboard API with `ember-keyboard` v6.0 ⌨️](https://twitter.com/lukemelia/status/1270672606220279808)

Are you ready for another exciting addon release? This week, `ember-keyboard` announced `v6.0` and showcased 3 **Octane-friendly** ways to respond to keyboard events:

- `{{on-key}}` helper
- `{{on-key}}` modifier
- `@onKey` decorator

As you may know, there was recently an RFC to modernize `ember-keyboard` API. Recognizing `key` versus `code` is one of the difficult problems that this addon can now solve for you. Version 6 does limit support to Ember 3.8+ and modern browsers (IE 11 excluded) so you will want to think about your current requirements.

To learn more about modern keyboard API and your migration path, we encourage you to visit these sites:

- [Official documentation](http://adopted-ember-addons.github.io/ember-keyboard/)
- [v6.0.0 changelog](https://github.com/adopted-ember-addons/ember-keyboard/blob/v6.0.0/CHANGELOG.md)
- [API design](https://github.com/adopted-ember-addons/ember-keyboard/blob/master/API-DESIGN.md) 
- [Migration example from `crates.io`](https://github.com/rust-lang/crates.io/pull/2563)

Last but not least, don't forget to thank [Luke Melia (@lukemelia)](https://github.com/lukemelia), [Sean Clark (@optikalefx)](https://github.com/optikalefx), [Preston Sego (@NullVoxPopuli)](https://github.com/NullVoxPopuli), [Matt McManus (@mattmcmanus)](https://github.com/mattmcmanus), [Sean Juarez (@seanCodes)](https://github.com/seanCodes), and [Ben Demboski (@bendemboski)](https://github.com/bendemboski) for shaping the new `ember-keyboard` API.

---

## [Learn how to make your existing Ember app accessible 💪](https://simplabs.com/blog/2020/06/02/how-to-improve-the-accessibility-of-your-app/)

Using Ember, you might be familiar with a set of tools that you can already use today to [make your app accessible](https://guides.emberjs.com/release/accessibility/). But what do you do if you are working on an already **mature Ember app** that needs a lot of improvements to **become accessible**? Where do you even start?

In her recent blog post, [Samanta de Barros (@sdebarros)](https://github.com/sdebarros) shares [her findings](https://simplabs.com/blog/2020/06/02/how-to-improve-the-accessibility-of-your-app/) on improving the accessibility of an Ember app by employing an automated, gradual and **a11y-focussed testing strategy**, semantic markup and screen reader testing.

If you want to find out how to level up your app's accessibility, read [her blog post on the simplabs blog](https://simplabs.com/blog/2020/06/02/how-to-improve-the-accessibility-of-your-app/) and if you learned something from it, be sure to share it with your Ember friends, too!

---

## [Introducing ember-concurrency-async 🚀](https://github.com/chancancode/ember-concurrency-async)

Have you wanted to use [`ember-concurrency`](https://github.com/machty/ember-concurrency) with TypeScript, but run into some limitations? In case you were not aware, there's a new addon by [Godfrey Chan (@chancancode)](https://github.com/chancancode) called [`ember-concurrency-async`](https://github.com/chancancode/ember-concurrency-async). This addon introduces the familiar `async/await` syntax to `ember-concurrency` tasks. 😃

The main advantage of the async method syntax over the default `ember-concurrency` generator method syntax is that it works better with the TypeScript compiler and things powered by it, such as the JavaScript language server in Visual Studio Code. Due to the fact that TypeScript already understands the `await` keyword natively, the compiler understands that yielding a value "returns" its resolved value - something not possible with generator method syntax.

Head on over to the [repo](https://github.com/chancancode/ember-concurrency-async) to learn more and take a look at some examples of how `ember-concurrency-async` can help you write `ember-concurrency` tasks in TypeScript. 

---

## [Interactive way to create new Ember apps RFC ✨🐹](https://twitter.com/melaniersumner/status/1271530189948948486)

Hot 🔥 off the press is a brand new [RFC](https://github.com/emberjs/rfcs/pull/638) by [Mel Sumner (@MelSumner)](https://github.com/MelSumner) that proposes an interactive way to create Ember apps!

As part of the effort to make new Ember apps more conformant for digital accessibility requirements at a global scale, this RFC proposes an interactive workflow for new Ember apps. This will also have the benefit of assisting new users who prefer an interactive model of new app creation.

This new wizard for creating Ember apps would prompt users who type `ember new` into their command line with a series of questions that will help in defining certain aspects of their app, including whether the app is an app or addon, the app name, what the spoken/content language is, and what dependency manager and CI system are used. 

If you have ideas about this exciting addition to Ember tooling please head on over to the [RFC](https://github.com/emberjs/rfcs/pull/638) and share your thoughts.

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/fivetanley" target="gh-user">@fivetanley</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/scalvert" target="gh-user">@scalvert</a>, <a href="https://github.com/hergaiety" target="gh-user">@hergaiety</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/gokatz" target="gh-user">@gokatz</a>, <a href="https://github.com/backspace" target="gh-user">@backspace</a>, <a href="https://github.com/gvocale" target="gh-user">@gvocale</a>, <a href="https://github.com/lukemelia" target="gh-user">@lukemelia</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a> for their contributions to Ember and related repositories! 💖</p>

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

Jessica Jordan, Jared Galanis, Isaac Lee, Amy Lam and the Learning Team
