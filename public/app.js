// put a table in place that displays the hall name and location for all dining halls on campus.

// "name"
// hall_name:
   // type: DataTypes.STRING,



// "location"
// hall_address: 
  //  type: DataTypes.STRING
  
  
async function hall (){
  const hallfetch = await fetch ('/api/dining');
  const hallInfo = await hallfetch.json();
  const arrayHall = hallInfo.data;
  const gather = document.querySelector('.solution');

  arrayHall.forEach ((element) => {
    const makeRows = document.createElement('tr');
    makeRows.innerHTML = `
    <td>${element.hall_name}</td>
    <td>${element.hall_address}</td>
    `
  });
  window.onload = hall();
}

