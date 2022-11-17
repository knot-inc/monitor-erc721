import express from "express";

const app = express();
const port = 8080; // default port to listen

app.get( "/nft_result", ( req, res ) => {
    // TODO: Add your code to track NFT transfer
    // res.json({
    //     message: `tokenId: ${tokenId.toString()}, to: ${to}`,
    // });
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );