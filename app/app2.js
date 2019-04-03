var tagsarr=[];
var tags = document.getElementsByTagName('*');
function counttag(){
    for(var i=0;i<tags.length;i++)
    tagsarr.push((tags[i].tagname).tolowercase());
}
var temp=[];
var tag=[];
for (var i = 0; i < tagsarr.length; i++) {
    for (var j = i+1; j < tagsarr.length+1; j++) {
      if (tagsarr[i] == tagsarr[j]) {
        temp.push(tagsarr[j]);
        tagsarr.splice(j,1);
        j--;
      }
      if (j == tagsarr.length -i) {
        temp.push(tagsarr[i]);
        tagsarr.splice(i,1);
        i--;
        tag.push(temp);
        temp = [];
      }
    }
  }
  return tag;
console.log(counttag());