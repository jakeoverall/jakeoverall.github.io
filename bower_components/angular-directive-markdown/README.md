# angular-directive-markdown
Forked from https://github.com/btford/angular-markdown-directive.

## Usage
1. `bower install angular-directive-markdown`
2. `bower install showdown`
3. Include showdown and angular-directive-markdown in  your .html file.

```html
<script type="text/javascript" src="bower_components/compressed/showdown/showdown.js"></script>
<script type="text/javascript" src="bower_components/lib/angular-directive-markdown/markdown.js"></script>
```

4. Add `exp.markdown` as a module dependency to your app.
5. Insert the `exp-markdown` directive into your template:

```html
<exp-markdown>   
     #Markdown directive   
     *It works!*  
</exp-markdown>
```
You can also bind the markdown input to a scope variable:

```html
<div exp-markdown="markdown"> 
</div>
<!-- Uses $scope.markdown -->
```
## License
MIT
