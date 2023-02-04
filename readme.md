## Use

``` sh
git clone git@github.com:plan-devet/sumske-vile.git
cd sumske-vile
npm install
npm start
```

## Publish 

Site is served on github pages from gh-pages branch. Gh-pages branch is copy of dist folder made with:

``` sh
git subtree push --prefix dist origin gh-pages
```

run dist to create production version in dist and then push to commit both main and gh-pages branches:
``` sh
npm run dist
git commit -m '...'
npm run push
```


## References

https://github.com/twbs/examples/tree/main/webpack  
https://gist.github.com/cobyism/4730490  

