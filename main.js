let names = document.getElementById('name');
let adress = document.getElementById('ad');
let number = document.getElementById('num');
let p1 = document.getElementById('p1');
let pp1 = document.getElementById('pp1');
let p1t = document.getElementById('p1t');
let pp1t = document.getElementById('pp1t');
let p2 = document.getElementById('p2');
let pp2 = document.getElementById('pp2');
let p2t = document.getElementById('p2t');
let pp2t = document.getElementById('pp2t')
let p3 = document.getElementById('p3');
let p3t = document.getElementById('p3t');
let p4 = document.getElementById('p4');
let p4t = document.getElementById('p4t');
let p5 = document.getElementById('p5');
let p5t = document.getElementById('p5t');
let p6 = document.getElementById('p6');
let p6t = document.getElementById('p6t');
let p7 = document.getElementById('p7');
let p7t = document.getElementById('p7t');
let p8 = document.getElementById('p8');
let p8t = document.getElementById('p8t');
let p9 = document.getElementById('p9');
let p9t = document.getElementById('p9t');
let p10 = document.getElementById('p10');
let p10t = document.getElementById('p10t');
let button = document.getElementById('b');
let ser = document.getElementById('search')
let table = document.getElementById('tb');
let s,mood = 0;
if(localStorage.length > 0){
    console.log("hi");
    var data = JSON.parse(localStorage.walid);
}else{
    var data = [];
};
read();

