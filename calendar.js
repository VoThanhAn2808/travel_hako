

function createCalendar(elementId, options) {
  const calendarElement = document.getElementById(elementId);

  if (!calendarElement) {
    throw new Error(`Element with ID "${elementId}" not found.`);
  }

  const defaultOptions = {
    altInput: true,
    dateFormat: "d-m-Y",
    locale: "vi",
  };

  const mergedOptions = Object.assign({}, defaultOptions, options);

  flatpickr(calendarElement, mergedOptions);

  calendarElement.addEventListener('click', () => {
    calendarElement.classList.toggle('active');
  });
}


document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.toggle-item');

  items.forEach(function (item, index) {
    var toggleParagraph = document.getElementById('toggle-paragraph-' + (index + 1));
    var toggleFooter = document.getElementById('toggle-footer-' + (index + 1));
    var toggleIcon = item.querySelector('.toggle-icon');
    var spanLine = item.querySelector('.span-line');

    item.addEventListener('click', function () {

      toggleParagraph.classList.toggle('hidden');

      toggleFooter.classList.toggle('hidden');

      toggleIcon.classList.toggle('active');

      spanLine.classList.toggle('active');
    });
  });
});



