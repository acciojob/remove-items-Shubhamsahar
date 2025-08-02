//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    let select = document.getElementById('colorSelect');
    let selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});
