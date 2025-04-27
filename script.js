const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))

const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
alert.close()