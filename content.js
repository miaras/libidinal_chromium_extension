function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

var textNodes = textNodesUnder(document);
for (i = 0; i < textNodes.length; i++) {
    var node = textNodes[i];
    if (node.textContent.includes("libidinal")) {
        node.textContent = node.textContent.replaceAll("libidinal", "horny");
    }
}
