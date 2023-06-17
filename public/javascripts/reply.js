// const replyareaInputs = document.querySelectorAll('.replyareaInput');

const replyMaxLength = 140;

// replyareaInputs.forEach(function(replyareaInput, index){
//     const replySubmitBtn = document.querySelectorAll('.replySubmitBtn')[index];
//     const replyErrorMsg = document.querySelectorAll('.replyErrorMsg')[index];
//     replyareaInput.addEventListener('input', function () {
//     const replyareaValue = replyareaInput.value.trim();

//     if (replyareaValue.length >= 1 && replyareaValue.length <= replyMaxLength) {
//       replyErrorMsg.textContent = `${replyareaValue.length}/140`
//       replySubmitBtn.disabled = false;
//     } else if (replyareaValue.length > replyMaxLength) {
//         replyareaInput.value = replyareaValue.slice(0, replyMaxLength);
//         replyErrorMsg.textContent = '字數不可超過140字';
//     } else if (replyareaValue.length < 1) {
//         replyErrorMsg.textContent = '內容不可空白';
//         replySubmitBtn.disabled = true;
//     }
//   })
// })

// const tweetList = document.querySelectorAll('.tweetCard');

// tweetList.forEach(function (tweet) {
//   const tweetId = tweet.dataset.tweetid;
//   const replyModal = tweet.querySelector(`#replyModal-${tweetId}`);
//   const replyareaInput = replyModal.querySelector('.replyareaInput');
//   const replySubmitBtn = replyModal.querySelector('.replySubmitBtn');
//   const replyErrorMsg = replyModal.querySelector('.replyErrorMsg');

//   replyareaInput.addEventListener('input', function () {
//     const replyareaValue = replyareaInput.value.trim();

//     if (replyareaValue.length >= 1 && replyareaValue.length <= replyMaxLength) {
//       replyErrorMsg.textContent = `${replyareaValue.length}/140`;
//       replySubmitBtn.disabled = false;
//     } else if (replyareaValue.length > replyMaxLength) {
//       replyareaInput.value = replyareaValue.slice(0, replyMaxLength);
//       replyErrorMsg.textContent = '字數不可超過140字';
//     } else if (replyareaValue.length < 1) {
//       replyErrorMsg.textContent = '內容不可空白';
//       replySubmitBtn.disabled = true;
//     }
//   });
// });

// Update the replyareaInputs selector to target all replyareaInputs
// const replyareaInputs = document.querySelectorAll('.replyareaInput');

// // Loop through each replyareaInput
// replyareaInputs.forEach(function(replyareaInput) {
//   replyareaInput.addEventListener('input', function() {
//     const replyareaValue = replyareaInput.value.trim();
//     const replyModal = replyareaInput.closest('.reply-modal'); // Find the closest reply modal container

//     // Find the corresponding elements within the reply modal
//     const replyErrorMsg = replyModal.querySelector('.replyErrorMsg');
//     const replySubmitBtn = replyModal.querySelector('.replySubmitBtn');

//     if (replyareaValue.length >= 1 && replyareaValue.length <= replyMaxLength) {
//       replyErrorMsg.textContent = `${replyareaValue.length}/140`;
//       replySubmitBtn.disabled = false;
//     } else if (replyareaValue.length > replyMaxLength) {
//       replyareaInput.value = replyareaValue.slice(0, replyMaxLength);
//       replyErrorMsg.textContent = '字數不可超過140字';
//     } else if (replyareaValue.length < 1) {
//       replyErrorMsg.textContent = '內容不可空白';
//       replySubmitBtn.disabled = true;
//     }
//   });
// });

const replyModals = document.querySelectorAll('.replyModal');

replyModals.forEach(function(replyModal, index){
    const replyareaInput = replyModal.closest('.replyareaInput')[index];
    const replySubmitBtn = replyModal.closest('.replySubmitBtn')[index];
    const replyErrorMsg = replyModal.closest('.replyErrorMsg')[index];

    replyareaInput.addEventListener('input', function () {
    
      if (replyareaValue.length >= 1 && replyareaValue.length <= replyMaxLength) {
        replyErrorMsg.textContent = `${replyareaValue.length}/140`
        replySubmitBtn.disabled = false;
      } else if (replyareaValue.length > replyMaxLength) {
            replyareaInput.value = replyareaValue.slice(0, replyMaxLength);
            replyErrorMsg.textContent = '字數不可超過140字';
      } else if (replyareaValue.length < 1) {
            replyErrorMsg.textContent = '內容不可空白';
            replySubmitBtn.disabled = true;
      }
  })
})