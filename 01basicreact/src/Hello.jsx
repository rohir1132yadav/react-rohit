function Hello(){

  let myName ='rohit';
  let number='34';
  let fullName=()=>{
    return 'rohit yadav'
  }
  return <div>
    this is the {fullName()} and project number is {number}
  </div>
}
export default Hello;