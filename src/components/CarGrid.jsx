import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

const CarGrid = () => {
    var data=[
        {
          "_id": 101,
          "title": "Canon EOS Rebel T100",
          "des": "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
          "oldPrice": "700.00",
          "price": "559.99",
          "brand": "Canon",
          "image": "https://i.ibb.co/1r28gMk/1.webp",
          "isNew": true,
          "category": "Electronics"
        },
        {
          "_id": 102,
          "title": "DJI Air",
          "des": "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
          "oldPrice": "1050.00",
          "price": "999.00",
          "brand": "DJI",
          "image": "https://i.ibb.co/qdfB3s6/2.webp",
          "isNew": true,
          "category": "Electronics"
        },
        {
          "_id": 103,
          "title": "Apple 10.2-inch iPad",
          "des": "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
          "oldPrice": "329.00",
          "price": "269.00",
          "brand": "Apple",
          "image": "https://i.ibb.co/VL1Dnv1/4.webp",
          "isNew": true,
          "category": "Electronics"
        },
        {
          "_id": 104,
          "title": "iPhone 14",
          "des": "AT&T iPhone 14 128GB Midnight",
          "oldPrice": "1745.99",
          "price": "1200.00",
          "brand": "Apple",
          "image": "https://i.ibb.co/5F3nWv6/7.webp",
          "isNew": true,
          "category": "Electronics"
        },
        {
          "_id": 105,
          "title": "Apple Watch SE",
          "des": "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminum Case with Midnight Sport Band - S/M",
          "price": "249.00",
          "brand": "Apple",
          "image": "https://i.ibb.co/xgZWmdq/8.jpg",
          "isNew": true,
          "category": "Electronics"
        },
        {
          "_id": 106,
          "title": "Beats Solo3",
          "des": "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
          "oldPrice": "120.99",
          "price": "130.09",
          "brand": "Beats by Dr. Dre",
          "image": "https://i.ibb.co/rQKjVC2/5.webp",
          "isNew": true,
          "category": "Electronics"
        },
        {
          "_id": 107,
          "title": "uhomepro TV Stand Cabinet",
          "des": "uhomepro TV Stand Cabinet for Living Room up to 55 Television, Entertainment Center with RGB LED Lights and Storage Shelves Furniture, Black High Gloss TV Cabinet Console Table, Q15709",
          "oldPrice": "219.99",
          "price": "125.99",
          "brand": "uhomepro",
          "image": "https://i.ibb.co/Ycz8hkV/6.webp",
          "isNew": true,
          "category": "Home Decoration"
        },
        {
          "_id": 108,
          "title": "T-Shirt Men",
          "des": "St Patricks Day T-Shirt Men -Image by Shutterstock, Male XX-Large",
          "oldPrice": "15.00",
          "price": "18.99",
          "brand": "Smartprints",
          "image": "https://i.ibb.co/BLCDw7v/3.webp",
          "isNew": true,
          "category": "Fashion"
        },
        {
          "_id": 109,
          "title": "Picnic Table Bench Set",
          "des": "Costway Picnic Table Bench Set Outdoor Backyard Patio Garden Party Dining All Weather Black",
          "oldPrice": "169.99",
          "price": "298.00",
          "brand": "Costway",
          "image": "https://i.ibb.co/qCXcPhq/8.webp",
          "isNew": true,
          "category": "Home Decoration"
        },
        {
          "_id": 110,
          "title": "Grill Heavy Duty",
          "des": "Expert Grill Heavy Duty 24-Inch Charcoal Grill, Black",
          "price": "107.00",
          "brand": "Expert Grill",
          "image": "https://i.ibb.co/TTS9wY4/9.webp",
          "isNew": true,
          "category": "Equipments"
        },
        {
          "_id": 111,
          "title": "Girls Cropped",
          "des": "Free Assembly Girls Cropped Mixed Cable Knit Fair Isle Sweater, Sizes 4-18",
          "oldPrice": "20.00",
          "price": "15.31",
          "brand": "Free Assembly",
          "image": "https://i.ibb.co/BVzsqvz/10.webp",
          "isNew": true,
          "category": "Fashion"
        },
        {
          "_id": 112,
          "title": "Night of Olay Firming Night Cream Face Moisturizer, 1.9 oz",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "price": "7.98",
          "brand": "Olay",
          "image": "https://i.ibb.co/zPDcCQY/top4.webp",
          "isNew": true,
          "category": "Beauty Product"
        },
        {
          "_id": 113,
          "title": "Face LiquidSweet Lightweight Beauty Products for Women",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "price": "7.62",
          "brand": "unknown",
          "image": "https://i.ibb.co/QC4L3RF/top8.jpg",
          "isNew": true,
          "category": "Beauty Product"
        },
        {
          "_id": 114,
          "title": "L'Oreal Paris Revitalift Triple Power Anti-Aging Cream Face Moisturizer 1.7 oz",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "oldPrice": "35.00",
          "price": "21.91",
          "brand": "L'Oreal Paris",
          "image": "https://i.ibb.co/dKmw2sC/top2.webp",
          "isNew": true,
          "category": "Beauty Product"
        },
        {
          "_id": 115,
          "title": "L'Oreal Paris 55+ Moisturizer Anti-Aging Face Moisturizer, Wrinkle Expert, 1.7 oz",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "oldPrice": "23.65",
          "price": "10.63",
          "brand": "L'Oreal Paris",
          "image": "https://i.ibb.co/sJwg0YF/top1.webp",
          "isNew": true,
          "category": "Beauty Product"
        },
        {
          "_id": 116,
          "title": "Vaseline Intensive Care™ Advanced Repair Unscented Body Lotion, 20.3 oz",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "oldPrice": "9.99",
          "price": "6.98",
          "brand": "Vaseline",
          "image": "https://i.ibb.co/v1sPXLq/top5.webp",
          "isNew": true,
          "category": "Beauty Product"
        },
        {
          "_id": 117,
          "title": "CeraVe Healing Ointment, Protects and Soothes Cracked Skin, 12 oz",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "oldPrice": "25.35",
          "price": "20.87",
          "brand": "CeraVe",
          "image": "https://i.ibb.co/yPJjB3r/top6.webp",
          "isNew": false,
          "category": "Beauty Product"
        },
        {
          "_id": 118,
          "title": "Neutrogena Hydro Boost Hyaluronic Acid Water Gel Face Moisturizer, 1.7 oz",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "oldPrice": "29.00",
          "price": "19.97",
          "brand": "Neutrogena",
          "image": "https://i.ibb.co/zmw8xFY/top7.webp",
          "isNew": true,
          "category": "Beauty Product"
        },
        {
          "_id": 119,
          "title": "L'Oreal Paris Collagen Moisture Filler Facial Treatment Day Night Cream, Anti-Aging, 1.7 oz",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
          "oldPrice": "14.00",
          "price": "8.98",
          "brand": "L'Oreal Paris",
          "image": "https://i.ibb.co/vHJkwzt/top3.webp",
          "isNew": false,
          "category": "Beauty Product"
        },
        {
          "_id": 120,
          "title": "Girls Sleeveless Cutout",
          "des": "Free Assembly Girls Sleeveless Cutout Jumpsuit, Sizes 4-18",
          "oldPrice": "52.00",
          "price": "22.00",
          "brand": "Free Assembly",
          "image": "https://i.ibb.co/BNXTLkq/12.webp",
          "isNew": false,
          "category": "Fashion"
        }
      ]
  return (
    <div>
        <Grid container spacing ={2}>
      {data.map((val,i)=>{
        return(
            <Grid size ={{xs:12,md:3}}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={val.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
{val.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Grid>
        );
      })}
      </Grid>
    </div>
  )
}

export default CarGrid