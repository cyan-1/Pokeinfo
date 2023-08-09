const { reviewData } = window;

function renderReviews() {
    const cards =  document.getElementById("review-cards")
    cards.innerHTML = " ";
    
    reviewData.forEach(review => {
        console.log(review)
        
        const card = document.createElement("div");
        card.classList.add("review-card");
        const ratingDate = document.createElement("div");
        ratingDate.classList.add("rating-date");

        const username = document.createElement("h4");
        username.innerText=review.username;

        const rating = document.createElement("p");
        rating.innerText = `${review.rating}/5`;
        const date = document.createElement("p");
        date.innerText = review.date;

        ratingDate.appendChild(rating);
        ratingDate.appendChild(date);

        const content = document.createElement("p");
        content.innerText = review.content;

        const line = document.createElement("hr");

        card.appendChild(username);
        card.appendChild(ratingDate);
        card.appendChild(content);
        card.appendChild(line)
        cards.appendChild(card);
    })
}

function addReview() {
    const username = document.getElementById("add-review-username").value;
    const rating = document.getElementById("add-review-rating").value;
    let date = document.getElementById("add-review-date").value;
    const content = document.getElementById("add-review-content").value;
    var currentDate = new Date();
    
    if(username == ""||rating==""||content=="") {
        return false;
    }
    
    if(date !=""){
        currentDate = new Date(date);
    }

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    date = `${year}/${month}/${day}`;

    reviewData.push({
        username:username,
        date:date,
        rating:rating,
        content:content
    })

    renderReviews();

    document.getElementById("add-review-username").value = "";
    document.getElementById("add-review-rating").value = "";
    document.getElementById("add-review-date").value = "";
    document.getElementById("add-review-content").value = "";
}

window.onload = renderReviews()