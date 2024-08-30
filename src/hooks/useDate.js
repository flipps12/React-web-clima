export const getDayOfPresent = (date) => {
    const dateF = new Date(date);
    const dateNow = new Date();

    console.log(dateF.getDate(), dateF.getMonth())
    switch (dateF.getDate()) {
        case dateNow.getDate():
            console.log("hoy")
            return "Hoy"
            break
        case dateNow.getDate() + 1:
            return "Mañana"
            break
        case dateNow.getDate() - 1:
            return "Ayer"
            break
        default:
            return `${dateF.getDate()}/${dateF.getMonth()}`
            break
    }
}