module.exports.function = function selectHospital (hospital, selectNum) {
  const console = require("console")
  console.log(hospital)
  console.log(selectNum)
  console.log(hospital.id[0])
  console.log(hospital.name[0])
  return {
    id: hospital.id[0],
    name: hospital.name[0]
  }
}
