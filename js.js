<script>
var images = ["image1.jpg", "image2.jpg"];
var current = 0;
function swapImage() {
  current = (current + 1) % images.length;
  document.body.style.backgroundImage = "url('" + images[current] + "')";
}
</script>