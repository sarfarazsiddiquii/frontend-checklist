document.addEventListener('DOMContentLoaded', () => {
    const allPagesCheckbox = document.getElementById('all-pages');
    const pageCheckboxes = document.querySelectorAll('.custom-checkbox:not(#all-pages)');
    
    allPagesCheckbox.addEventListener('change', (e) => {
        pageCheckboxes.forEach(checkbox => {
            checkbox.checked = e.target.checked;
        });
    });

    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(pageCheckboxes).every(cb => cb.checked);
            
            allPagesCheckbox.checked = allChecked;
            if (allChecked) {
                allPagesCheckbox.indeterminate = false;
            }
        });
    });

    const checkboxes = document.querySelectorAll('.custom-checkbox');
    checkboxes.forEach(checkbox => {
        const label = checkbox.nextElementSibling;
        
        label.addEventListener('mouseenter', () => {
            if (!checkbox.checked) {
                label.classList.add('hover');
            }
        });
        
        label.addEventListener('mouseleave', () => {
            label.classList.remove('hover');
            if (checkbox.checked) {
                label.classList.add('mouse-outside');
            }
        });
        
        label.addEventListener('mousedown', () => {
            if (!checkbox.checked) {
                label.classList.add('pressing');
            } else {
                label.classList.add('pressing-to-uncheck');
            }
        });
        
        label.addEventListener('mouseup', () => {
            label.classList.remove('pressing');
            label.classList.remove('pressing-to-uncheck');
        });
        
        checkbox.addEventListener('focus', () => {
            label.classList.add('focus');
        });
        
        checkbox.addEventListener('blur', () => {
            label.classList.remove('focus');
        });
    });

    document.querySelector(".done-btn").addEventListener("click", () => {
        const selectedOptions = [];
        const checkboxes = document.querySelectorAll(".checkbox-list input[type='checkbox']");
        
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedOptions.push(checkbox.id);
            }
        });
        
        alert(`Selected: ${selectedOptions.join(", ")}`);
    });
});
