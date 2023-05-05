var employee = {
    name: "Brian",
    streetAddress: "1st street",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj2 = {...employee[key]}
    delete newObj2[key]
    return newObj2
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}