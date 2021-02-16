export const allBookings = (component) => {
    return {
        type: 'ALLBOOKINGS',
        payload: component
    }
}
export const newHouse = (component) => {
    return {
        type: 'NEWHOUSE',
        payload: component
    }
}
export const myBooking = (component) => {
    return {
        type: 'MYBOOKING',
        payload: component
    }
}