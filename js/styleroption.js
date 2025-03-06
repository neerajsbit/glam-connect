
      function toggleDropdowns() {
          var selectedOption = document.getElementById('serviceType').value;
          var dropdowns = document.getElementById('dropdowns').children;
          for (var i = 0; i < dropdowns.length; i++) {
              if (dropdowns[i].id === selectedOption + 'Dropdown') {
                  dropdowns[i].style.display = 'block';
              } else {
                  dropdowns[i].style.display = 'none';
              }
          }
      }

      const serviceTypeSelect = document.getElementById('serviceType');
      const otherInput = document.getElementById('otherInput');

      serviceTypeSelect.addEventListener('change', function() {
          if (serviceTypeSelect.value === 'other') {
              otherLabel.style.display = 'block';
              otherInput.focus(); // Focus on the text input field
              otherInput.select(); // Select the text in the input field
          } else {
              otherLabel.style.display = 'none';
          }
      });

      const stylistTypeSelect = document.getElementById('stylistType');
      const stylistOtherLabel = document.getElementById('stylistOtherLabel');

      stylistTypeSelect.addEventListener('change', function() {
          if (stylistTypeSelect.value === 'other') {
              stylistOtherLabel.style.display = 'block';
              stylistOtherInput.focus(); // Focus on the text input field
              stylistOtherInput.select(); // Select the text in the input field
          } else {
              stylistOtherLabel.style.display = 'none';
          }
      });

      const spaServiceSelect = document.getElementById('spaService');
      const spaOtherLabel = document.getElementById('spaOtherLabel');

      spaServiceSelect.addEventListener('change', function() {
          if (spaServiceSelect.value === 'other') {
              spaOtherLabel.style.display = 'block';
              spaOtherInput.focus(); // Focus on the text input field
              spaOtherInput.select(); // Select the text in the input field
          } else {
              spaOtherLabel.style.display = 'none';
          }
      });

      const artistTypeSelect = document.getElementById('artistType');
      const artistOtherLabel = document.getElementById('artistOtherLabel');

      artistTypeSelect.addEventListener('change', function() {
          if (artistTypeSelect.value === 'other') {
              artistOtherLabel.style.display = 'block';
              artistOtherInput.focus(); // Focus on the text input field
              artistOtherInput.select(); // Select the text in the input field
          } else {
              artistOtherLabel.style.display = 'none';
          }
      });

      const consultantTypeSelect = document.getElementById('consultantType');
      const consultantOtherLabel = document.getElementById('consultantOtherLabel');

      consultantTypeSelect.addEventListener('change', function() {
          if (consultantTypeSelect.value === 'other') {
              consultantOtherLabel.style.display = 'block';
              consultantOtherInput.focus(); // Focus on the text input field
              consultantOtherInput.select(); // Select the text in the input field
          } else {
              consultantOtherLabel.style.display = 'none';
          }
      });