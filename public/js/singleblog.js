const upvoted=()=>{
    console.log("up");
    const blogid=document.getElementById("blogid").innerHTML;

    const req= new XMLHttpRequest;
    req.onreadystatechange=async function (){
        if(this.readyState==4 && this.status==200){
        let data= await JSON.parse(this.responseText);
        document.getElementById("s1").innerHTML=data.upvote;
    }
};
req.open("GET",`http://localhost:3000/blog/upvote/${blogid}`,true);
req.send();
}

const downvoted=()=>{
    const blogid=document.getElementById("blogid").innerHTML;

    const req= new XMLHttpRequest;
    req.onreadystatechange=async function (){
        if(this.readyState==4 && this.status==200){
        let data= await JSON.parse(this.responseText);
        // console.log(msg);
        document.getElementById("s23").innerHTML=data.downvote;
    }
};
req.open("GET",`http://localhost:3000/blog/downvote/${blogid}`,true);
req.send();
}

