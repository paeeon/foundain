var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Foundation = require('./Foundation');

var ultraHD = new Foundation({
  name: "Ultra HD Invisible Cover Foundation",
  coverage: "buildable",
  finish: ["natural", "dewy"],
  price: 43,
  brand: "Make Up For Ever",
  image: "http://www.sephora.com/productimages/sku/s1708957-main-Lhero.jpg",
  secondaryImages: [
    "http://vanityrouge.com/wp-content/uploads/2015/10/Make-Up-For-Ever-Ultra-HD-Invisible-Finish-Foundation-Liquid-Review.jpg",
    "http://4.bp.blogspot.com/-KFM7yjfZTPs/VfIFRuuz41I/AAAAAAAAR1E/0wTOK_bPLkk/s1600/make-up-for-ever-ultra-hd-invisible-cover-foundation-review-swatches-y235.jpg",
    "http://3.bp.blogspot.com/-iQ3Vp2-M0pU/Vdiaa4UiGGI/AAAAAAAAHuA/21TxYOrBQcg/s1600/makeupforever_ultrahd_foundation_Y235_before_after.jpg"
  ],
  description: `It's one of the most popular liquid foundations out there, and
  a new formulation of the original Make Up For Ever HD Foundation. We recommend
  this product for those with normal skin, and we also suggest using a water-based primer underneath this
  foundation (rather than a silicon-based primer) as we find it helps reduce
  cakiness. The Ultra HD Invisible Cover Foundation will leave you with a natural
  to dewy finish. `
});

var lockIt = new Foundation({
  name: "Lock-It Foundation",
  coverage: "full",
  finish: ["matte"],
  price: 35,
  brand: "Kat Von D",
  image: "http://www.sephora.com/productimages/sku/s1398858-main-Lhero.jpg",
  secondaryImages: [
    "http://3.bp.blogspot.com/-wR5ulUy-LLQ/U9tJIcOBpmI/AAAAAAAAJO8/FwjUJpqW9s0/s1600/kat+von+d+lock+it+tattoo+foundation+in+light+45+review+and+swatches.jpg",
    "https://4.bp.blogspot.com/-H5BfcRHTboE/VuYMRENDeRI/AAAAAAAAAc8/5trYrQHyu4kg3wTeD4Kq4paVkzHBK_Hsg/s1600/Kat%2Bvon%2BD%2Btattoo%2Bfoundation.jpg",
    "http://4.bp.blogspot.com/-DDSsM2cTG0Y/Uq5wqu3_zyI/AAAAAAAABUo/3b0LjS1C5CA/s1600/katvond.jpg"
  ],
  description: `Kat Von D's Lock-It Foundation is an extremely long-wearing,
  full coverage product that easily covers problem areas to leave you with a flawless
  matte finish. Famous for her commitment against animal cruelty, this product
  has been formulated without any animal-derived ingredients and animal testing. `
});

var luminousSilk = new Foundation({
  name: "Luminous Silk Foundation",
  coverage: "buildable",
  finish: ["natural", "dewy"],
  price: 64,
  brand: "Giorgio Armani Beauty",
  image: "http://www.sephora.com/productimages/sku/s1359553-main-Lhero.jpg",
  secondaryImages: [
    "https://img.makeupalley.com/0/5/0/4/2010367.JPG",
    `http://2.bp.blogspot.com/-sTSM_e1V5HI/VGd3ChZkWyI/AAAAAAAAMKY/uEkgM-qD7s4/s1600/Catrice%2BVelvet%2BFinish%2BFoundation%2B010%2B%2BLight%2BVelvet%2B(6).jpg`,
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfPeUxrCfuaxbBlwq8zCVSxAU-UzfPOltB61EKF-IG5T4me_Pfjg"
  ],
  description: `Through YouTube makeup guru recommendations, the Giorgio Armani
  Beauty Luminous Silk Foundation has risen to HG status. Though pricy, its coverage
  is buildable, and it leaves you with an incredibly dewy, photo-ready finish.`
});

var skinButBetter = new Foundation({
  name: "Your Skin But Better CC+ Cream with SPF 50+",
  coverage: "full",
  finish: ["dewy"],
  price: 38,
  brand: "IT Cosmetics",
  image: "http://www.sephora.com/productimages/sku/s1868165-main-Lhero.jpg",
  secondaryImages: [
    "https://2.bp.blogspot.com/-59-fnOtTwVk/V0ZqyCT6xvI/AAAAAAAAywk/paKGS7hQM-0cXJeylccRb-StwNsqqJd9ACKgB/s1600/4-6-16%2000.JPG",
    "http://i1181.photobucket.com/albums/x433/tepeca2000/Foundations/ITCOSMETICSCCCREAMPicMonkeyCollage.jpg",
    "https://2.bp.blogspot.com/-uc2Q7Qy5G_o/Vt9IBl2lOvI/AAAAAAAABw4/F2DVFPn823w/s1600/IT%2BCCSPF50.jpg"
  ],
  description: `This is a popular all-in-one product for those who need sun protection
  in their foundation. Lightweight and moisturizing, but still capable of full
  coverage, Your Skin But Better CC+ Cream with SPF 50+ will create a radiant and
  dewy-looking glow. Unfortunately, they offer a limited shade range, and those with
  darker skin tones ought to look elsewhere.`
});

var luminousWeightless = new Foundation({
  name: "All Day Luminous Weightless Foundation",
  coverage: "buildable",
  finish: ["natural"],
  price: 49,
  brand: "NARS",
  image: "http://www.sephora.com/productimages/sku/s1677962-main-Lhero.jpg",
  secondaryImages: [
    "https://i.ytimg.com/vi/BuY-X7FYkqA/maxresdefault.jpg",
    "https://img.makeupalley.com/hwthumb/980/980/2_5_3_1_2825830.JPG",
    "http://68.media.tumblr.com/28435dd2f6d4920b529f518f7c9d8c7e/tumblr_nj2xraIy5l1qh70jmo1_1280.jpg"
  ],
  description: `NARS All Day Luminous Weightless Foundation could be described as 
  a matte-er version of the classic NARS Sheer Glow, but less matte compared to the
  NARS Sheer Matte. It's high-coverage and incredibly long-wearing, with enough staying power
  to last without primer. There is a bit of a learning curve when it comes to application, however. `
});

var arrOfFoundations = [ultraHD, lockIt, luminousSilk, skinButBetter, luminousWeightless];

function seedFoundations() {
  return Foundation.collection.insert(arrOfFoundations);
}

module.exports = seedFoundations;
