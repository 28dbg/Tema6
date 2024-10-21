let  intrebari =[]; //-array
let intrebaricon=0; //-contor


//fct pt campuri
function verifica(){
    let intrebareinput=document.getElementById('intrebare_input').value;
    let raspuns1=document.getElementById('raspuns1_input').value;
    let raspuns2= document.getElementById('raspuns2_input').value;
    // if(intrebari.length>0){
    //     if(raspuns1.length>=3){
    //         if(raspuns2.length>=3){
    //             document.getElementById('adaugabuton').disabled=false;
    //         }else{
    //             document.getElementById('adaugabuton').disabled=true;
    //         }
    //     }else{
    //         document.getElementById('adaugabuton').disabled=true;
    //     }
    // }else{
    //     document.getElementById('adaugabuton').disabled=true;
    // }
    if(intrebareinput>0 && raspuns1.length>=3 &&raspuns2.length>=3){
        document.getElementById('adaugabuton').disabled=false;
    }else{
        document.getElementById('adaugabuton').disabled=true;
    }
}


function adauga_intrebare(){
    let intrebareinput= document.getElementById('intrebare_input').value;
    if(intrebareinput.toLowerCase() == 'finish'){
        document.getElementById('mesaj').innerText= "Introducerea intrebarilor s-a incheiat";
        return;
    }
    if(intrebaricon>=5){
        document.getElementById('mesaj').innerText="Limita este de 5 intrebari";
        return;
    }
    let raspuns1=document.getElementById('raspuns1_input').value;
    let raspuns2=document.getElementById('raspuns2_input').value;
    let intrebareobj={
        id: intrebaricon +1,
        intrebare: intrebareinput,
        raspuns: [ raspuns1, raspuns2]
    };
    intrebari.push(intrebareobj);
    intrebaricon++

    document.getElementById('intrebare_input').value='';
    document.getElementById('raspuns1_input').value='';
    document.getElementById('raspuns2_input').value='';
    document.getElementById('adaugabuton').disabled= true;
    document.getElementById('mesaj').innerText="Intrebare adaugata:" + intrebareobj.intrebare;

}   
