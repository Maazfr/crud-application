const students = [];

function showAddStudentForm() {
  document.getElementById('form-container').classList.remove('hidden');
}

function showSearchStudentForm() {
  document.getElementById('search-container').classList.remove('hidden');
}

function closeForm() {
  document.getElementById('form-container').classList.add('hidden');
  document.getElementById('search-container').classList.add('hidden');
}

function addStudent() {
  const rollNumber = parseInt(document.getElementById('roll-number').value);
  const name = document.getElementById('name').value.trim();

  if (!rollNumber || !name) {
    alert('Please fill out all fields.');
    return;
  }

  const exists = students.find(student => student.rollNumber === rollNumber);
  if (exists) {
    alert('Roll number already exists.');
    return;
  }

  students.push({ rollNumber, name });
  alert('Student added successfully!');
  closeForm();
}

function displayStudents() {
  const studentsList = document.getElementById('students');
  studentsList.innerHTML = '';

  if (students.length === 0) {
    studentsList.innerHTML = '<li>No students available.</li>';
  } else {
    students.forEach(student => {
      const li = document.createElement('li');
      li.textContent = `Roll Number: ${student.rollNumber}, Name: ${student.name}`;
      studentsList.appendChild(li);
    });
  }

  document.getElementById('students-list').classList.remove('hidden');
}

function closeList() {
  document.getElementById('students-list').classList.add('hidden');
}

function searchStudent() {
  const rollNumber = parseInt(document.getElementById('search-roll-number').value);
  if (!rollNumber) {
    alert('Please enter a roll number.');
    return;
  }

  const student = students.find(student => student.rollNumber === rollNumber);
  if (student) {
    alert(`Student Found: Roll Number: ${student.rollNumber}, Name: ${student.name}`);
  } else {
    alert('Student not found.');
  }

  closeForm();
}
