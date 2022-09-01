let versions = [
    {
        versionNo: "8.5.10.0",
        versionName: "MIUI 8",
        Releasedate: "16/06/2016",
        Bug_ID: ["#987S"],
        features: ["stability"],
        Authors: ["xiaomi"],
        type: "patch"
    },
    {
        versionNo: "9.6.5.0",
        versionName: "MIUI 9",
        Releasedate: "10/08/2017",
        Bug_ID: ["#996P"],
        features: ["Split screen added"],
        Authors: ["xiaomi"],
        type: "Major"
    },
    {
        versionNo: "10.4.5.0",
        versionName: "MIUI 10",
        Releasedate: "19/06/2018",
        Bug_ID: ["#996P"],
        features: ["AOD"],
        Authors: ["xiaomi"],
        type: "Major"
    },
    {
        versionNo: "11.0.14.0",
        versionName: "MIUI 11",
        Releasedate: "22/10/209",
        Bug_ID: ["#555Y"],
        features: ["stability"],
        Authors: ["xiaomi"],
        type: "Major"
    },
    {
        versionNo: "12.2.7.0",
        versionName: "MIUI 12",
        Releasedate: "27/04/2020",
        Bug_ID: ["#2333"],
        features: ["AOD"],
        Authors: ["xiaomi"],
        type: "Major"
    },
    {
        versionNo: "12.5.5.0",
        versionName: "MIUI 12.5",
        Releasedate: "28/12/2020",
        Bug_ID: ["#66T"],
        features: ["UI"],
        Authors: ["xiaomi"],
        type: "Major"
    },
    {
        versionNo: "13.0.32.0",
        versionName: "MIUI 13",
        Releasedate: "28/12/2021",
        Bug_ID: ["#1211"],
        features: ["UI"],
        Authors: ["xiaomi"],
        type: "Major"
    }]
    const bugsList =[
        {
            BugId : "#66T",
            Bug_type: "battery darins"
         },
        {
            BugId : "#554H",
            Bug_type: "bloatware"
        },
        {
            BugId : "#987S",
            Bug_type:"app crashing"
        },
        {
            BugId:"#555Y",
            Bug_type:"overheating"
        },
        {
            BugId:"#2333",
            Bug_type:"lagging"
        },
        {
            BugId: "#1211",
            Bug_type:"camera issue"
        },
        {
            BugId: "#996P",
            Bug_type:"display issue"
        }
    ]

// console.table(versions.filter(n=>n.versionNo))
// console.table(versions.filter(n=>n.versionName))
// console.table(versions.filter(n=>n.Releasedate.includes(2017)))
// console.table(versions.filter(n=>n.Bugs))
// console.table(versions.filter(n=>n.Authors))



function releaseYear(year) {
    let releasedYear = (versions.filter(n => n.Releasedate.includes(year)))
    console.log(`${releasedYear.length} versions is released in year ${year}`)
    console.table(releasedYear)

}



function identifyByTypes(types) {
    let FindTypes = versions.filter(n => n.type.includes(types))
    console.log(`${FindTypes.length} versions with ${types} type..`)
    console.table(FindTypes.length);
}



function identifingByFeatures(Keyfeature){
    let getFeatures=versions.filter(n=>n.features.includes(Keyfeature))
    console.log(`${getFeatures.length} versions got ${Keyfeature} features...`)
    console.table(getFeatures)
}
identifingByFeatures("stability")

function findingTheAuthor() {
    authorName =[]
    versions.forEach(element =>{
        for (i in element.Authors){
            authorName.push[i]
        }
        
    })
    n = 1
    versionofAuthor = 0
    count =1
    for (i=0; i<authorName.length;i++){
        for(j=1; j<authorName.length;j++){
            if(authorName[i]==authorName[j]){
                n++
            }
            if(count<n){
                count = n
                versionofAuthor=authorName[i]
            }
        }
        add =0
    } 
    console.log(`authors worked in many ${versionofAuthor}and the count is ${count}`)
}
    

function findingVersion(versionid) {
    let versionFind = versions.filter(n => n.versionNo.includes (versionid))
    console.log(`  ${versionFind.length} of the version is ${versionid}`)
    console.table(versionFind)


}
function identifyBugs(bugInfo) {
    count = 0
    bugsList.forEach(elements => {
        if (elements.BugId == bugInfo){
            count++
            console.log("Bug Name:"," ",elements.Bug_type)
        }
    })
    // console.log(versions[0].Bug_ID,'kk')
    let buildBug = versions.filter(n => n.Bug_ID.includes (bugInfo))
    console.log(`BUGID : ${bugInfo} no.of bugs ${buildBug.length}`)
    console.table(buildBug)
}




findingVersion("10.4.5.0")
findingTheAuthor("xiaomi")
identifyByTypes("patch")
releaseYear(2017)
identifyBugs("#2333")