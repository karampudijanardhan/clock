    const hou=document.getElementById("hours");
    const mn=document.getElementById("min");
    const sc=document.getElementById("sec");
    setInterval(()=>{
    const currentTime=new Date();
    hou.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    mn.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sc.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
    },);