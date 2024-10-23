// Simulate dynamic loading of the routine
const routine = [
    { time: "5:00 AM", activity: "Fajr Prayer 🌅, Quran & Hadith 📖", details: "Start the day spiritually refreshed." },
    { time: "5:30 AM - 6:00 AM", activity: "Breakfast 🍽️", details: "Keep it light and nutritious for energy." },
    { time: "6:00 AM - 7:30 AM", activity: "Coding Practice 💻 [LeetCode/CF/CC]", details: "Focus on algorithm problem-solving." },
    { time: "7:30 AM - 8:00 AM", activity: "Get Ready for University 🎒", details: "Quick prep before leaving." },
    { time: "8:00 AM - 1:20 PM", activity: "University Classes 🏫📚", details: "Attend classes and stay engaged." },
    { time: "8:00 AM - 10:00 AM", activity: "**Classwork/Assignments 📚✏️ (Class at 10:30 AM)**", details: "Focus on completing your university tasks." },
    { time: "1:30 PM - 2:30 PM", activity: "Dhuhr Prayer 🕌 & Lunch 🍛", details: "Re-energize with prayer and food." },
    { time: "2:30 PM - 3:30 PM", activity: "Short Nap 🛏️😴", details: "Quick nap for re-energize." },
    { time: "3:30 PM - 4:00 PM", activity: "Classwork/Assignments 📚✏️", details: "Focus on completing your university tasks." },
    { time: "4:00 PM - 4:20 PM", activity: "Asr Prayer 🌅", details: "Take a spiritual break." },
    { time: "4:20 PM - 5:30 PM", activity: "Software Learning 💻📘", details: "Dedicate time for extra software knowledge." },
    { time: "5:30 PM - 6:00 PM", activity: "Maghrib Prayer 🌇", details: "Recenter before the evening starts." },
    { time: "6:00 PM - 10:00 PM", activity: "**CodeChef/Codeforces Contest Day ⚔️**", details: "Compete and improve your skills (gym at 10 PM)." },
    { time: "8:30 PM - 9:30 PM", activity: "**Non-contest Day: Gym 🏋️‍♂️**", details: "Workout time if no contest." },
    { time: "9:30 PM - 10:00 PM", activity: "Coding Practice (if no contest) 💻", details: "Additional coding time for competitions." },
    { time: "10:00 PM - 10:30 PM", activity: "Dinner 🍲", details: "Unwind with a light meal." },
    { time: "10:30 PM - 11:00 PM", activity: "Isha Prayer 🕌", details: "Finish the day spiritually." },
    { time: "11:00 PM", activity: "Sleep 🛏️😴", details: "Get a full 8 hours of rest for a fresh start." },
    { time: "Friday", activity: "Jummah Prayer 🕌", details: "Adjust schedule for Jummah prayer after Dhuhr." }
];

const container = document.querySelector('.routine-container');

routine.forEach(item => {
    const block = document.createElement('div');
    block.classList.add('time-block');
    
    block.innerHTML = `
        <div class="time">${item.time}</div>
        <div class="activity">${item.activity}</div>
        <div class="details">${item.details}</div>
    `;
    
    block.addEventListener('click', () => {
        // Implement any desired interactivity here, e.g., displaying a modal with details.
        // alert(`Details: ${item.details}`);
    });
    
    container.appendChild(block);
});
