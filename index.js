document.addEventListener('DOMContentLoaded', () => {
    
    let policyBox = document.querySelector('.policy')

    const hasCookie = /policyResponse=(\w.*);?/.exec(document.cookie)

    if  (hasCookie) {
        switch (hasCookie[1]) {
            case 'true':
                policybBox.classList.add('hidden');
                return;
            case 'false':
                window.location.href = 'https://google.com'
                return;
        }
    }


});