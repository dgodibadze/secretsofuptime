        function toggleItem(element) {
            const checkbox = element.querySelector('.checkbox');
            const text = element.querySelector('.item-text');

            checkbox.classList.toggle('checked');
            text.classList.toggle('checked');
        }

        function calculateScore() {
            const checkedItems = document.querySelectorAll('.checkbox.checked');
            const totalItems = document.querySelectorAll('.checkbox').length;
            const checkedCount = checkedItems.length;
            const percentage = Math.round((checkedCount / totalItems) * 100);

            let icon, title, message, recommendation, color, riskValue;

            if (checkedCount <= 5) {
                icon = '🔴';
                title = 'Critical Risk Level';
                message = 'Your network infrastructure is dangerously vulnerable. Multiple single points of failure could bring your business to a complete standstill with little to no warning.';
                recommendation = 'Immediate action required: Address backup internet, redundant equipment, and business-grade infrastructure before the next outage costs you customers and revenue.';
                color = '#dc2626';
                riskValue = 'CRITICAL';
            } else if (checkedCount <= 11) {
                icon = '🟠';
                title = 'Moderate Risk Level';
                message = 'Your network has some protection, but significant gaps remain. While you\'ve made progress, unaddressed vulnerabilities could still result in extended downtime during peak business hours.';
                recommendation = 'Focus on completing backup systems, redundant connections, and equipment monitoring to move from reactive to proactive network management.';
                color = '#ea580c';
                riskValue = 'MODERATE';
            } else {
                icon = '🟢';
                title = 'Low Risk Level';
                message = 'Excellent work! Your network infrastructure demonstrates enterprise-level reliability planning. You\'ve built multiple layers of protection that will keep your business running even when individual components fail.';
                recommendation = 'Maintain your current standards with regular testing and updates. Consider documenting your setup as a best practice template for future expansion.';
                color = '#16a34a';
                riskValue = 'LOW';
            }

            // Update modal content
            document.getElementById('modalIcon').textContent = icon;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('scorePercentage').textContent = percentage + '%';
            document.getElementById('scorePercentage').style.color = color;
            document.getElementById('scoreRisk').textContent = riskValue + ' RISK';
            document.getElementById('scoreRisk').style.color = color;
            document.getElementById('scoreDetails').textContent = `${checkedCount} of ${totalItems} items completed`;
            document.getElementById('assessmentMessage').textContent = message;
            document.getElementById('recommendationMessage').textContent = recommendation;

            // Show modal
            document.getElementById('resultsModal').classList.add('show');
        }

        function closeModal() {
            document.getElementById('resultsModal').classList.remove('show');
        }

        function resetChecklist() {
            const checkboxes = document.querySelectorAll('.checkbox');
            const texts = document.querySelectorAll('.item-text');

            checkboxes.forEach(checkbox => checkbox.classList.remove('checked'));
            texts.forEach(text => text.classList.remove('checked'));

            closeModal();
        }

        function goToDowntimeCalculator() {
            window.open('https://calculator.davidgodibadze.com/?access=SecretsUptime2025', '_blank');
        }

        // Close modal when clicking outside
        document.getElementById('resultsModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
