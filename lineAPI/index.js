'use strict';
const fs = require('fs');


const line = require('@line/bot-sdk');
const express = require('express');
const res = require('express/lib/response');



const mysql = require('mysql')
// create LINE SDK config from env variables
const config = {
  channelAccessToken: '',
  channelSecret: '',
};


// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();


  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
const db = mysql.createPool({

  host: '',
  user: '',
  password: '',
  database: '',
  port: port,
  // ssl: {ca: fs.readFileSync("./BaltimoreCyberTrustRoot.crt.pem")},
  connectionLimit:10

});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");

// });
 
//app.use(express.urlencoded({extended: true})); // New

//app.use(express.json()); // New

app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    }); 
}); 
var priceDorms = '';
var message = '';
var dorm = '';
var floor = '';
var roomn = '';
// event handler


function handleEvent(event) {

  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }


  console.log(event.source.userId)

  const lineId = event.source.userId;

  console.log(event);

  // create a echoing text message
  //const echo = { type: 'text', text: event.message.text };
  const text = {
    "type": "text",
    "text": "คำสั่งไม่ถูกต้อง!!!!\nกรุณาใช้คำสั่งจากเมนู"
  };




  const aaaa = {
    "type": "imagemap",
    "baseUrl": "https://sv1.picz.in.th/images/2021/12/29/n73uQI.jpg?w=auto",
    "altText": "This is an imagemap",
    "baseSize": {
      "width": 1040,
      "height": 237
    },
    "actions": [{
        "type": "message",
        "area": {
          "x": 105,
          "y": 18,
          "width": 90,
          "height": 66
        },
        "text": "302"
      },
      {
        "type": "message",
        "area": {
          "x": 283,
          "y": 19,
          "width": 88,
          "height": 65
        },
        "text": "304"
      },
      {
        "type": "message",
        "area": {
          "x": 501,
          "y": 18,
          "width": 89,
          "height": 66
        },
        "text": "305"
      },
      {
        "type": "message",
        "area": {
          "x": 590,
          "y": 18,
          "width": 88,
          "height": 65
        },
        "text": "306"
      },
      {
        "type": "message",
        "area": {
          "x": 682,
          "y": 18,
          "width": 82,
          "height": 65
        },
        "text": "307"
      },
      {
        "type": "message",
        "area": {
          "x": 769,
          "y": 18,
          "width": 80,
          "height": 66
        },
        "text": "308"
      },
      {
        "type": "message",
        "area": {
          "x": 857,
          "y": 19,
          "width": 79,
          "height": 67
        },
        "text": "309"
      },
      {
        "type": "message",
        "area": {
          "x": 21,
          "y": 144,
          "width": 83,
          "height": 60
        },
        "text": "310"
      },
      {
        "type": "message",
        "area": {
          "x": 111,
          "y": 144,
          "width": 80,
          "height": 62
        },
        "text": "311"
      },
      {
        "type": "message",
        "area": {
          "x": 195,
          "y": 144,
          "width": 83,
          "height": 62
        },
        "text": "312"
      },
      {
        "type": "message",
        "area": {
          "x": 286,
          "y": 139,
          "width": 81,
          "height": 68
        },
        "text": "313"
      },
      {
        "type": "message",
        "area": {
          "x": 372,
          "y": 141,
          "width": 83,
          "height": 66
        },
        "text": "314"
      },
      {
        "type": "message",
        "area": {
          "x": 506,
          "y": 144,
          "width": 79,
          "height": 62
        },
        "text": "315"
      },
      {
        "type": "message",
        "area": {
          "x": 594,
          "y": 144,
          "width": 77,
          "height": 60
        },
        "text": "316"
      },
      {
        "type": "message",
        "area": {
          "x": 682,
          "y": 144,
          "width": 77,
          "height": 60
        },
        "text": "317"
      },
      {
        "type": "message",
        "area": {
          "x": 769,
          "y": 141,
          "width": 83,
          "height": 63
        },
        "text": "318"
      },
      {
        "type": "message",
        "area": {
          "x": 857,
          "y": 142,
          "width": 79,
          "height": 64
        },
        "text": "319"
      }
    ]
  };



  const yes = {
    "type": "template",
    "altText": "this is a confirm template",
    "template": {
      "type": "confirm",
      "text": "ต้องการเลือกหอ" + dorm + "  ชั้น" + floor + "  ห้อง" + roomn + " ใช่ไหม",

      "actions": [{
          "type": "message",
          "label": "ยืนยัน",
          "text": "ยืนยัน"
        },
        {
          "type": "message",
          "label": "เลือกห้องใหม่",
          "text": "เลือกห้องใหม่"
        }
      ]
    }
  };


  const pngg = {
    "type": "template",
    "altText": "this is an image carousel template",
    "template": {
      "type": "image_carousel",
      "columns": [{
          "imageUrl": "https://sv1.picz.in.th/images/2022/02/22/ridC9b.jpg",
          "action": {
            "type": "message",
            "label": " ",
            "text": " "
          }
        },
        {
          "imageUrl": "https://www.catdumb.com/wp-content/uploads/2021/06/201156066_135765821959188_6441716354939160486_n.jpg",
          "action": {
            "type": "message",
            "label": " ",
            "text": " "
          }
        },
        {
          "imageUrl": "https://www.catdumb.com/wp-content/uploads/2021/06/201757987_135765625292541_3461593851327772552_n.jpg",
          "action": {
            "type": "message",
            "label": " ",
            "text": " "
          }
        },
        {
          "imageUrl": "https://www.catdumb.com/wp-content/uploads/2021/06/167424150_101148832087554_3618784128571610675_n.jpg",
          "action": {
            "type": "message",
            "label": " ",
            "text": " "
          }
        },
        {
          "imageUrl": "https://www.catdumb.com/wp-content/uploads/2021/06/167014381_101148925420878_270543256510418272_n.jpg",
          "action": {
            "type": "message",
            "label": " ",
            "text": " "
          }
        }
      ]
    }
  };



  const y = {
    "type": "text",
    "text": "คุณจองห้องเรียบร้อย\nกรุณารอการตอบกลับจากเจ้าของหอพัก"
  };



  const login = {
    "type": "template",
    "altText": "this is a confirm template",
    "template": {
      "type": "confirm",
      "actions": [{
          "type": "uri",
          "label": "Yes",
          "uri": "https://6817-223-24-189-177.ngrok.io/line/" + lineId
        },
        {
          "type": "message",
          "label": "No",
          "text": "No"
        }
      ],
      "text": "Continue?"
    }
  };

  const login2 = {



    "type": "flex",
    "altText": "This is a Flex Message",
    "contents": {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
          "type": "button",
          "style": "primary",
          "height": "sm",
          "action": {
            "type": "uri",
            "label": "ตรวจสอบข้อมูลของฉัน",
            "uri": "https://1e21-223-204-84-22.ngrok.io/line/" + lineId
          }
        }]
      }
    }
 

  };

 




  function jsonDorms(results) {
    let template = {
      "type": "bubble",
      "size": "mega",
      "direction": "ltr",
      "hero": {
        "type": "image",
        "url": "https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F%E0%B8%94%E0%B8%B8%E0%B8%88%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B9%81%E0%B8%A1%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99_242191122_10161840272701840_8878607310277437043_n.jpg?alt=media&token=57e15ab8-a271-47ae-bd39-71eb4039a08d",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        
      },  
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
            "type": "text",
            "text": "xxxxx",
            "weight": "bold",
            "size": "xl",
            "contents": []
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [{
                "type": "icon",
                "url": "https://img.icons8.com/ios-filled/50/000000/thai-baht.png",
                "margin": "none",
                "size": "xl",
                "position": "relative"
              },
              {
                "type": "text",
                "text": "2700-3200บาท/เดือน",
                "weight": "bold",
                "size": "md",
                "gravity": "top",
                "contents": []
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "none",
            "contents": [{
                "type": "icon",
                "url": "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/000000/external-dormitory-city-buildings-smashingstocks-flat-smashing-stocks.png",
                "size": "md"
              },
              {
                "type": "icon",
                "url": "https://img.icons8.com/plasticine/100/000000/retro-tv.png",
                "size": "lg"
              },
              {
                "type": "icon",
                "url": "https://img.icons8.com/officel/16/000000/wifi-logo.png"
              },
              {
                "type": "text",
                "text": " มี"+results.floor+"ชั้น",
                "size": "sm",
                "color": "#999999",
                "flex": 0,
                "margin": "md",
                "contents": []
              },
              {
                "type": "text",
                "text": "เลี้ยงสัตว์ไม่ได้",
                "color": "#E34612FF",
                "align": "center",
                "contents": []
              }
              
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "margin": "none",
            "contents": [{
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [{
                  "type": "text",
                  "text": "ราคา",
                  "size": "sm",
                  "color": "#AAAAAA",
                  "flex": 1,
                  "contents": []
                },
                {
                  "type": "icon",
                  "url": "https://img.icons8.com/office/16/000000/fan.png"
                },
                {
                  "type": "text",
                  "text": "2700บาท/เดือน",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 5,
                  "wrap": true, 
                  "contents": []
                }
              ]
            }]
          },
          {  
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "margin": "none",
            "contents": [{
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [{
                  "type": "text",
                  "text": "ราคา",
                  "size": "sm",
                  "color": "#AAAAAA",
                  "flex": 1,
                  "contents": []
                },
                {
                  "type": "icon",
                  "url": "https://img.icons8.com/cute-clipart/64/000000/air-conditioner.png"
                },
                {
                  "type": "text",
                  "text": "3200บาท/เดือน",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 5,
                  "wrap": true,
                  "contents": []
                }
              ]
            }]
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "margin": "none",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://img.icons8.com/color/48/000000/marker--v1.png"
                  },
                  {
                    "type": "text",
                    "text": "ห่างจากมช "+results.distance/1000+"km",
                    "size": "sm",
                    "color": "#666666",
                    "flex": 5,
                    "wrap": true,
                    "contents": []
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "flex": 0,
        "spacing": "sm",
        "contents": [{
            "type": "box",
            "layout": "horizontal",
            "contents": [{
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "ติดต่อ",
                  "uri": "tel:"+ results.phone
                },
                "color": "#F0F9F9FF",
                "height": "sm",
                "style": "secondary"
              },
              {
                "type": "button",
                "action": {
                  
              "type": "message",
              "label": "ที่อยู่หอ",
              "text": "ที่อยู่หอ>"+results.name
                }
     
                ,
                "color": "#F0F9F9FF",
                "height": "sm",
                "style": "secondary",
                "gravity": "center"
              }
            ]
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "รูปเพิ่มเติม",
              "text": "ดูรูปเพิ่มเติม>"+results.name
            }, 
            "height": "sm",
            "style": "primary"
          },
          {  
            "type": "button",
            "action": {
              "type": "message",
              "label": "จองห้อง",


              "text": "เลือกหอ>" + results.name,


            },
            "height": "sm",
            "style": "primary"
          }
        ]
      }
    }

    // let temp=template;

    //template.body.contents[1].contents[1].text=results.lowPrice+"-"+results.highPrice+"บาท/เดือน";
    template.body.contents[0].text = results.name;

    if (results.highPrice === results.lowPrice) {

      if (results.isAir === 1) {
        template.body.contents[1].contents[1].text = results.highPrice + "บาท/เดือน";
        template.body.contents[4].contents[0].contents[2].text = results.highPrice + "บาท/เดือน";
        template.body.contents[3].contents[0].contents[2].text = "-";
        template.hero.url = results.imageUrl;

      } else {
        template.body.contents[1].contents[1].text = results.lowPrice + "บาท/เดือน";
        template.body.contents[4].contents[0].contents[2].text = "-";
        template.body.contents[3].contents[0].contents[2].text = results.lowPrice + "บาท/เดือน";
        template.hero.url = results.imageUrl;
      }




    } else {

      template.body.contents[1].contents[1].text = results.lowPrice + "-" + results.highPrice + "บาท/เดือน";
      template.body.contents[4].contents[0].contents[2].text = results.highPrice + "บาท/เดือน";
      template.body.contents[3].contents[0].contents[2].text = results.lowPrice + "บาท/เดือน";
      template.hero.url = results.imageUrl;
    }

    if (results.isPet === 1) {

      template.body.contents[2].contents[4].text = "เลี้ยงสัตว์ได้";
      template.body.contents[2].contents[4].color = "#19CA30FF";


    } else {

      template.body.contents[2].contents[4].text = "เลี้ยงสัตว์ไม่ได้";
      template.body.contents[2].contents[4].color = "#E34612FF";

    }



    //console.log("function json=="+JSON.stringify(temp));

    return template;
  }


  function jsonFloor(results, dorm,n) {
    let template = {
      "type": "button",
      "action": {
        "type": "message",
        "label": "ชั้น 1",
        "text": "1"
      }
    };
    console.log("dorm===" + dorm);
    template.action.label = "ชั้น " + results.roomFloor;
    template.action.text = dorm + ">ชั้น>" + results.roomFloor;
    
    //console.log("results===="+results);
    
    
    return template;

  };



  function pushFloor(results, dorm,n) {

    var temp = [];

    //temp.push(results);
    //temp.push(json(results[0]));
    //temp.push(json(results[1]));

    //temp=temp1.join();
    for (const result of results) {
      temp.push(jsonFloor(result, dorm,n));
    }
    console.log("results===="+results);
    //console.log("n===="+n);
    return temp;

  };


  function floorDorms(dorm) {
    db.query("SELECT * FROM dorms WHERE name=?", [dorm], (error, results) => {
      console.log("dorm=" + dorm);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {

        //console.log("dorm="+JSON.stringify(results[0].id));
        db.query("SELECT DISTINCT roomFloor  FROM rooms WHERE dorm_id=? AND status=0 ORDER BY roomFloor", [results[0].id], (error, results2) => {

          //console.log("results[0].id="+JSON.stringify(results2));
          const temp = Object.keys(results2).map((key) => [Number(key), results2[key]]);
          
          const n = temp.length;
          //console.log("n=="+n);
          if (error) {
            console.log(error);
            //return res.status(404);

          }
          if (results2.length > 0) {
            let reserve = {
              "type": "flex",
              "altText": "I-Am-Teemo Flex Message",
              "contents": {
                "type": "bubble",
                "direction": "ltr",
                "header": {
                  "type": "box",
                  "layout": "vertical",
                  "backgroundColor": "#35C44FFF",
                  "contents": [{
                      "type": "text",
                      "text": "เลือกชั้น",
                      "weight": "bold",
                      "color": "#050505FF",
                      "align": "center",
                      "contents": []
                    },
                    {
                      "type": "text",
                      "text": dorm,
                      "weight": "bold",
                      "color": "#050505FF",
                      "size": "md",
                      "align": "center",
                      "contents": []
                    },
                    {
                      "type": "text",
                      "text": "**จะแสดงชั้นที่ยังมีห้องว่างเท่านั้น**",
                      "weight": "bold",
                      "size": "md",
                      "align": "center",
                      "contents": []
                    }
                  ]
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": pushFloor(results2, dorm,n)
                  // function


                }
              }
            };

            return client.replyMessage(event.replyToken, reserve);
          } else {
            let reserve = {
              "type": "flex",
              "altText": "I-Am-Teemo Flex Message",
              "contents": {
                "type": "bubble",
                "direction": "ltr",
                "header": {
                  "type": "box",
                  "layout": "vertical",
                  "backgroundColor": "#35C44FFF",
                  "contents": [{
                      "type": "text",
                      "text": "เลือกชั้น",
                      "weight": "bold",
                      "color": "#050505FF",
                      "align": "center",
                      "contents": []
                    },
                    {
                      "type": "text",
                      "text": dorm,
                      "weight": "bold",
                      "size": "md",
                      "align": "center",
                      "contents": []
                    }
                  ]
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [{
                    "type": "text",
                    "text": "หอพักไม่มีห้องว่าง",
                    "weight": "bold",
                    "color": "#050505FF",
                    "align": "center",
                    "contents": []
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "เลือกหอพักใหม่",
                      "text": "เลือกหอพัก"
                    }
                  }]

                  // function


                }
              }
            };

            return client.replyMessage(event.replyToken, reserve);
          }



          //const temp = Object.keys(results2).map((key) => [Number(key), results2[key]]);
          //post2 = results2;

          //const n = temp.length;

          //console.log("n="+n);
          //console.log("name="+results[0].name);




          //console.log("p20003000p20003000"+JSON.stringify(p20003000));


        });
        // return client.replyMessage(event.replyToken, dorms);

      }

    });
  }




  function jsonroom(results, dorm, floor) {
    let template = {
      "type": "action", // ③
      "imageUrl": "https://img.icons8.com/office/16/000000/fan.png",
      "action": {
        "type": "message",
        "label": "310",
        "text": "310"
      }
    };
    //console.log("results.isAir==="+results.isAir);
    template.action.text = "จอง>" + dorm + ">ชั้น " + floor + ">ห้อง " + results.roomNum;
    template.action.label = results.roomNum;

    if (results.isAir === 1) {
      template.imageUrl = "https://img.icons8.com/cute-clipart/64/000000/air-conditioner.png";
    }

    return template;

  };



  function pushroom(results, dorm, floor) {

    var temp = [];

    //temp.push(results);
    //temp.push(json(results[0]));
    //temp.push(json(results[1]));

    //temp=temp1.join();
    for (const result of results) {
      temp.push(jsonroom(result, dorm, floor));
    }

    return temp;

  };



  function roomDorms(dorm, floor) {
    //console.log("dorm,floor="+dorm+floor);
    db.query("SELECT * FROM dorms WHERE name=?", [dorm], (error, results) => {
      console.log("imageFloorUrl="+results[0].imageFloorUrl);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {

        console.log("dorm=" + JSON.stringify(results[0].id));
        db.query("SELECT *  FROM rooms WHERE dorm_id=? AND status=0 AND roomFloor=?", [results[0].id, floor], (error, results2) => {

          console.log("results2[0]=" + JSON.stringify(results2));

          if (error) {
            console.log(error);
            //return res.status(404);

          }
          if (results2.length > 0) {
            
            const photo =results[0].imageFloorUrl;
            if(photo){
              let reserve = {

              "type": "image", // ①
              "originalContentUrl": photo,
              "previewImageUrl": photo,
              
              "quickReply": { // ②
                "items": pushroom(results2, dorm, floor)

              }
            };
            
            return client.replyMessage(event.replyToken, reserve);
            }else{
              let reserve = {

                "type": "text", // ①
                "text": "ห้องที่ยังว่าง",
                "quickReply": { // ②
                  "items": pushroom(results2, dorm, floor)
  
                }
              };
              console.log("imageFloorUrl="+results[0].imageFloorUrl);
              return client.replyMessage(event.replyToken, reserve);
            }
            
          } else {
            let reserve = {
              "type": "flex",
              "altText": "I-Am-Teemo Flex Message",
              "contents": {
                "type": "bubble",
                "direction": "ltr",
                "header": {
                  "type": "box",
                  "layout": "vertical",
                  "backgroundColor": "#35C44FFF",
                  "contents": [{
                      "type": "text",
                      "text": "เลือกชั้น",
                      "weight": "bold",
                      "color": "#050505FF",
                      "align": "center",
                      "contents": []
                    },
                    {
                      "type": "text",
                      "text": dorm,
                      "weight": "bold",
                      "size": "md",
                      "align": "center",
                      "contents": []
                    }
                  ]
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": []

                  // function


                }
              }
            };

            return client.replyMessage(event.replyToken, reserve);
          }


        });
        // return client.replyMessage(event.replyToken, dorms);

      }

    });
  }



  var post2 = [];




  // const price20003000  = {
  //   "type": "flex",
  //   "altText": "I-Am-Teemo Flex Message",
  //   "contents":{
  //     "type": "carousel",
  //     "contents": 

  //       post()



  //   }
  // };

  const dataroom = {
    "type": "template",
    "altText": "this is an image carousel template",
    "template": {
      "type": "image_carousel",
      "columns": [{
          "imageUrl": "https://hilight.kapook.com/img_cms2/user/natthida_p/2021/6_Jun/3_23.jpg",
          "action": {
            "type": "message",
            "label": " ",
            "text": " "
          }
        },
        {
          "imageUrl": "https://hilight.kapook.com/img_cms2/user/natthida_p/2021/6_Jun/3_23.jpg",
          "action": {
            "type": "message",
            "label": "Action 2",
            "text": "Action 2"
          }
        }
      ]
    }
  };






  const price = {
    "type": "flex",
    "altText": "I-Am-Teemo Flex Message",
    "contents": {
      "type": "carousel",
      "contents": [{
        "type": "bubble",
        "direction": "ltr",
        "hero": {
          "type": "image",
          "url": "https://cf.bstatic.com/images/hotel/max1024x768/221/221905924.jpg",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [{
              "type": "text",
              "text": "Dormitory",
              "weight": "bold",
              "size": "xl",
              "wrap": true,
              "contents": []
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [{
                "type": "text",
                "text": "เลือกดูราคาต่ำกว่า2000บาท",
                "weight": "bold",
                "size": "xl",
                "flex": 0,
                "wrap": true,
                "contents": []
              }]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [{
            "type": "button",
            "action": {
              "type": "message",
              "label": "เลือกดู",
              "text": "เลือกดูราคาต่ำกว่า>2000"
            },
            "style": "primary"
          }]
        }
      },{ 
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://cf.bstatic.com/images/hotel/max1024x768/221/221905924.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
                "type": "text",
                "text": "Dormitory",
                "weight": "bold",
                "size": "xl",
                "wrap": true,
                "contents": []
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [{
                  "type": "text",
                  "text": "เลือกดู2000-3000บาท",
                  "weight": "bold",
                  "size": "xl",
                  "flex": 0,
                  "wrap": true,
                  "contents": []
                }]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
              "type": "button",
              "action": {
                "type": "message",
                "label": "เลือกดู",
                "text": "เลือกดูราคา>2000-3000"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://static.hongpak.in.th/media/rooms/thbs3x/20/0913/082603_2034.jpeg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
                "type": "text",
                "text": "Dormitory",
                "weight": "bold",
                "size": "xl",
                "wrap": true,
                "contents": []
              },
              {
                "type": "box",
                "layout": "baseline",
                "flex": 1,
                "contents": [{
                  "type": "text",
                  "text": "ราคา3000-4000บาท",
                  "weight": "bold",
                  "size": "xl",
                  "flex": 0,
                  "wrap": true,
                  "contents": []
                }]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
              "type": "button",
              "action": {
                "type": "message",
                "label": "เลือกดู",
                "text": "เลือกดูราคา>3000-4000"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://cdn.renthub.in.th/images/uploaded/202007/20200717/apartment_pictures/mobile/18f09aee9da08d076662f76fd6b4a2ec.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
                "type": "text",
                "text": "Dormitory",
                "weight": "bold",
                "size": "xl",
                "wrap": true,
                "contents": []
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [{
                  "type": "text",
                  "text": "ราคา4000-5000บาท",
                  "weight": "bold",
                  "size": "xl",
                  "flex": 0,
                  "wrap": true,
                  "contents": []
                }]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
              "type": "button",
              "action": {
                "type": "message",
                "label": "เลือกดู",
                "text": "เลือกดูราคา>4000-5000"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/5ONvPEJ-boE8ej_1fZIhY2IIZYkxxcOuElroOInKTAX4YpNiMqQaof-VX-P_-kXzT0XUExuh=w1080-h608-p-no-v0",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
                "type": "text",
                "text": "Dormitory",
                "weight": "bold",
                "size": "xl",
                "wrap": true,
                "contents": []
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [{
                  "type": "text",
                  "text": "ราคา5000-6000บาท",
                  "weight": "bold",
                  "size": "xl",
                  "flex": 0,
                  "wrap": true,
                  "contents": []
                }]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
              "type": "button",
              "action": {
                "type": "message",
                "label": "เลือกดู",
                "text": "เลือกดูราคา>5000-6000"
              },
              "style": "primary"
            }]
          }
        },{
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://cf.bstatic.com/images/hotel/max1024x768/221/221905924.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
                "type": "text",
                "text": "Dormitory",
                "weight": "bold",
                "size": "xl",
                "wrap": true,
                "contents": []
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [{
                  "type": "text",
                  "text": "เลือกดูราคามากกว่า6000บาท",
                  "weight": "bold",
                  "size": "xl",
                  "flex": 0,
                  "wrap": true,
                  "contents": []
                }]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [{
              "type": "button",
              "action": {
                "type": "message",
                "label": "เลือกดู",
                "text": "เลือกดูราคามากกว่า>6000"
              },
              "style": "primary"
            }]
          }
        }
      ]
    }
  };
  
  
    

  const select = {
    "type": "flex",
    "altText": "I-Am-Teemo Flex Message",
    "contents": {
      "type": "bubble",
      "direction": "ltr",
      "header": {
        "type": "box",
        "layout": "vertical",
        "backgroundColor": "#35C44FFF",
        "contents": [{
          "type": "text",
          "text": "เลือกค้นหาหอพัก",
          "weight": "bold",
          "color": "#050505FF",
          "align": "center",
          "contents": []
        }]
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
            "type": "button",
            "action": {
              "type": "message",
              "label": "ค้นหาตามราคา",
              "text": "ค้นหาตามราคา"
            }
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "ค้นหาระยะทางหอพักจากมช.",
              "text": "ค้นหาระยะทางหอพักจากมช."
            }
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "ค้นหาจากประเภทหอพัก",
              "text": "ค้นหาจากประเภทหอพัก"
            }
          }
        ]
      }
    }
  };

  const selectType = {
    "type": "flex",
    "altText": "I-Am-Teemo Flex Message",
    "contents": {
      "type": "bubble",
      "direction": "ltr",
      "header": {
        "type": "box",
        "layout": "vertical",
        "backgroundColor": "#35C44FFF",
        "contents": [{
          "type": "text",
          "text": "เลือกค้นหาหอพัก",
          "weight": "bold",
          "color": "#050505FF",
          "align": "center",
          "contents": []
        }]
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
            "type": "button",
            "action": {
              "type": "message",
              "label": "หอพักที่มีแอร์",
              "text": "หอพักที่มีแอร์"
            }
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "หอพักที่เลี้ยงสัตว์ได้",
              "text": "หอพักที่เลี้ยงสัตว์ได้"
            }
          }

        ]
      }
    }
  };




  message = event.message.text.split('>');
  



  function queryDormsHighPrice(highPrice) {
    db.query("SELECT * FROM dorms WHERE lowPrice >= ? ", [highPrice], (error, results) => {
      //console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {
        // res.status(200).json({
        //     userId: userId,
        //     dormId: dormId,
        const temp = Object.keys(results).map((key) => [Number(key), results[key]]);
        post2 = results;
 
        const n = temp.length;

        //console.log("n="+n);
        //console.log("name="+results[0].name);

        let dorms = {
          "type": "flex",
          "altText": "I-Am-Teemo Flex Message",
          "contents": {
            "type": "carousel",
            "contents": pushDorms(n, results)
          }
        };
        //console.log("p20003000p20003000"+JSON.stringify(p20003000));
        return client.replyMessage(event.replyToken, dorms);
        //const temp = price20003000;
        // })
        // res.status(200).json({results,dormId,dormName})

      }

    });
  }


  function queryDormsLowPrice(lowPrice) {
    db.query("SELECT * FROM dorms WHERE lowPrice <= ? ", [lowPrice], (error, results) => {
      //console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {
        // res.status(200).json({
        //     userId: userId,
        //     dormId: dormId,
        const temp = Object.keys(results).map((key) => [Number(key), results[key]]);
        post2 = results;
 
        const n = temp.length;

        //console.log("n="+n);
        //console.log("name="+results[0].name);

        let dorms = {
          "type": "flex",
          "altText": "I-Am-Teemo Flex Message",
          "contents": {
            "type": "carousel",
            "contents": pushDorms(n, results)
          }
        };
        //console.log("p20003000p20003000"+JSON.stringify(p20003000));
        return client.replyMessage(event.replyToken, dorms);
        //const temp = price20003000;
        // })
        // res.status(200).json({results,dormId,dormName})

      }

    });
  }


  function queryDormsAnimal() {
    db.query("SELECT * FROM dorms WHERE isPet=?", [1], (error, results) => {
      //console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {
        // res.status(200).json({
        //     userId: userId,
        //     dormId: dormId,
        const temp = Object.keys(results).map((key) => [Number(key), results[key]]);
        post2 = results;

        const n = temp.length;

        //console.log("n="+n);
        //console.log("name="+results[0].name);

        let dorms = {
          "type": "flex",
          "altText": "I-Am-Teemo Flex Message",
          "contents": {
            "type": "carousel",
            "contents": pushDorms(n, results)
          }
        };
        //console.log("p20003000p20003000"+JSON.stringify(p20003000));
        return client.replyMessage(event.replyToken, dorms);
        //const temp = price20003000;
        // })
        // res.status(200).json({results,dormId,dormName})

      }

    });
  }

 

  function queryDormsAir() {
    db.query("SELECT * FROM dorms WHERE isAir=?", [1], (error, results) => {
      //console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {
        // res.status(200).json({
        //     userId: userId,
        //     dormId: dormId,
        const temp = Object.keys(results).map((key) => [Number(key), results[key]]);
        post2 = results;

        const n = temp.length;

        //console.log("n="+n);
        //console.log("name="+results[0].name);

        let dorms = {
          "type": "flex",
          "altText": "I-Am-Teemo Flex Message",
          "contents": {
            "type": "carousel",
            "contents": pushDorms(n, results)
          }
        };
        //console.log("p20003000p20003000"+JSON.stringify(p20003000));
        return client.replyMessage(event.replyToken, dorms);
        //const temp = price20003000;
        // })
        // res.status(200).json({results,dormId,dormName})

      }

    });
  }

  function queryDorms(lowPrice, highPrice) {
    db.query("SELECT * FROM dorms WHERE (highPrice <= ? AND highPrice >= ? ) OR (lowPrice >= ? AND lowPrice <= ?)", [highPrice, lowPrice, lowPrice, highPrice], (error, results) => {
      //console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {
        // res.status(200).json({
        //     userId: userId,
        //     dormId: dormId,
        const temp = Object.keys(results).map((key) => [Number(key), results[key]]);
        post2 = results;

        const n = temp.length;

        //console.log("n="+n);
        //console.log("name="+results[0].name);

        let dorms = {
          "type": "flex",
          "altText": "I-Am-Teemo Flex Message",
          "contents": {
            "type": "carousel",
            "contents": pushDorms(n, results)
          }
        };
        //console.log("p20003000p20003000"+JSON.stringify(p20003000));
        return client.replyMessage(event.replyToken, dorms);
        //const temp = price20003000;
        // })
        // res.status(200).json({results,dormId,dormName})

      }

    });
  }



  function pushDorms(n, results) {

    var temp = [];

    //temp.push(results);
    //temp.push(json(results[0]));
    //temp.push(json(results[1]));

    //temp=temp1.join();
    for (const result of results) {
      temp.push(jsonDorms(result));
    }
    // console.log("temp[0]: "+temp[0].body.contents[0].text);
    // console.log("temp[1]: "+temp[1].body.contents[0].text);
    //console.log("temp[0]: "+temp[0].body.contents[0].text);
    //console.log("temp[1]: "+temp[1].body.contents[0].text);




    //  console.log("results[0].name: "+(json(results[0])).body.contents[0].text)
    // console.log("results[1].name: "+(json(results[1])).body.contents[0].text)
    // console.log("-----------------------------------------")

    // console.log("results[0].name: "+(json(results[0])).body.contents[0].text)
    // console.log("results[1].name: "+(json(results[1])).body.contents[0].text)
    // console.log("-----------------------------------------")
    // const temp0 =json(results[0]);
    // const temp1 =json(results[1]);

    // console.log("temp0: "+temp0.body.contents[0].text);
    // console.log("temp1: "+temp1.body.contents[0].text);

    //  let temp=[temp0,temp1];

    // console.log("-----------------------------------------")

    // console.log("temp0: "+temp0.body.contents[0].text);
    // console.log("temp1: "+temp1.body.contents[0].text);
    // console.log("-----------------------------------------")
    // console.log("temp: "+temp[0].body.contents[0].text);
    // console.log("temp: "+temp[1].body.contents[0].text);


    // const temp3 = results[0];

    // console.log(temp3.name) 
    //console.log("temp: "+(temp));
    //const temp=[json(results[0])];
    return temp;




    //console.log("temp[1]: "+temp[1]);

    //console.log("temp: "+results(json("temp: "+temp)));
    // for (var i = 0; i < n; i++) {
    //   //temp.push(json(results[i]))
    //   //console.log("json(results[i])=="+JSON.stringify(json(results[i])));
    //   // temp[i]=json(results[i]);
    //   //dorm.body.contents[0].text = results[i].name;
    //   //console.log("post.temp.name: " + JSON.stringify(temp))
    //   //console.log("name=="+JSON.stringify(temp));
    //   //console.log("results=="+results[i]);
    //   //console.log("results[i]: " + JSON.stringify(results[i]))

    // }
    //console.log("function post: " +temp[0].body.contents[0].text)
    //console.log("function post: " +temp[1].body.contents[0].text)
    //console.log("post.temp.name: " + JSON.stringify(temp))
    //const temp = Object.assign({},json(results[0]),json(results[1]));

    //var temp =[];

    // for (const [key, value] of Object.entries(results)) {
    //   console.log("key, value="+ key+" " + value);
    //   temp.push(json(value))
    // }

  }


  function jsonPhotos(results) {
    let template = {
      "imageUrl": "https://www.catdumb.com/wp-content/uploads/2021/06/167033311_101148878754216_8572344420323335474_n.jpg",
      "action": {
        "type": "message",
        "label": " ",
        "text": " "
      }
    };

  
    
    //console.log("results.isAir==="+results.isAir);
     
    template.imageUrl = results.imageUrl;

   
    return template;

  };
 
 
  function pushPhotos(n, results) {

    var temp = [];

   
    for (const result of results) {
      temp.push(jsonPhotos(result));
    } 
    
    return temp;
 
  }
  //priceDorms = event.message.text.split('>');
  if (message[0] === "เลือกดูราคา") {
    //var ggg=priceDorms[1].split(' ');

    //console.log("price="+message[1]);
    var price_temp = message[1].split('-');
    var lowPrice = price_temp[0];
    var highPrice = price_temp[1];
    //console.log("price="+lowPrice+" "+highPrice);

    queryDorms(lowPrice, highPrice);
    //console.log("ggg[0]="+ggg[0])
    //queryDorms();

    //console.log("results.name  "+results.name)
    //return client.replyMessage(event.replyToken, reserve);


  }


    else if (event.message.text === 'ข้อมูลของฉัน') {

    return client.replyMessage(event.replyToken, login2);


  } 
  
  
  else if (message[0] === 'ดูรูปเพิ่มเติม') {

    db.query("SELECT * FROM dorms WHERE name=?", [message[1]], (error, results) => {
      console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } else {
        db.query("SELECT * FROM photos WHERE dorm_id=?", [results[0].id], (error, results) => {
          console.log(results[0].id);
    
          if (error) {
            console.log(error);
    
          } else {
            
            const temp = Object.keys(results).map((key) => [Number(key), results[key]]);
            post2 = results;
    
            const n = temp.length;
    
            let dorms = {
              "type": "template",
              "altText": "this is an image carousel template",
              "template": {
                "type": "image_carousel",
                "columns": pushPhotos(n, results)
                //pushPhotos(n, results)
              }
            };
          
            //console.log("p20003000p20003000"+JSON.stringify(p20003000));
            return client.replyMessage(event.replyToken, dorms);
            //const temp = price20003000;
            // })
            // res.status(200).json({results,dormId,dormName})
    
          }
    
        });

      }

    });



    
 

  } else if (event.message.text === 'เลือกหอพัก') {

    return client.replyMessage(event.replyToken, select);
  } else if (event.message.text === 'ค้นหาตามราคา') {

    return client.replyMessage(event.replyToken, price);

  } else if (event.message.text === 'ค้นหาจากประเภทหอพัก') {

    return client.replyMessage(event.replyToken, selectType);

  } else if (event.message.text === 'หอพักที่มีแอร์') {

    queryDormsAir();


  } else if (event.message.text === 'หอพักที่เลี้ยงสัตว์ได้') {


    queryDormsAnimal()

  }


  else if (message[0] === "เลือกหอ") {

    console.log("message[1]=" + message[1])
    //queryDorms();
    
    //console.log("results.name  "+results.name)
    //return client.replyMessage(event.replyToken, reserve);
    
    db.query("SELECT * FROM users WHERE line_id=?", [lineId], (error, results) => {
      //console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } 
      
      if(results.length > 0){
        //console.log("results[0].name  "+results[0].name);

        floorDorms(message[1]);

      } else{

        const Confirm = {



          "type": "flex",
          "altText": "This is a Flex Message",
          "contents": {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [{
                "type": "text",
                "text": "กรุณาสมัครสมาชิกก่อนจองหอพัก      \n           \n       ",
                "align": "center",
                "contents": []
              }
           
                ,{
                "type": "button",
                "style": "primary",
                "height": "sm",
                "action": {
                  "type": "uri",
                  "label": "สมัครสมาชิก",
                  "uri": "https://1e21-223-204-84-22.ngrok.io/line/" + lineId
                }
              }]
            }
          }
       
          
        };


        return client.replyMessage(event.replyToken, Confirm);

      } 
  
    });  
   
  }

 else if (message[0] === "เลือกดูราคาต่ำกว่า") {

    console.log("message[1]=" + message[1])
    //queryDorms();
    queryDormsLowPrice(message[1])
    
    //floorDorms(message[1]);
    //console.log("results.name  "+results.name)
    // return client.replyMessage(event.replyToken, y);


  }

 else if (message[0] === "เลือกดูราคามากกว่า") {

    console.log("message[1]=" + message[1])
    //queryDorms();
    queryDormsHighPrice(message[1])
  
 
  }
  
 else if (message[1] === "ชั้น") {

    //console.log("message[1]=" + message[1])
    //queryDorms();
    roomDorms(message[0], message[2]);
    
    //floorDorms(message[1]);
    //console.log("results.name  "+results.name)
    // return client.replyMessage(event.replyToken, y);

  
  }

 else if (message[0] === "จอง") {

    console.log("message[2]=" + message[3])
    const yy = {
      "type": "template",
      "altText": "this is a confirm template",
      "template": {
        "type": "confirm",
        "text": "ต้องการเลือกหอ " + message[1] + "\n" + message[2] + message[3] + " ใช่ไหม",

        "actions": [{
            "type": "message",
            "label": "ยืนยัน",
            "text": "ยืนยัน>" + message[1] + ">" + message[2] + ">" + message[3]
          },
          {
            "type": "message",
            "label": "เลือกห้องใหม่",
            "text": "เลือกหอ>" + message[1]
          }
        ]
      }
    };
    return client.replyMessage(event.replyToken, yy);
  }

 
 else if (message[0] === "ยืนยัน") {


    let roomnumKey = message[3].split(' ');
    console.log("roomnumKey===" + roomnumKey[1])

    db.query("SELECT * FROM users WHERE line_id=?", lineId, (error, results) => {
      //console.log(results[0].name);
      if (error) {
        console.log(error);


      } else {


        db.query("SELECT * FROM user_in_room WHERE user_id = ?", [results[0].id], (error, results5) => {

          if (error) {
            console.log(error);


          } else {


            if (results5.length > 0) {
              const y = {
                "type": "text",
                "text": "คุณได้จองห้องไว้ก่อนหน้านี้แล้ว\nตรวจสอบข้อมูลการจองที่เมนู"
              };

              return client.replyMessage(event.replyToken, y);
              // console.log("results5.length=="+results5.length);
              // console.log("results5[0]=="+JSON.stringify(results5[0]));
              // console.log("results5[1]=="+JSON.stringify(results5[1]));

            } else {

              console.log("message[1]:" + message[1])
              db.query("SELECT * FROM dorms WHERE name=?", message[1], (error, results2) => {

                if (error) {
                  console.log(error);

                } else {

                  //console.log("results2: " + JSON.stringify(results2))


                  db.query("SELECT * FROM rooms WHERE dorm_id=? AND roomNum=? ", [results2[0].id, roomnumKey[1]], (error, results3) => {
                    //console.log("results3: " + JSON.stringify(results3))
                    if (error) {
                      console.log(error);


                    } else {






                      db.query('INSERT INTO user_in_room (user_id, dorm_id, room_id) VALUES (?,?,?) ', [results[0].id, results2[0].id, results3[0].id], (error, results4) => {

                        if (error) {
                          console.log(error);


                        } else {


                          db.query('UPDATE rooms SET status=? WHERE roomNum=? ', [1, roomnumKey[1]], (error, results6) => {

                            if (error) {
                              console.log(error);


                            } else {




                              return client.replyMessage(event.replyToken, y);
                            }


                          })


                        }


                      })


                    }



                  });



                }



              });

            }


          }

        });








        // })

      }

    });







  }

