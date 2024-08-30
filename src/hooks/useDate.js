export const getDayOfPresent = (date) => {
    const dateF = new Date(date);
    const dateNow = new Date();

    switch (dateF.getDate()) {
        case dateNow.getDate():
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