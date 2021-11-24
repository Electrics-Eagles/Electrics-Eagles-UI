Add in your html :
```
<script type="text/javascript" src="./logo.js"></script>
<script type="text/javascript" src="./components_lib.js"></script>
<link rel="stylesheet" href="ui.css">

<script type="text/javascript">
	
const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
</script>



   <button class="desktop-ui-button-yellow"> Hello</button>


```
 For restyle: 
```
<button class="desktop-ui-button-yellow" id="blue"> Hello</button>
   <style>
    #blue {
    	background-color: #ffffff;
    }
</style>
```
