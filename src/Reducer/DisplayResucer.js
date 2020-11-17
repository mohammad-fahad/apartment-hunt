import AllBookings from "../Component/Dashboard/Admin/AllBookings/AllBookings";

const displayReducer = (state = AllBookings, action) => {
    switch (action.type) {
        case 'ALLBOOKINGS':
            return action.payload;
        case 'NEWHOUSE':
            return action.payload;
        case 'MYBOOKING':
            return action.payload;
        default:
            return state;
    }

}
export default displayReducer;