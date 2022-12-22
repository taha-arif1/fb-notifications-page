const unReadMessages = document.querySelectorAll(".notif-cardunread");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark-all");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) =>{
    message.addEventListener("click", () =>{
         message.classList.remove("notif-cardunread");
         const newUnreadMessages = document.querySelectorAll(".notif-cardunread"); 
         unread.innerText = newUnreadMessages.length;
    })
})

markAll.addEventListener("click", () => {
unReadMessages.forEach((message) => {
    message.classList.remove("notif-cardunread")

})
const newUnreadMessages = document.querySelectorAll(".notif-cardunread");
unread.innerText = newUnreadMessages.length;
})





