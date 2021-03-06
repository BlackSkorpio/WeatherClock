(function(){
	var links = document.links;
	for(var i=0; i < links.length; i++){
		var a = links[i];
		if(a.title !== ''){
			a.addEventListener('mouseover',createTip);
			a.addEventListener('mouseout',cancelTip);
		}
		//console.log(a);
	}
	function createTip(ev){
			var title = this.title;
			this.title = '';
			this.setAttribute("tooltip", title);
			var tooltipWrap = document.createElement("div"); //creates div
			tooltipWrap.className = 'tooltip'; //adds class
			tooltipWrap.appendChild(document.createTextNode(title)); //add the text node to the newly created div.

			var firstChild = document.body.firstChild;//gets the first elem after body
			firstChild.parentNode.insertBefore(tooltipWrap, firstChild); //adds tt before elem
			var padding = 5;
			var linkProps = this.getBoundingClientRect();
			var tooltipProps = tooltipWrap.getBoundingClientRect();
			var topPos = linkProps.top - (tooltipProps.height + padding);
			tooltipWrap.setAttribute('style','top:'+topPos+'px;'+'left:'+linkProps.left+'px;');
	}
	function cancelTip(ev){
			var title = this.getAttribute("tooltip");
			this.title = title;
			this.removeAttribute("tooltip");
			document.querySelector(".tooltip").remove();
	}
})();
