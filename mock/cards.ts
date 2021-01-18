import mockjs from 'mockjs'

export default {

    'GET /api/cards/':(req:any,res:any)=>{

        // const cardsByMock = mockjs.mock({
        //     'cardList|5-10':[ {
        //                 'cardID|+1':1,
        //                 'cardLastFourDigits':/^\d{4}/,
        //                 'name':/(Dish-)[a-z][A-Z][0-9]/,
        //                 'img':'@image("80x80",@color,@color,@word)',
        //                 'price': /^\d{2}\.\d{1}$/,
        //                 'desc':'@sentence'
        //             }
        //         ]
        // })

        const cards = [
            {
                cardID:1,
                cardLastFourDigits:"4242"
            },
            {
                cardID:2,
                cardLastFourDigits:"4545"
            }
        ]
        res.send(cards);
    }
}