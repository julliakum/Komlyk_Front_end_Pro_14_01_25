console.log('Hello world!');

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    const languages = [];
    form.querySelectorAll('input[name="languages"]:checked').forEach(checkbox => {
      languages.push(checkbox.value);
    });
  
    const resultHTML = `
      <table>
        <tr><th>Ім'я</th><td>${formData.get("firstName")}</td></tr>
        <tr><th>Прізвище</th><td>${formData.get("lastName")}</td></tr>
        <tr><th>Дата народження</th><td>${formData.get("dob")}</td></tr>
        <tr><th>Стать</th><td>${formData.get("gender")}</td></tr>
        <tr><th>Місто</th><td>${formData.get("city")}</td></tr>
        <tr><th>Адреса</th><td>${formData.get("address")}</td></tr>
        <tr><th>Мови</th><td>${languages.join(", ") || "—"}</td></tr>
      </table>
    `;
  
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("result").innerHTML = resultHTML;
  });
  