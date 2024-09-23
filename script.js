document.addEventListener('DOMContentLoaded', function () {
    const langItem = document.querySelector('.lang-item');
  
    if (langItem) {
      langItem.addEventListener('click', function (event) {
        const dropdownList = this.querySelector('.lang-drpdwn-list');
  
        if (dropdownList) {
          event.stopPropagation(); // Prevent the event from bubbling up
          dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
        }
      });
  
      // Hide dropdown when clicking outside
      document.addEventListener('click', function () {
        const dropdownList = langItem.querySelector('.lang-drpdwn-list');
        if (dropdownList) {
          dropdownList.style.display = 'none';
        }
      });
    }
  });
  