let hospitals = [
  { name: "Apollo Hospital", service: "Cardiology", fees: 45000, rating: 4.7 },
  { name: "Fortis Heart Care", service: "Cardiology", fees: 52000, rating: 4.6 },
  { name: "Medanta Cardiac Centre", service: "Cardiology", fees: 48000, rating: 4.8 },
  { name: "Narayana Heart Hospital", service: "Cardiology", fees: 40000, rating: 4.5 },

  { name: "LifeLine Orthopedic", service: "Orthopedic", fees: 32000, rating: 4.2 },
  { name: "Health Plus Ortho", service: "Orthopedic", fees: 30000, rating: 4.0 },
  { name: "Bone & Joint Clinic", service: "Orthopedic", fees: 28000, rating: 4.1 },
  { name: "OrthoCare Hospital", service: "Orthopedic", fees: 35000, rating: 4.4 },

  { name: "Hope Cancer Institute", service: "Cancer Care", fees: 55000, rating: 4.8 },
  { name: "OncoCare Centre", service: "Cancer Care", fees: 60000, rating: 4.6 },
  { name: "Tata Cancer Hospital", service: "Cancer Care", fees: 50000, rating: 4.9 },
  { name: "Radiant Oncology", service: "Cancer Care", fees: 58000, rating: 4.5 },

  { name: "Care & Cure Child Hospital", service: "Pediatrics", fees: 20000, rating: 4.4 },
  { name: "Child First Clinic", service: "Pediatrics", fees: 22000, rating: 4.5 },
  { name: "Little Angels Hospital", service: "Pediatrics", fees: 18000, rating: 4.3 },
  { name: "Happy Kids Medical", service: "Pediatrics", fees: 21000, rating: 4.6 },

  { name: "City Care Hospital", service: "General Surgery", fees: 25000, rating: 4.3 },
  { name: "Sunrise Surgical Centre", service: "General Surgery", fees: 18000, rating: 3.9 },
  { name: "Prime Surgery Hospital", service: "General Surgery", fees: 27000, rating: 4.4 },
  { name: "Metro General Hospital", service: "General Surgery", fees: 23000, rating: 4.2 }
];

let currentList = [...hospitals];

function displayHospitals(data) {
  const container = document.getElementById("hospitalCards");
  container.innerHTML = "";

  data.forEach(h => {
    container.innerHTML += `
      <div class="card">
        <h3>${h.name}</h3>
        <p><b>Medical Service:</b> ${h.service}</p>
        <p><b>Fees:</b> ₹${h.fees.toLocaleString()}</p>
        <p><b>Rating:</b> ⭐ ${h.rating}</p>
      </div>
    `;
  });
}

function filterService() {
  const selected = document.getElementById("serviceSelect").value;
  currentList = selected === "All"
    ? [...hospitals]
    : hospitals.filter(h => h.service === selected);
  displayHospitals(currentList);
}

function sortByFees() {
  currentList.sort((a, b) => a.fees - b.fees);
  displayHospitals(currentList);
}

function sortByRating() {
  currentList.sort((a, b) => b.rating - a.rating);
  displayHospitals(currentList);
}

displayHospitals(hospitals);