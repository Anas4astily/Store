export default function Stringslice(data,sliceend){
   return data.length>sliceend?data.slice(1,sliceend)+'...':data
}