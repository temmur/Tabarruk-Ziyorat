import { onMounted } from "vue";

export function formatMoney(number: number) {
    // Convert the number to a string
    let strNumber = number.toString();
  
    // Use regex to add commas for every 3 digits before the decimal point
    strNumber = strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // Check if the number has decimal places
    if (strNumber.indexOf(".") !== -1) {
      // Use regex to format the decimal places to 2 digits
      strNumber = strNumber.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
  
    // Add a currency symbol, such as "$" or "€", if needed
    // strNumber = "$" + strNumber;
    onMounted(() => {
        console.log(strNumber);
    })
    return strNumber;
  }