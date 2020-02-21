function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

var textNodes = textNodesUnder(document);
for (i = 0; i < textNodes.length; i++) {
    var node = textNodes[i];
    if (node.textContent.includes("notion")) {
        node.textContent = node.textContent.replace("notion", "Notion");
    }

    if (node.textContent.includes("idea")) {
    node.textContent = node.textContent.replace("idea", "Idea");
    }

    if (node.textContent.includes("concept")) {
    node.textContent = node.textContent.replace("concept", "Concept");
    }
}
