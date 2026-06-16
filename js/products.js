// PRODUCTS_DATA_START
const products = [
  {
    "id": 1,
    "name": "Single Person Blood Art (A4)",
    "price": 2500,
    "cat": "Blood Art",
    "img": "assets/blood_art.png",
    "tag": "NEW",
    "desc": "Stunning handcrafted red ink portrait on textured paper in premium black A4 frame.",
    "options": [
      {
        "name": "A4 Size",
        "price": 2500
      },
      {
        "name": "A3 Size",
        "price": 3500
      }
    ]
  },
  {
    "id": 2,
    "name": "Single Person Blood Art (A3)",
    "price": 3500,
    "cat": "Blood Art",
    "img": "assets/blood_art.png",
    "tag": "HOT",
    "desc": "Stunning handcrafted red ink portrait on textured paper in premium black A3 frame.",
    "options": [
      {
        "name": "A3 Size",
        "price": 3500
      }
    ]
  },
  {
    "id": 3,
    "name": "Double Person Blood Art (A4)",
    "price": 3500,
    "cat": "Blood Art",
    "img": "assets/blood_art.png",
    "tag": "NEW",
    "desc": "Beautiful double portrait handcrafted in signature red ink in premium black A4 frame.",
    "options": [
      {
        "name": "A4 Size",
        "price": 3500
      },
      {
        "name": "A3 Size",
        "price": 4500
      }
    ]
  },
  {
    "id": 4,
    "name": "Double Person Blood Art (A3)",
    "price": 4500,
    "cat": "Blood Art",
    "img": "assets/blood_art.png",
    "tag": "HOT",
    "desc": "Beautiful double portrait handcrafted in signature red ink in premium black A3 frame.",
    "options": [
      {
        "name": "A3 Size",
        "price": 4500
      }
    ]
  },
  {
    "id": 5,
    "name": "A4 Customized Frame",
    "price": 120,
    "cat": "Customized Frames",
    "img": "assets/custom_frame.png",
    "tag": "POPULAR",
    "desc": "Simple sleek border frame with premium photo print. Perfect for tabletops or walls."
  },
  {
    "id": 6,
    "name": "8x12 Designer Photo Frame",
    "price": 299,
    "cat": "Designer Photo Frames",
    "img": "assets/custom_frame.png",
    "tag": "BEST",
    "desc": "Premium finish designer frame with professional quality color print.",
    "options": [
      {
        "name": "Standard (No Border)",
        "price": 299
      },
      {
        "name": "1 Inch Border",
        "price": 349
      },
      {
        "name": "2 Inch Border",
        "price": 399
      }
    ]
  },
  {
    "id": 7,
    "name": "8x12 Frame (1 Inch Border)",
    "price": 349,
    "cat": "Designer Photo Frames",
    "img": "assets/custom_frame.png",
    "tag": "POPULAR",
    "desc": "Sleek frame with elegant 1 inch border. Includes high quality photo printing."
  },
  {
    "id": 8,
    "name": "8x12 Frame (2 Inch Border)",
    "price": 399,
    "cat": "Designer Photo Frames",
    "img": "assets/custom_frame.png",
    "tag": "PREMIUM",
    "desc": "Wide 2 inch border designer frame for that classic museum look."
  },
  {
    "id": 9,
    "name": "Plain White Customized Mug",
    "price": 120,
    "cat": "Customized Mugs",
    "img": "assets/premium_mug.png",
    "tag": "CLASSIC",
    "desc": "Premium ceramic white mug with custom high-definition photo print."
  },
  {
    "id": 10,
    "name": "Custom Magic Mug",
    "price": 499,
    "cat": "Customized Mugs",
    "img": "assets/premium_mug.png",
    "tag": "HOT",
    "desc": "Heat-sensitive color changing ceramic mug. Reveal your photo with hot liquid."
  },
  {
    "id": 11,
    "name": "Wedding Ornate Gold Frame",
    "price": 599,
    "cat": "Wedding Frames",
    "img": "assets/frame_wedding.png",
    "tag": "NEW",
    "desc": "Luxury gold trim wedding photo frame with beautiful traditional textures."
  },
  {
    "id": 12,
    "name": "Collage Family Frame (6 Photos)",
    "price": 499,
    "cat": "Collage Frames",
    "img": "assets/frame_collage.png",
    "tag": "POPULAR",
    "desc": "Beautiful wood grain finish collage layout frame for six family memories."
  },
  {
    "id": 13,
    "name": "Premium Wooden Frame",
    "price": 399,
    "cat": "Wooden Frames",
    "img": "assets/frame_wooden.png",
    "tag": "NATURAL",
    "desc": "Bespoke dark walnut frame with natural wood texture and organic grains."
  },
  {
    "id": 14,
    "name": "Acrylic Floating Frame",
    "price": 799,
    "cat": "Acrylic Frames",
    "img": "assets/frame_acrylic.png",
    "tag": "PREMIUM",
    "desc": "Ultra-modern clear acrylic frame. Photo appears to float magically on your wall."
  },
  {
    "id": 15,
    "name": "Metal Industrial Frame",
    "price": 699,
    "cat": "Metal Frames",
    "img": "assets/frame_metal.png",
    "tag": "NEW",
    "desc": "Brushed metallic gunmetal frame with sharp, clean lines for modern interiors."
  },
  {
    "id": 16,
    "name": "Classic Certificate Frame",
    "price": 249,
    "cat": "Certificate Frames",
    "img": "assets/frame_certificate.png",
    "tag": "CLASSIC",
    "desc": "Professional certificate frame with gold inner bezel line to showcase achievements."
  },
  {
    "id": 17,
    "name": "Love Heart Coffee Mug",
    "price": 199,
    "cat": "Customized Mugs",
    "img": "assets/premium_mug.png",
    "tag": "GIFT",
    "desc": "Beautiful red interior ceramic mug with custom photo print for your loved one."
  },
  {
    "id": 18,
    "name": "Collage Magic Mug",
    "price": 549,
    "cat": "Customized Mugs",
    "img": "assets/premium_mug.png",
    "tag": "NEW",
    "desc": "Heat-reveal magic mug featuring a custom collage of up to 4 photos."
  },
  {
    "id": 19,
    "name": "Luxury Gold Trim Frame",
    "price": 899,
    "cat": "Premium Frames",
    "img": "assets/frame_wedding.png",
    "tag": "HOT",
    "desc": "Ornate, heavy-duty gold accent frame. Bring royal elegance to your living room."
  },
  {
    "id": 20,
    "name": "Panoramic Wall Frame",
    "price": 1199,
    "cat": "Premium Frames",
    "img": "assets/custom_frame.png",
    "tag": "PREMIUM",
    "desc": "Wide landscape wall frame. Perfect for panoramic nature shots and family portraits."
  },
  {
    "id": 21,
    "name": "Luxury Leather-Wrapped Frame",
    "price": 1099,
    "cat": "Premium Frames",
    "img": "assets/frame_leather.png",
    "tag": "NEW",
    "desc": "Premium leather-wrapped photo frame with elegant gold hand-stitching detail."
  },
  {
    "id": 22,
    "name": "Distressed Vintage Wood Frame",
    "price": 849,
    "cat": "Wooden Frames",
    "img": "assets/frame_vintage.png",
    "tag": "POPULAR",
    "desc": "Vintage barnwood photo frame with antique brass corners for a rustic aesthetic."
  },
  {
    "id": 23,
    "name": "Yash",
    "price": 599,
    "cat": "Acrylic Frames",
    "img": "assets/products/img_1781362850096.jpg",
    "desc": "Nxxn",
    "tag": "PREMIUM",
    "options": [
      {
        "name": "Kdk",
        "price": 55
      }
    ]
  },
  {
    "id": 24,
    "name": "Kumar frame",
    "price": 299,
    "cat": "Customized Frames",
    "img": "assets/products/img_1781628902259.jpg",
    "desc": "Adhote pedadham",
    "tag": "NEW"
  }
];
// PRODUCTS_DATA_END