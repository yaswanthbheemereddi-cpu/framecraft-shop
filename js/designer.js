document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const uploadPlaceholder = document.getElementById('uploadPlaceholder');
    const frameContainer = document.getElementById('frameContainer');
    const userImage = document.getElementById('userImage');
    const frameBorder = document.getElementById('frameBorder');
    const resetBtn = document.getElementById('resetBtn');
    const totalPriceEl = document.getElementById('totalPrice');
    const orderBtn = document.getElementById('orderBtn');

    // State
    let config = {
        style: 'modern',
        color: '#111',
        size: '8x12',
        sizeName: '8 x 12 Inches',
        border: '0',
        basePrice: 299,
        borderPrice: 0
    };

    // --- File Upload Logic ---
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadPlaceholder.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        uploadPlaceholder.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadPlaceholder.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    function handleFile(file) {
        if (!file.type.startsWith('image/')) {
            alert('Please upload a valid image file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            userImage.src = e.target.result;
            uploadPlaceholder.style.display = 'none';
            frameContainer.style.display = 'block';
            resetBtn.style.display = 'inline-flex';
            updateFrameVisuals();
        };
        reader.readAsDataURL(file);
    }

    resetBtn.addEventListener('click', () => {
        userImage.src = '';
        fileInput.value = '';
        uploadPlaceholder.style.display = 'flex';
        frameContainer.style.display = 'none';
        resetBtn.style.display = 'none';
    });

    // --- Options Logic ---
    function setupOptions(groupId, stateKey, callback) {
        const buttons = document.querySelectorAll(`#${groupId} .option-btn, #${groupId} .color-btn`);
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active from all siblings
                buttons.forEach(b => b.classList.remove('active'));
                // Add active to clicked
                const target = e.currentTarget;
                target.classList.add('active');
                
                // Update state
                if (target.dataset.color) config.color = target.dataset.color;
                if (target.dataset.style) config.style = target.dataset.style;
                if (target.dataset.size) {
                    config.size = target.dataset.size;
                    config.sizeName = target.innerText;
                    config.basePrice = parseInt(target.dataset.price);
                }
                if (target.dataset.border) {
                    config.border = target.dataset.border;
                    config.borderPrice = parseInt(target.dataset.bprice);
                }

                updateFrameVisuals();
                updatePrice();
            });
        });
    }

    setupOptions('styleOptions');
    setupOptions('colorOptions');
    setupOptions('sizeOptions');
    setupOptions('borderOptions');

    // --- Visual Updates ---
    function updateFrameVisuals() {
        // Frame Thickness / Style
        let frameThickness = '20px';
        if (config.style === 'acrylic') frameThickness = '5px';
        if (config.style === 'metal') frameThickness = '10px';
        
        frameContainer.style.border = `${frameThickness} solid ${config.color}`;
        
        // Inner Border (Matte)
        let padding = '0px';
        if (config.border === '1') padding = '20px';
        if (config.border === '2') padding = '40px';
        
        frameContainer.style.padding = padding;
        
        // Aspect Ratio based on size
        if (config.size === 'a4') {
            frameContainer.style.width = '300px';
            frameContainer.style.height = '424px';
        } else if (config.size === '8x12') {
            frameContainer.style.width = '320px';
            frameContainer.style.height = '480px';
        } else if (config.size === 'a3') {
            frameContainer.style.width = '400px';
            frameContainer.style.height = '565px';
        }
    }

    // --- Price Update ---
    function updatePrice() {
        const total = config.basePrice + config.borderPrice;
        totalPriceEl.innerText = `₹${total}`;
    }

    // --- Order via WhatsApp ---
    orderBtn.addEventListener('click', () => {
        if (!userImage.src || userImage.src === window.location.href) {
            alert('Please upload a photo first to visualize your frame.');
        }

        const total = config.basePrice + config.borderPrice;
        const msg = `Hi Junior's Printing World,%0A%0AI would like to order a Custom Frame with the following specifications:%0A%0A*Style:* ${config.style}%0A*Color:* ${config.color}%0A*Size:* ${config.sizeName}%0A*Border:* ${config.border} Inch%0A*Estimated Price:* ₹${total}%0A%0AI have my photo ready to send!`;
        
        window.open(`https://wa.me/919030829667?text=${msg}`, '_blank');
    });

    // Initialize visuals
    updateFrameVisuals();
    updatePrice();
});
