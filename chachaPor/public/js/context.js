
let 내용 = [
    {제목:"자몽 먹방",내용:"직접 딴 자몽으로 바리스타와 함께 자몽주스를 만들어봐요"},
    {제목:"자몽 따기 체험",내용:"직접 딴 자몽으로 가족 연인들과 추억을 만들어봐요"},
    {제목:"자몽 공방",내용:"직접 딴 자몽으로 생활 필수품을 만들어봐야"},
    {제목:"자몽 가요제",내용:"자몽가요제 우리함꼐 즐거움 만들어봐요"}
];

console.log(내용[0].제목)


for(let i =0 ; i<내용.length; i++){
        
let context = `<div class="card col-md-3 col-sm-6 " style="width: 100%;">
                <img src="/public/img/cont${i+1}.png" class="card-img-top"alt="이벤트1">
                <div class="card-body">
                    <h5 class="card-title">${내용[i].제목}</h5>
                    <p class="card-text">${내용[i].내용}</p>
                    <a href="#" class="btn btn-primary mt-3">상세 보기</a>
                </div>
            </div>`;


    document.querySelector(".card-wrap").innerHTML+= context;
}







