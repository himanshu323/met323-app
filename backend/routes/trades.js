const express = require("express")

const Trade=require("../models/trade")
const router=express.Router();

router.get("",(req,resp)=>{

    let pageSize=+req.query.pageSize;

    let currentPage=req.query.currentPage;
    tradesQuery=Trade.find();

    if(pageSize && currentPage){

        tradesQuery.skip(pageSize*(currentPage-1)).limit(pageSize);
    }


    let fetchedTrades;
    tradesQuery.then(trades=>{

        fetchedTrades=trades;
        return trades.count();
    }).then(count=>{

        resp.status(200).send({
            message:"Trade fetched successfully",
            trades:fetchedTrades,
            maxPages:count
        })
    }).catch(error=>{

        resp.status(500).send({
            message:"Trades fetch failed"
        })
    })
});


router.post("",(req,resp)=>{

    let trade=new Trade({
        tradeDate:req.body.tradeDate,
        commodity:req.body.commodity,
        side:req.body.side,
        quantity:req.body.quantity,
        price:req.body.price,
        counterparty=req.body.counterparty,
        location=req.body.location

    })

    trade.save().then(data=>{
        resp.status(201).send({message:"Trade added successfully"})
    }).catch(error=>{
        resp.status(500).send({
            message:"Trade Add Failed"
        })
    })
})


module.exports=router;