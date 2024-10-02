{/* <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script> */}
const like = document.getElementById('like_btn');
const singleClick = () => {
    like.style.fontWeight = 'bold';
    like.style.background = '#bbe1fa';
    like.style.color = '#1b262c';
    like.innerHTML = "✓ Liked";
}
const doubleClick = () => {
    like.style.fontWeight = 'normal';
    like.style.background = '#3282b8';
    like.style.color = '#fff';
    like.innerHTML = "Like";
}
var clickCount = 0;
like.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            singleClick();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
}, false);
const reply = (rep) => {
    console.log('hi');
    var res = document.getElementById(rep);
    console.log(res);
    if (res.className == "replies") {
        res.className = "thapa_show";
        res.style.WebkitTransition = 'all 0.3s ease';
        // res.style.transition = 'all 0.3s ease';
        // console.log(thapa_show);
    } else if (res.className == 'thapa_show') {
        // res.className = " ";
        console.log('thapa show');
        res.className = "replies";
    }
}