const express = require('express');
const app = express();

var uzum = {
    "status": true,
    "List1": [
        {
            "img": 'https://www.gazeta.uz/media/img/2023/05/7VIzEp16847593932600_l.jpg',
        },
        {
            "img": "https://images.uzum.uz/chm424l40v9pplt2a1vg/main_page_banner.jpg",
        },
        {
            "img": "https://storage.kun.uz/source/9/IW9tYYvKjnLFsMRgINcrfnboO7WQpAZ0.jpg"
        }
    ],
    "yozgisavdo": [
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0r7y-Skwyvnay2Oi1YEgbVZnadQRTdb7JLnh-YAWFG5ku2TrwkYAe1HW2DCfcxTnBKk&usqp=CAU',
            "title": "Bug'doy uni eng yuqori narx 3 kg",
            "narx": "25 000 so'm",
            'Chegirma': "20 000 so'm",
            "oyiga": "1 000 so'm/oyiga"
        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6EBT6jhnT17pdSqGfn_WThc9VS30sfThDRo3HxkdZlAQFSPVZ5vfFktZsOzTyW2w0pE&usqp=CAU',
            "title": "Kir yuvish geli Pegas avtomat, 1.95 litr",
            "narx": "39 000 so'm",
            'Chegirma': "30 000 so'm",
            "oyiga": "1 500 so'm/oyiga"


        },

        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4udq_0Ud-05igN2cIOFnrzDC3rabbtU9m2GTAL9kRmV1T7bhUnN2CKce7Lj-n_pHkaQ&usqp=CAU',
            "title": "uch g'ldirakli samamkat Globber master lights pink",
            "narx": "200 000 so'm",
            'Chegirma': "150 000 so'm",
            "oyiga": "10 000 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCsXUgt6DCKAPBvlfNNQnNQLZKZRwAvmR4Cej8fiFgO5X3OXxQNrRxVdqd6qzWoAzy-c&usqp=CAU',
            "title": "Shampon va kondtsioner 2si 1da Head & Shoulders",
            "narx": "50 000 so'm",
            'Chegirma': "35 000 so'm",
            "oyiga": "1 500 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OYhAG3og-X4SK2ena40lHQOyMHdK7MkRrag4s7gwsatRymf51nUWA8s31meENWiyqK4&usqp=CAU',
            "title": "Kir yuvish kukuni Losk Orxideya",
            "narx": "38 000 so'm",
            'Chegirma': "30 000 so'm",
            "oyiga": "1 500 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJlm8hDYH-3ihCo693s3j-6TRQgLFbD0s88eoj4Q43F8bYiNMHLp6Wy1zQpb5PfYnfgA&usqp=CAU',
            "title": "uch g'ldirakli ko'k samamkat",
            "narx": "150 000 so'm",
            'Chegirma': "100 000 so'm",
            "oyiga": "2 000 so'm/oyiga"


        },
        {
            "img": 'https://images.uzum.uz/cf76lfov1htd23albh6g/t_product_540_high.jpg',
            "title": "Ayollar futbolkasi Playowo 100 % Paxta",
            "narx": "65 000 so'm",
            'Chegirma': "55 000 so'm",
            "oyiga": "1 500 so'm/oyiga"


        },
        {
            "img": 'https://images.uzum.uz/chjksmt6sfhndlbmg7pg/t_product_540_high.jpg',
            "title": "2 yoshdan bolalar uchun shishiriladigan basseyn",
            "narx": "77 000 so'm",
            'Chegirma': "500 000 so'm",
            "oyiga": "5 000 so'm/oyiga"


        },
    ],
    "Yangi": [
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0r7y-Skwyvnay2Oi1YEgbVZnadQRTdb7JLnh-YAWFG5ku2TrwkYAe1HW2DCfcxTnBKk&usqp=CAU',
            "title": "Bug'doy uni eng yuqori narx 3 kg",
            "narx": "25 000 so'm",
            'Chegirma': "20 000 so'm",
            "oyiga": "1 000 so'm/oyiga"

        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6EBT6jhnT17pdSqGfn_WThc9VS30sfThDRo3HxkdZlAQFSPVZ5vfFktZsOzTyW2w0pE&usqp=CAU',
            "title": "Kir yuvish geli Pegas avtomat, 1.95 litr",
            "narx": "39 000 so'm",
            'Chegirma': "30 000 so'm",
            "oyiga": "15 00 so'm/oyiga"
        },

        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4udq_0Ud-05igN2cIOFnrzDC3rabbtU9m2GTAL9kRmV1T7bhUnN2CKce7Lj-n_pHkaQ&usqp=CAU',
            "title": "uch g'ldirakli samamkat Globber master lights pink",
            "narx": "200 000 so'm",
            'Chegirma': "150 000 so'm",
            "oyiga": "15 000 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCsXUgt6DCKAPBvlfNNQnNQLZKZRwAvmR4Cej8fiFgO5X3OXxQNrRxVdqd6qzWoAzy-c&usqp=CAU',
            "title": "Shampon va kondtsioner 2si 1da Head & Shoulders",
            "narx": "50 000 so'm",
            'Chegirma': "35 000 so'm",
            "oyiga": "3 000 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OYhAG3og-X4SK2ena40lHQOyMHdK7MkRrag4s7gwsatRymf51nUWA8s31meENWiyqK4&usqp=CAU',
            "title": "Kir yuvish kukuni Losk Orxideya",
            "narx": "38 000 so'm",
            'Chegirma': "30 000 so'm",
            "oyiga": "2 000 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJlm8hDYH-3ihCo693s3j-6TRQgLFbD0s88eoj4Q43F8bYiNMHLp6Wy1zQpb5PfYnfgA&usqp=CAU',
            "title": "uch g'ldirakli ko'k samamkat",
            "narx": "150 000 so'm",
            'Chegirma': "100 000 so'm",
            "oyiga": "5 000 so'm/oyiga"


        },
        {
            "img": 'https://images.uzum.uz/cf76lfov1htd23albh6g/t_product_540_high.jpg',
            "title": "Ayollar futbolkasi Playowo 100 % Paxta",
            "narx": "65 000 so'm",
            'Chegirma': "55 000 so'm",
            "oyiga": "2 000 so'm/oyiga"


        },
        {
            "img": 'https://images.uzum.uz/chjksmt6sfhndlbmg7pg/t_product_540_high.jpg',
            "title": "2 yoshdan bolalar uchun shishiriladigan basseyn",
            "narx": "77 000 so'm",
            'Chegirma': "500 000 so'm",
            "oyiga": "2 000 so'm/oyiga"


        },
    ],
    
    "top": [
        {
            "img": 'https://images.uzum.uz/chjksmt6sfhndlbmg7pg/t_product_540_high.jpg',
            "title": "2 yoshdan bolalar uchun shishiriladigan basseyn",
            "narx": "77 000 so'm",
            'Chegirma': "500 000 so'm",
            "oyiga": "5 000 so'm/oyiga"


        },
        {
            "img": 'https://images.uzum.uz/cf76lfov1htd23albh6g/t_product_540_high.jpg',
            "title": "Ayollar futbolkasi Playowo 100 % Paxta",
            "narx": "65 000 so'm",
            'Chegirma': "55 000 so'm",
            "oyiga": "3 000 so'm/oyiga"


        },

        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJlm8hDYH-3ihCo693s3j-6TRQgLFbD0s88eoj4Q43F8bYiNMHLp6Wy1zQpb5PfYnfgA&usqp=CAU',
            "title": "uch g'ldirakli ko'k samamkat",
            "narx": "150 000 so'm",
            'Chegirma': "100 000 so'm",
            "oyiga": "5 000 so'm/oyiga"


        },

        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OYhAG3og-X4SK2ena40lHQOyMHdK7MkRrag4s7gwsatRymf51nUWA8s31meENWiyqK4&usqp=CAU',
            "title": "Kir yuvish kukuni Losk Orxideya",
            "narx": "38 000 so'm",
            'Chegirma': "30 000 so'm",
            "oyiga": "2 000 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCsXUgt6DCKAPBvlfNNQnNQLZKZRwAvmR4Cej8fiFgO5X3OXxQNrRxVdqd6qzWoAzy-c&usqp=CAU',
            "title": "Shampon va kondtsioner 2si 1da Head & Shoulders",
            "narx": "50 000 so'm",
            'Chegirma': "35 000 so'm",
            "oyiga": "3 000 so'm/oyiga"


        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0r7y-Skwyvnay2Oi1YEgbVZnadQRTdb7JLnh-YAWFG5ku2TrwkYAe1HW2DCfcxTnBKk&usqp=CAU',
            "title": "Bug'doy uni eng yuqori narx 3 kg",
            "narx": "25 000 so'm",
            'Chegirma': "20 000 so'm",
            "oyiga": "2 000 so'm/oyiga"

        },
        {
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OYhAG3og-X4SK2ena40lHQOyMHdK7MkRrag4s7gwsatRymf51nUWA8s31meENWiyqK4&usqp=CAU',
            "title": "Parashok",
            "narx": "65 000 so'm",
            'Chegirma': "55 000 so'm",
            "oyiga": "1 500 so'm/oyiga"


        },
    ],

}


app.get('/uzum', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    res.send(uzum);
});

HOST = "192.168.1.41";
//192.168.42.184
PORT = 3000;

app.listen(PORT, () => {
    console.log(`YOUR SERVER RUNNING ON http://${HOST}:${PORT}/uzum`);
});


