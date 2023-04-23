Creative Coding Gallery
===

Gallery preview to be used for [Creative Coding Meetup](https://creatorsgarten.org/events/creativecodingmeetup/)

This app will run autonomously without user interaction. Therefore, special directive need to be added into Chromium before running this app

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --autoplay-policy=no-user-gesture-required
```

Adding submissions
---

> This app is ment to be run locally since adding A/V files into Git is not optimal

1. Add submission file into [`public/submissions`](public/submissions) directory.
2. Add data to [`data/submissions.ts`](data/submissions.ts) with correct data structure
