---
title: Ember 1.0 RC5
authors:
  - tom-dale
date: 2013-06-01T00:00:00.000Z
tags:
  - releases
  - version-1-x
  - '2013'
---


Ember.js 1.0 RC5 has just been released and is now available from the
main website as well as [builds.emberjs.com](http://builds.emberjs.com).

RC5 fixes several regressions and bugs found in RC4. Notably:

* A performance regression caused by a change to run loop scheduling has
  been fixed. Thanks to [Erik Bryn](https://twitter.com/ebryn) for
  working on this.
* Promises returned from a route's `model` hook could cause the app to
  hang on page refresh. This has been fixed thanks to [Alex Matchneer](https://twitter.com/machty).
* The `ember-testing` package, which contains additional helpers for
  testing Ember.js apps, is no longer included in the production build.
  This means less JavaScript for end users to load over the network.

Thank you to everyone who filed issues and pull requests. Please try out
RC5 in your applications and report any issues or regressions you find
by filing an [issue on GitHub](https://github.com/emberjs/ember.js/issues).

Lastly, thanks to [Stefan Penner](https://twitter.com/stefanpenner), who
has been busting his tail to get Ember.js to the 1.0 finish line,
including doing the release engineering for these release candidates.
Thanks Stef!
