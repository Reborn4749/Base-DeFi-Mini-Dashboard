let currentBalance = 0;
let currentStaked = 0;
const connectBtn = document.getElementById("connectBtn");
connectBtn.addEventListener("click", function() { 
    connectBtn.innerText = "Connected 🟢"; 
    connectBtn.style.backgroundColor = "#28a745"; 
    connectBtn.style.color = "white"; 
});
const faucetBtn = document.getElementById("faucetBtn");
faucetBtn.addEventListener("click", function() { 
    currentBalance += 100; 
    document.getElementById("balance").innerText = currentBalance; 
    alert("ได้รับ 100 $BASE!"); 
});
document.getElementById("stakeBtn").addEventListener("click", function() { 
    let amt = Number(document.getElementById("amount").value); 
    if(amt > 0 && amt <= currentBalance) { 
        currentBalance -= amt; 
        currentStaked += amt; 
        document.getElementById("balance").innerText = currentBalance; 
        document.getElementById("staked").innerText = currentStaked; 
        document.getElementById("amount").value = ""; 
    } else { 
        alert("ยอดไม่ถูกต้อง หรือเงินไม่พอ!"); 
    } 
});
