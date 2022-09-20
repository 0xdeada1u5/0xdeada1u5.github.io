# 0xdeada1u5 • CTF Team, CSD UoC

Deploy locally:
```
zola serve
```

## Members

Go to `content > team > _index.md` and add the next block with your data:

```md
+++
[extra.USERNAME] 
image = "/img/member.webp"
links = [{ url="https://github.com/yourprofilehere", icon="fab fa-github" },
         { url="https://yourwebsite.com", icon="fas fa-globe" } ]
+++
```

For custom profile picture, add your image to /`img/members/` and replace in the above `/img/member.webp` with `"/img/members/USERNAME.webp"`

_Notes: Please keep the files to webp format. Images should be square for best view. No DMCA photos._

## Event posts
Go to `content > events > event_nameYY.md` (replace event_name)
and add contents:
```md
+++
title = "Hacktoberfest 2022"
date = 2022-09-20

[extra]
summary = "Organizing Hacktoberfest"
image = "img/posts/hacktoberfest2022/icon.webp"
+++

content of post here in markdown format
```

Add images to `img/posts/event_nameYY` and use them as above