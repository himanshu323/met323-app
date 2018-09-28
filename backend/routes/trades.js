const express = require("express")

const Trade=require("../models/trade")

const _=require("lodash");
const router=express.Router();

router.get("",(req,resp)=>{

    // let pageSize=+req.query.pageSize;

    // let currentPage=req.query.currentPage;
    tradesQuery=Trade.find();

    // if(pageSize && currentPage){

    //     tradesQuery.skip(pageSize*(currentPage-1)).limit(pageSize);
    // }


    let fetchedTrades;
    tradesQuery.then(trades=>{

        console.log(trades);
        fetchedTrades=trades;
        return trades.length;
    }).then(count=>{

        resp.status(200).send({
            message:"Trade fetched successfully",
            trades:fetchedTrades
            //,
           // maxPages:count
        })
    }).catch(error=>{

        console.log(error);
        resp.status(500).send({
            message:"Trades fetch failed"
        })
    })
});


router.get("/:id",(req,resp)=>{



    
    Trade.findById(req.params.id).then(trade=>{
       
        if(!trade){
            
           return resp.status(404).send({
              message:"Trade not found"  
            })
        }
      

        console.log(trade);
        return resp.status(200).send(trade)
        
    }).catch(error=>{

        resp.status(500).send({
            message:"Post fetch failed"
        })
    })
})

router.put("/:id",(req,resp)=>{

    let trade=new Trade({
        _id:req.params.id,
        tradeDate: req.body.tradeDate,
        commodity: req.body.commodity,
        side: req.body.side,
        quantity: req.body.quantity,
        price: req.body.price,
        counterparty: req.body.counterparty,
        location: req.body.location,
        tradeId:req.body.tradeId

    })

    Trade.updateOne({_id:req.params.id},trade).then(trade=>{

        console.log(trade);
            if(trade.n>0){

                return resp.status(201).send({
                    message:"Updated successfully"
                })
            }

            else{
                return resp.status(400).send({
                    message:"Unable to update"
                })
            }

    }).catch(error=>{

        resp.status(500).send({
            message:"Update trade failed"
        })
    })

})

router.delete("/:id",(req,resp)=>{

    Trade.deleteOne({ _id: req.params.id }).then((res) => {

        if (res.n > 0) {

            resp.send({ message: "Trade deleted successfully" })
        }
        else {
            resp.status(401).send({
                message: "Un-Authorized"
            })
        }

    }).catch(error => {
        resp.status(500).send({
            message: "Delete Trade failed"
        })
    }) 
})

router.post("",(req,resp)=>{

    let tradeId=_.random(1000000,9999999);
    let trade=new Trade({
        tradeDate:req.body.tradeDate,
        commodity:req.body.commodity,
        side:req.body.side,
        quantity:req.body.quantity,
        price:req.body.price,
        counterparty:req.body.counterparty,
        location:req.body.location,
        tradeId

    })

    console.log("Inside");

    console.log(trade);

    trade.save().then(data=>{
        resp.status(201).send({message:"Trade added successfully"})
    }).catch(error=>{

        console.log(error);
        resp.status(500).send({
            message:"Trade Add Failed"
        })
    })
})


module.exports=router;