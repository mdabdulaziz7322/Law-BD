import MyBooking from "../pages/MyBooking/MyBooking"

const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("MyBooking")
    if (data){
        const convertedData = JSON.parse(data);
        return convertedData;
    }
    else
    {
        return [];
    }
}

const setToLocalStorage = (id) => {
const collectedData = getDataFromLocalStorage();
if(collectedData.includes(id)){
    alert('Already Booked');
}
else{
    collectedData.push(id);
    const data = JSON.stringify(collectedData);
    localStorage.setItem('MyBooking', data);
    
}
}
const removeFromLocalStorage = (id) => {
    const collectedData = getDataFromLocalStorage();
    const remainingData = collectedData.filter(data => data !== id);
    const data = JSON.stringify(remainingData);
    localStorage.setItem('MyBooking', data);
}

export { getDataFromLocalStorage, setToLocalStorage, removeFromLocalStorage };