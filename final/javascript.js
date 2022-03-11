var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

var d = new Date();
var curr_date = d.getDate();
var sup = "";
if (curr_date == 1 || curr_date == 21 || curr_date ==31)
   {
   sup = "st";
   }
else if (curr_date == 2 || curr_date == 22)
   {
   sup = "nd";
   }
else if (curr_date == 3 || curr_date == 23)
   {
   sup = "rd";
   }
else
   {
   sup = "th";kent
   }

var curr_month = d.getMonth();
var curr_year = d.getFullYear();

document.write('this is the ' + curr_date + "<SUP>" + sup + "</SUP> " + ' of '
+ m_names[curr_month] + ", " + curr_year + '&nbsp;&mdash;&nbsp; &copy;' + curr_year + ' michelle coleman &mdash; kent, wa' );

