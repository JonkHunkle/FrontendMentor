async function getData(){
    let foundParent= document.getElementById('circle')
    let summaryTable= document.getElementById('summaryTable')
try {
    const res = await(await fetch('./data.json')).json()
    let total=0
    for (const obj of res){
        total+=obj.score
        let newEl=document.createElement('tr')
        let leftHandTray=document.createElement('td')
        let rightHandTray=document.createElement('td')
        let newIcon=document.createElement('img')
        let newCategory=document.createElement('p')
        let newScore=document.createElement('td')
        let userScore=document.createElement('h3')
        let divisor = document.createElement('div')
        leftHandTray.setAttribute('class', 'leftHandTray')
        rightHandTray.setAttribute('class', 'rightHandTray')
        newEl.setAttribute('id', obj.category)
        newEl.setAttribute('class', 'row')
        newCategory.textContent=obj.category
        userScore.textContent=`${obj.score} `
        divisor.textContent=` / 100`
        newScore.append(divisor)
        newScore.insertBefore(userScore, newScore.firstChild)
        newIcon.setAttribute('src', obj.icon)
        newIcon.setAttribute('alt', "category icon")
        newEl.append(leftHandTray)
        newEl.append(rightHandTray)
        rightHandTray.insertBefore(userScore, rightHandTray.firstChild)
        rightHandTray.append(divisor)
        leftHandTray.insertBefore(newIcon, leftHandTray.firstChild)
        leftHandTray.append(newCategory)
        summaryTable.append(newEl)
    }
    total/=res.length
    const averageElem= document.createElement('h1')
    averageElem.setAttribute('id', 'average')
    averageElem.textContent= Math.round(total)
    foundParent.insertBefore(averageElem, foundParent.firstChild)

} catch (err){
    console.log(err)
}
}

getData()