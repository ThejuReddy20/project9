function submitData() {
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var phno=document.querySelector("#phno").value;
var email=document.querySelector("#email").value;
var address=document.querySelector("#address").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyear=document.querySelector("#gyear").value;
var gper=document.querySelector("#gper").value;
var iinstitute=document.querySelector("#iinstitute").value;
var ibranch=document.querySelector("#ibranch").value;
var iyear=document.querySelector("#iyear").value;
var iper=document.querySelector("#iper").value;
var sinstitute=document.querySelector("#sinstitute").value;
var sbranch=document.querySelector("#sbranch").value;
var syear=document.querySelector("#syear").value;
var sper=document.querySelector("#sper").value;
var skills=document.querySelector("#skills").value;
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.wibkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
window.open("index.html");
open.onupgradeneeded=function (e) {
  request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
  }
open.onerror=function (error) {
  console.log("error is occured");
  }
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    phno:phno,
    email:email,
    address:address,
    education:[{
      institute:ginstitute,
      branch:gbranch,
      year:gyear,
      per:gper
  } ,
  {institute:iinstitute,
  branch:ibranch,
  year:iyear,
  per:iper
},
{
  institute:sinstitute,
branch:sbranch,
year:syear,
per:sper

} ],

skills:skills


  });


}
window.open("index.html");
}