let dar = {};
//run
function run(){
    dar = {
        names:names.value,
        adress:adress.value,
        number:number.value,
        p1:p1.value,
        pp1:pp1.value,
        p2:p2.value,
        pp2:pp2.value,
        p3:p3.value,
        p4:p4.value,
        p5:p5.value,
        p6:p6.value,
        p7:p7.value,
        p8:p8.value,
        p9:p9.value,
        p10:p10.value,
    }
    if(p1.value == ''){dar.p1 = '0'}
    if(pp1.value == ''){dar.pp1 = '0'}
    if(p2.value == ''){dar.p2 = '0'}
    if(pp2.value == ''){dar.pp2 = '0'}
    if(p3.value == ''){dar.p3 = '0'}
    if(p4.value == ''){dar.p4 = '0'}
    if(p5.value == ''){dar.p5 = '0'}
    if(p6.value == ''){dar.p6 = '0'}
    if(p7.value == ''){dar.p7 = '0'}
    if(p8.value == ''){dar.p8 = '0'}
    if(p9.value == ''){dar.p9 = '0'}
    if(p10.value == ''){dar.p10 = '0'}
    if(dar.names != '' && dar.adress != '' && dar.number!= ''){
    if(mood == 0){
        data.push(dar);
    }else{
        data[s] = dar;
        mood = 0
    }}
        localStorage.walid = JSON.stringify(data);
        button.value = 'Add';
        window.location.reload();
        //read();
        //clear();
};
//read
function read(){
    let span = document.getElementById('s');
    span.innerHTML = data.length
    let ta = '';
    let newp1tdis = 0;
    let newpp1tdis = 0;
    let newp2tdis = 0;
    let newpp2tdis = 0;
    let newp3tdis = 0;
    let newp4tdis = 0;
    let newp5tdis = 0;
    let newp6tdis = 0;
    let newp7tdis = 0;
    let newp8tdis = 0;
    let newp9tdis = 0;
    let newp10tdis = 0;

    
    for(let i=0;i<data.length;i++){
        ta += '<tr style="height: 20px;"><td>' + (i+1) + '</td><td>'+ data[i].names + '</td><td>' + data[i].adress + '</td><td>' + data[i].number + '</td><td>' + data[i].p1 + '</td><td>' + data[i].pp1 + '</td><td>' + data[i].p2 + '</td><td>' + data[i].pp2 + '</td><td>' + data[i].p3 + '</td><td>' + data[i].p4 + '</td><td>' + data[i].p5 + '</td><td>' + data[i].p6 + '</td><td>' + data[i].p7 + '</td><td>' + data[i].p8 + '</td><td>' + data[i].p9 + '</td><td>' + data[i].p10 + '</td><td><button class="btn btn-success" onclick="update(' + i + ')" data-bs-toggle="modal" data-bs-target="#st">update</button></td><td><button class="btn btn-danger" onclick="deleteOne(' + i + ')">delete</button></td></tr>';
        newp1tdis += parseInt(data[i].p1,10);
        newpp1tdis += parseInt(data[i].pp1,10);
        newp2tdis += parseInt(data[i].p2,10);
        newpp2tdis += parseInt(data[i].pp2,10);
        newp3tdis += parseInt(data[i].p3,10);
        newp4tdis += parseInt(data[i].p4,10);
        newp5tdis += parseInt(data[i].p5,10);
        newp6tdis += parseInt(data[i].p6,10);
        newp7tdis += parseInt(data[i].p7,10);
        newp8tdis += parseInt(data[i].p8,10);
        newp9tdis += parseInt(data[i].p9,10);
        newp10tdis += parseInt(data[i].p10,10);
    };
    table.innerHTML = ta;
    p1t.innerHTML = ''+ (1000 - newp1tdis) + '';
    pp1t.innerHTML = ''+ (1000 - newpp1tdis) + '';
    p2t.innerHTML = ''+ (1000 - newp2tdis) + '';
    pp2t.innerHTML = ''+ (1000 - newpp2tdis) + '';
    p3t.innerHTML = ''+ (1000 - newp3tdis) + '';
    p4t.innerHTML = ''+ (1000 - newp4tdis) + '';
    p5t.innerHTML = ''+ (1000 - newp5tdis) + '';
    p6t.innerHTML = ''+ (1000 - newp6tdis) + '';
    p7t.innerHTML = ''+ (1000 - newp7tdis) + '';
    p8t.innerHTML = ''+ (1000 - newp8tdis) + '';
    p9t.innerHTML = ''+ (1000 - newp9tdis) + '';
    p10t.innerHTML = ''+ (1000 - newp10tdis) + '';
};
//clear
function clear(){
    names.value = '';
    adress.value = '';
    number.value = '';
    p1.value = '';
    pp1.value = '';
    p2.value = '';
    pp2.value = '';
    p3.value = '';
    p4.value = '';
    p5.value = '';
    p6.value = '';
    p7.value = '';
    p8.value = '';
    p9.value = '';
    p10.value = '';
};
//deleteOne
function deleteOne(v){
    data.splice(v,1);
    localStorage.walid = JSON.stringify(data);
    read()
};
//update
function update(v){
    mood=1
    names.value = data[v].names;
    adress.value = data[v].adress;
    number.value = data[v].number;
    p1.value = data[v].p1;
    pp1.value = data[v].pp1;
    p2.value = data[v].p2;
    pp2.value = data[v].pp2
    p3.value = data[v].p3;
    p4.value = data[v].p4;
    p5.value = data[v].p5;
    p6.value = data[v].p6;
    p7.value = data[v].p7;
    p8.value = data[v].p8;
    p9.value = data[v].p9;
    p10.value = data[v].p10;
    
    s = v;
    button.value = 'Update'
}
//search
function search(value){
    if(value == ''){
        read()
    }
    let ta = '' ;
    for(let i=0;i<data.length;i++){
        if(data[i].names.toLowerCase().includes(value.toLowerCase())){
            ta += '<tr style="height: 20px;"><td>' + (i+1) + '</td><td>'+ data[i].names + '</td><td>' + data[i].adress + '</td><td>' + data[i].number + '</td><td>' + data[i].p1 + '</td><td>' + data[i].pp1 + '</td><td>' + data[i].p2 + '</td><td>' + data[i].pp2 + '</td><td>' + data[i].p3 + '</td><td>' + data[i].p4 + '</td><td>' + data[i].p5 + '</td><td>' + data[i].p6 + '</td><td>' + data[i].p7 + '</td><td>' + data[i].p8 + '</td><td>' + data[i].p9 + '</td><td>' + data[i].p10 + '</td><td><button class="btn btn-success" onclick="update(' + i + ')" data-bs-toggle="modal" data-bs-target="#st">update</button></td><td><button class="btn btn-danger" onclick="deleteOne(' + i + ')">delete</button></td></tr>';
        }
    };
    if(ta == ''){
        ta = '<tr><th class="text-center" colspan="18">not found</th></tr>'
    }
    table.innerHTML = ta;
};
function test(){
    console.log('goood')
}
/*
.table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #212529;
  --bs-table-border-color: #4d5154;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
*/ 
/*
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Client</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card-body" id="r">

            <h5 class="card-title text-center">Client</h5>
            <label for="name" style="font-weight: bold;text-align: center;">nome</label>
            <input type="text" class="form-control" placeholder="name" id="name">
            <label for="name" style="font-weight: bold;">adress</label>
            <input type="text" class="form-control" placeholder="Adress" id="ad">
            <label for="name" style="font-weight: bold;">telephone</label>
            <input type="text" class="form-control" placeholder="telephone" id="num">
            <label for="name" style="font-weight: bold;">Pose de cable FO dans Goulotte</label>
            <div class="row">
              <div class="col-sm-6">
                <input type="number" class="form-control" placeholder="(U)" id="p1">
              </div>
              <div class="col-sm-6">
                <input type="number" class="form-control" placeholder="ML" id="pp1">
              </div>
            </div>
            <label for="name" style="font-weight: bold;">Pose de cable de branchement Fo sans gouloftte</label>
            <div class="row">
              <div class="col-sm-6">
                <input type="number" class="form-control" placeholder="U" id="p2">
              </div>
              <div class="col-sm-6">
                <input type="number" class="form-control" placeholder="ML" id="pp2">
              </div>
            </div>
            <label for="name" style="font-weight: bold;">Pose et raccordement de prise optique</label>
            <input type="number" class="form-control" placeholder="(U)" id="p3">
            <label for="name" style="font-weight: bold;">Fourniture et pose de goulotte 20*15mm</label>
            <input type="number" class="form-control" placeholder="(ML)" id="p4">
            <label for="name" style="font-weight: bold;">Fourniture et pose de goulotte 60*20mm</label>
            <input type="number" class="form-control" placeholder="(ML)" id="p5">
            <label for="name" style="font-weight: bold;">Raccordement de fibre optique avec</label>
            <input type="number" class="form-control" placeholder="U" id="p6">
            <label for="name" style="font-weight: bold;">Foutniture et pose gaine a ressort</label>
            <input type="number" class="form-control" placeholder="(ML)" id="p7">
            <label for="name" style="font-weight: bold;">Reperage et etiquetage</label>
            <input type="number" class="form-control" placeholder="(U)" id="p8">
            <label for="name" style="font-weight: bold;">Persement de beton entre pallier</label>
            <input type="number" class="form-control" placeholder="(U)" id="p9">
            <label for="name" style="font-weight: bold;">Persement mural</label>
            <input type="number" class="form-control" placeholder="(U)" id="p10">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
*/