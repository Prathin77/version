let tournment =[
    {
        playerName:" leo ",
        Rank:"1",
        NoMatches:"350",
        id:"#PL199",
    },
    {
        playerName:" joo  ",
        Rank:"2",
        NoMatches:"312",
        id:"#PL550"
    },
    {
        playerName:" tim ",
        Rank:"3",
        NoMatches:"310",
        id:"#PL444",
    },
    {
        playerName:" jane ",
        Rank:"4",
        NoMatches:"307",
        id:"#PL233", 
    },
    {
        playerName:" kim " ,
        Rank:"5",
        NoMatches:"305",
        id:"#PL022",
    },
    {
        playerName:" kane ",
        Rank:"6",
        NoMatches:"300",
        id:"#PL588",
    },
    {
        playerName:" tow ",
        Rank:"7",
        NoMatches:"290",
        id:"#PL022"
    },
    {
        playerName:" fuse ",
        Rank:"8",
        NoMatches:"250",
        id:"#PL966",
    }
]
// console.table(tournment)
// matches =[]
// for(i of tournment){
//     if (tournment[i] != matches & tournment[tournment.length - 1 - i] != matches){
//         mathches.push(i.playerName)

//finding tournment fixtures//////////////////////////////////////////////////////
function fixtures(){
    let matches =[]
    for(i=0;i<tournment.length/2;i++){
        matches.push(tournment [i].playerName + " vs " + tournment [ tournment.length - 1 - i ].playerName )
    }
     return matches
    // console.table(matches)
}
// fixtures()
// ************************QUALIFIERS******************
function whoQualifiers(){
    let Qualifiers =[]
    let findtennismatches=fixtures()
    for(let i=0;i<findtennismatches.length;i++){
        if(i%2==0){
            Qualifiers.push(findtennismatches[i].slice(0,6))
        }else{
            Qualifiers.push(findtennismatches[i].slice(-6))
        }
    }
    return Qualifiers
}

// ************************Qualifier Matches*********************
function matchesForQualifers(){
    let QualifierMatches =[]
    let findQulifier=whoQualifiers()
    for(let i=0;i<findQulifier.length;i+=2){
        QualifierMatches.push(findQulifier[i] + " vs " + findQulifier[1+i])
    }
    return QualifierMatches
}

// *********************SEMI-FINALIST*************************************
function semiFinal(){
    let semiFinalist =[]
    let semiPlayer=matchesForQualifers()
    for(let i=0;i<semiPlayer.length;i++){
        if(i%2==0){
            semiFinalist.push(semiPlayer[i].slice(0,6))
        }else{
            semiFinalist.push(semiPlayer[i].slice(-6))
        }
    }
    return semiFinalist
}

// ***************************semi final match*******************************
function SemiMatch(){
    let theSemiMatch=[]
    let semifinalgame=semiFinal()
    for(i=0;i<semifinalgame.length;i+=2){
        theSemiMatch.push(semifinalgame[i]+ " vs " + semifinalgame[1+i])
    }
    return theSemiMatch

}
// ***************************finalist****************************************
function finalistOfMatch(){
    let finalist=[]
    let finalplayer=SemiMatch()
    for(i=0;i<finalplayer.length;i++){
        if(i%2==0){
            finalist.push(finalplayer[i].slice(0,6))
        }else{
            finalist.push(finalplayer[i].slice(-6))
        }
    }
    return finalist
}finalistOfMatch(tournment)

// ******************************fianlMatch***************************
function findFinalMatch(){
    let finalgame=[];
    let findFinalists=finalistOfMatch()
    for(i=0;i<findFinalists.length;i+=2){
        finalgame.push(findFinalists[i]+ " vs "+ findFinalists[1+i])
    }
    return finalgame; 
}
// ****************************matchshedule*********************************

function allMatchSchedule(){
    if(tournment.length==16){
        let allMatch={
            "LEAGUES":fixtures(),
            "QUALIFIER":matchesForQualifers(),
            "SEMIFINAL":findSemiFinalMatches(),
            "FINAL":semiFinal()
        }
        console.table(allMatch);
    }else if(tournment.length==8){
        let allMatch={
            "LEAGUES":fixtures(),
            "SEMIFINAL":matchesForQualifers(),
            "FINAL":semiFinal(),
        }
        console.table(allMatch);
    }else if(tournment.length==4){
        let allMatch={
            "LEAGUES":fixtures(),
            "FINAL":matchesForQualifers(),
        }
        console.table(allMatch);
    }
}allMatchSchedule(tournment)