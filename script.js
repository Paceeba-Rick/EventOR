

 
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Modal Handling
    const hireModal = document.getElementById('hireModal');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const chatContainer = document.getElementById('chatContainer');

    // Open Hire Modal
    function openHireModal(providerName) {
        document.getElementById('modalProviderName').textContent = `Hire ${providerName}`;
        hireModal.style.display = 'block';
    }

    // Close Modals
    document.getElementById('closeHireModal').addEventListener('click', () => {
        hireModal.style.display = 'none';
    });

    document.getElementById('closeLoginModal').addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    document.getElementById('closeSignupModal').addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    document.getElementById('chatClose').addEventListener('click', () => {
        chatContainer.style.display = 'none';
    });

    // Cancel Hire
    document.getElementById('cancelHire').addEventListener('click', () => {
        hireModal.style.display = 'none';
    });

    // Confirm Hire
    document.getElementById('confirmHire').addEventListener('click', () => {
        alert('Payment processed! Funds will be held until service completion.');
        hireModal.style.display = 'none';
        chatContainer.style.display = 'block';
    });

    // Login/Signup Toggles
    document.getElementById('loginBtn').addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    document.getElementById('signupBtn').addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    document.getElementById('switchToSignup').addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });

    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    // User Type Selection
    const userTypeBtns = document.querySelectorAll('.user-type-btn');
    userTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            userTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Like Button Functionality
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('liked');
            btn.innerHTML = btn.classList.contains('liked') ? 
                '<i class="fas fa-heart"></i> ' + (parseInt(btn.textContent.match(/\d+/)[0]) + 1) :
                '<i class="far fa-heart"></i> ' + (parseInt(btn.textContent.match(/\d+/)[0]) - 1);
        });
    });

   
    document.getElementById('chatSend').addEventListener('click', sendMessage);
    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        if (message) {
            const chatBody = document.getElementById('chatBody');
            const newMessage = document.createElement('div');
            newMessage.className = 'chat-message message-out';
            newMessage.innerHTML = `
                <span class="message-sender">You</span>
                <div class="message-content">${message}</div>
            `;
            chatBody.appendChild(newMessage);
            input.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
            
            // Simulate reply after 1 second
            setTimeout(() => {
                const replies = [
                    "That sounds great! I'll send you a formal quote shortly.",
                    "I'm available that date. Would you like to schedule a call to discuss details?",
                    "Thanks for the info! Do you have any specific requirements?",
                    "I can definitely accommodate that. My standard package includes..."
                ];
                const randomReply = replies[Math.floor(Math.random() * replies.length)];
                
                const replyMessage = document.createElement('div');
                replyMessage.className = 'chat-message message-in';
                replyMessage.innerHTML = `
                    <span class="message-sender">DJ Mark</span>
                    <div class="message-content">${randomReply}</div>
                `;
                chatBody.appendChild(replyMessage);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }
    }

    const hireBtns = document.querySelectorAll('.hire-btn');
    hireBtns.forEach(btn => {
        if (!btn.id) { // Skip the confirm hire button
            btn.addEventListener('click', () => {
                chatContainer.style.display = 'block';
            });
        }
    });

  
    window.addEventListener('click', (e) => {
        if (e.target === hireModal) hireModal.style.display = 'none';
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === signupModal) signupModal.style.display = 'none';
    });

   
    document.querySelector('.dispute-actions .btn-primary').addEventListener('click', () => {
        alert('Dispute details:\n\nService: Elegant Decor\nAmount: $850\nStatus: Under review\n\nOur team will contact both parties to resolve this matter fairly.');
    });
