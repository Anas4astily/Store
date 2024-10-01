export default function TransformDate(date){
 const selecteddate=new window.Date(date);
 const getfullyear=selecteddate.getFullYear();
 const getmonth=(selecteddate.getMonth()+1).toString().padStart(2,"0");
 const getday=selecteddate.getDate().toString().padStart(2,"0");
return `${getfullyear}-${getmonth}-${getday}` // example 2024-10-22
}
    