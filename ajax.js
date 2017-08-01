var donalds = "https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,nf_calories&appId=" + YOUR_ID "&appKey=" + YOUR_KEY;

$.ajax({
    url: donalds
});