else if (event.message.text === 'ค้นหาระยะทางหอพักจากมช.') {

  db.query("SELECT * FROM dorms ORDER BY distance", (error, results) => {
    //console.log(results[0].name);
    const temp = Object.keys(results).map((key) => [Number(key), results[key]]);
    const n = temp.length;

    if (error) {
      console.log(error);
      //return res.status(404);

    } 
     
    else{
      console.log("position="+results[0].distance);
      
      let dorms = {
        "type": "flex",
        "altText": "I-Am-Teemo Flex Message",
        "contents": {
          "type": "carousel",
          "contents": pushDorms(n, results)
        }  
      }; 
    ;
    // console.log("position.lat="+JSON.stringify(results[0].position));
        
     
    return client.replyMessage(event.replyToken, dorms);

    }   

  }); 
    

  }

 else if (event.message.text === 'aaaa') {

    return client.replyMessage(event.replyToken, aaaa);


  }

 else if (event.message.text === 'a') {
 
    return client.replyMessage(event.replyToken, pngg);


  }

  else if (message[0] === "ที่อยู่หอ") {

    
    //queryDorms();
    
    //console.log("results.name  "+results.name)
    //return client.replyMessage(event.replyToken, reserve);
    
    db.query("SELECT * FROM dorms WHERE name=?", [message[1]], (error, results) => {
      //console.log(results[0].name);

      if (error) {
        console.log(error);
        //return res.status(404);

      } 
       
      else{
        const lo=
        {
          "type": "location",
          "title": "location",
          "address": results[0].name,
          "latitude": results[0].lat,
          "longitude": results[0].lng
        }
      ;
      // console.log("position.lat="+JSON.stringify(results[0].position));
          console.log("position.lat="+results[0].lat);
        


        return client.replyMessage(event.replyToken, lo);

      }   
  
    });  
   
  }

  else if (event.message.text === 'เลือกห้องใหม่') {

    return client.replyMessage(event.replyToken, aaaa);


  } else{
    console.log("text")
    return client.replyMessage( event.replyToken,text)
  }




  // if (event.message.text === 'เลือกดู ราคา2000-3000บาท') {
  //   queryDorms();
 
  
  //   // console.log("2000-3000: " + JSON.stringify(price20003000))
  //   //console.log("p20003000: " + p20003000)
  //   //console.log("psot2: " + post2)
  //   // return client.replyMessage( event.replyToken,  p20003000);

  // }
  // use reply API
  return

}

// listen on port